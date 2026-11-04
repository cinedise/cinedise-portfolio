'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { CATEGORY_GRID_ITEMS } from '@/constants/categories';
import './HeaderNav.css';

const SERVICES = CATEGORY_GRID_ITEMS.flatMap((item) => item.links);

const SECTION_LINKS = [
  { label: 'Works', sectionId: 'work' },
  { label: 'About', sectionId: 'team' },
];

// Keeps section headings clear of the nav when it sits on its own row below the logo
const STACKED_SCROLL_OFFSET = 70;
const STACKED_MAX_WIDTH = 820;
const SCROLL_DURATION_MS = 900;

// How long to wait for the homepage to finish its page transition before scrolling anyway
const SECTION_RETRY_MS = 200;
const SECTION_MAX_RETRIES = 20;

// Smooth Scrollbar is loaded globally by the legacy theme scripts
type ThemeWindow = Window & {
  Scrollbar?: {
    get(element: HTMLElement):
      | {
          offset: { y: number };
          update(): void;
          scrollTo(x: number, y: number, duration: number): void;
        }
      | undefined;
  };
};

/**
 * Checks the content's slide-in as well as the overlay, because the theme's first-load animation
 * can hide the overlay early if the visitor navigates while it's still running.
 */
function isPageTransitionRunning() {
  const overlay = document.getElementById('page-transition');
  const contentWrap = document.getElementById('content-wrap');

  const isOverlayShown = !!overlay && getComputedStyle(overlay).visibility !== 'hidden';
  const isContentSliding =
    !!contentWrap && new DOMMatrixReadOnly(getComputedStyle(contentWrap).transform).m42 !== 0;

  return isOverlayShown || isContentSliding;
}

function scrollToSection(target: HTMLElement) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const offset = window.innerWidth <= STACKED_MAX_WIDTH ? STACKED_SCROLL_OFFSET : 0;

  // The theme scrolls with Smooth Scrollbar on desktop, and natively on touch devices
  const scrollContainer = document.getElementById('scroll-container');
  const scrollbar = scrollContainer && (window as ThemeWindow).Scrollbar?.get(scrollContainer);

  if (scrollbar) {
    // The page may have just changed, which leaves the scrollbar's limits out of date
    scrollbar.update();
    const top = scrollbar.offset.y + target.getBoundingClientRect().top - offset;
    scrollbar.scrollTo(0, top, reduceMotion ? 0 : SCROLL_DURATION_MS);
    return;
  }

  animateWindowScroll(target, offset, reduceMotion ? 0 : SCROLL_DURATION_MS);
}

let cancelWindowScroll: (() => void) | undefined;

/**
 * Native smooth scrolling stops short here because a ScrollTrigger refresh mid-scroll cancels it,
 * so each frame sets the position directly. 'instant' overrides the site's scroll-behavior: smooth.
 */
function animateWindowScroll(target: HTMLElement, offset: number, duration: number) {
  cancelWindowScroll?.();

  const start = window.scrollY;
  const startTime = performance.now();
  let frame = 0;

  const cancel = () => {
    cancelAnimationFrame(frame);
    window.removeEventListener('touchstart', cancel);
    window.removeEventListener('wheel', cancel);
    cancelWindowScroll = undefined;
  };

  const step = (now: number) => {
    const progress = duration > 0 ? Math.min((now - startTime) / duration, 1) : 1;
    const eased = 1 - (1 - progress) ** 3;
    const end = window.scrollY + target.getBoundingClientRect().top - offset;

    window.scrollTo({ top: start + (end - start) * eased, behavior: 'instant' });

    if (progress < 1) {
      frame = requestAnimationFrame(step);
    } else {
      cancel();
    }
  };

  cancelWindowScroll = cancel;
  window.addEventListener('touchstart', cancel, { passive: true });
  window.addEventListener('wheel', cancel, { passive: true });
  frame = requestAnimationFrame(step);
}

export default function HeaderNav() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [pendingSectionId, setPendingSectionId] = useState<string | null>(null);
  const servicesRef = useRef<HTMLLIElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!isServicesOpen) return;

    const handlePointerDown = (e: PointerEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsServicesOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isServicesOpen]);

  // Finish a Works or About click made on another page once the homepage has settled,
  // because its layout is still shifting during the page transition
  useEffect(() => {
    if (!pendingSectionId || pathname !== '/') return;

    let retries = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tryScroll = () => {
      const target = document.getElementById(pendingSectionId);
      const isReady = target && !isPageTransitionRunning();

      if (!isReady && retries < SECTION_MAX_RETRIES) {
        retries++;
        timer = setTimeout(tryScroll, SECTION_RETRY_MS);
        return;
      }

      if (target) scrollToSection(target);
      setPendingSectionId(null);
    };

    timer = setTimeout(tryScroll, SECTION_RETRY_MS);
    return () => clearTimeout(timer);
  }, [pendingSectionId, pathname]);

  const handleSectionClick = (sectionId: string) => {
    const target = pathname === '/' ? document.getElementById(sectionId) : null;
    if (target) {
      scrollToSection(target);
    } else {
      setPendingSectionId(sectionId);
      router.push('/');
    }
  };

  const handleTriggerClick = (e: React.MouseEvent) => {
    // A mouse has already opened the dropdown by hovering, so don't close it again on click
    const { pointerType } = e.nativeEvent as PointerEvent;
    setIsServicesOpen((isOpen) => (pointerType === 'mouse' ? true : !isOpen));
  };

  const handleServicesBlur = (e: React.FocusEvent) => {
    if (!servicesRef.current?.contains(e.relatedTarget as Node | null)) {
      setIsServicesOpen(false);
    }
  };

  return (
    <nav className="header-nav" aria-label="Primary">
      <ul className="header-nav-list">
        <li
          ref={servicesRef}
          className={`header-nav-services ${isServicesOpen ? 'is-open' : ''}`}
          onPointerEnter={(e) => e.pointerType === 'mouse' && setIsServicesOpen(true)}
          onPointerLeave={(e) => e.pointerType === 'mouse' && setIsServicesOpen(false)}
          onBlur={handleServicesBlur}
        >
          <button
            ref={triggerRef}
            type="button"
            className="header-nav-link"
            aria-expanded={isServicesOpen}
            aria-controls="header-nav-services-list"
            onClick={handleTriggerClick}
          >
            Services
            <i className="fas fa-chevron-down header-nav-caret" aria-hidden="true"></i>
          </button>

          <div className="header-nav-dropdown">
            <ul id="header-nav-services-list" className="header-nav-dropdown-list">
              {SERVICES.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    target={service.external ? '_blank' : undefined}
                    rel={service.external ? 'noopener' : undefined}
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>

        {SECTION_LINKS.map(({ label, sectionId }) => (
          <li key={sectionId}>
            {/* Buttons because theme.js hijacks clicks on every a[href^="#"] present at page load */}
            <button
              type="button"
              className="header-nav-link"
              onClick={() => handleSectionClick(sectionId)}
            >
              {label}
            </button>
          </li>
        ))}

        <li>
          <Link href="/contact" className="header-nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
