'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { brandingAssets } from '@/config/content';
import HeaderNav from './HeaderNav';
import './Header.css';

export default function Header() {
  useEffect(() => {
    document.body.classList.add('tt-header-fixed-on');
  }, []);

  return (
    <header id="tt-header" className="tt-header-fixed">
      <div className="tt-header-inner">
        <div className="tt-header-col">
          <div className="tt-logo">
            <Link href="/">
              <img
                src={brandingAssets.logoLight}
                className="tt-logo-light magnetic-item"
                alt="Cinedise Studio"
              />
              <img
                src={brandingAssets.logoDark}
                className="tt-logo-dark magnetic-item"
                alt="Cinedise Studio"
              />
            </Link>
          </div>
        </div>

        <HeaderNav />
      </div>
    </header>
  );
}
