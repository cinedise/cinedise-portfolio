'use client';

import { useState, useEffect } from 'react';

export default function ShareOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('ph-share-open');
    } else {
      document.body.classList.remove('ph-share-open');
    }
  }, [isOpen]);

  const handleCopyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      // Ideally show a toast or change icon briefly
      alert('Link copied to clipboard!');
    });
  };

  return (
    <>
      <div className={`ph-share ${isOpen ? 'active' : ''}`}>
        <div className="ph-share-trigger ph-appear" onClick={() => setIsOpen(true)}>
          <div className="ph-share-text">Share</div>
          <div className="ph-share-icon magnetic-item">
            <i className="fas fa-share-alt"></i>
          </div>
        </div>
      </div>

      <div
        className="ph-share-content !bg-[#0a0a0a]"
        style={{
          visibility: isOpen ? 'visible' : 'hidden',
          opacity: isOpen ? 1 : 0,
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <div className="ph-share-close cursor-close" onClick={() => setIsOpen(false)}>
          <div className="bg-noise"></div>
        </div>

        <div className="ph-share-inner">
          <h2 className="ph-share-title ph-share-appear">Spread the Word!</h2>
          <div className="ph-share-subtitle ph-share-appear">
            Share this project with your friends
          </div>

          <div className="social-buttons ph-share-appear">
            <ul>
              <li>
                <a
                  href="#"
                  className="magnetic-item copy-link-btn"
                  title="Copy link"
                  onClick={handleCopyLink}
                >
                  <i className="fas fa-link"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="ph-share-ghost ph-share-appear">Share</div>

        <div className="ph-share-close-btn" onClick={() => setIsOpen(false)}>
          <i className="fas fa-times"></i>
        </div>
      </div>
    </>
  );
}
