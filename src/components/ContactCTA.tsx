import Link from 'next/link';

export default function ContactCTA() {
  return (
    <div className="tt-section padding-bottom-xlg-150">
      <div className="tt-section-inner tt-wrap">
        <div className="tt-page-nav tt-pn-scroll">
          <Link href="/contact" className="tt-pn-link anim-fadeinup" rel="noopener">
            <div className="tt-pn-title">Contact</div>
            <div className="tt-pn-hover-title">Contact</div>
          </Link>

          <div className="tt-pn-subtitle anim-fadeinup">
            Let&apos;s make something great together!
          </div>
        </div>
      </div>
    </div>
  );
}
