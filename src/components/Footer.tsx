import { siteConfig } from '@/config/site';
import './Footer.css';

const SOCIAL_LINKS = [
  { label: 'Instagram', href: siteConfig.social.instagram.url, icon: 'fa-instagram' },
  { label: 'YouTube', href: siteConfig.social.youtube.url, icon: 'fa-youtube' },
];

export default function Footer() {
  return (
    <footer id="tt-footer" className="site-footer">
      <div className="tt-footer-inner site-footer-inner">
        <ul className="site-footer-social">
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <i className={`fab ${icon}`} aria-hidden="true"></i>
              </a>
            </li>
          ))}
        </ul>

        <div className="tt-copyright">
          © Copyright -{' '}
          <a
            href={siteConfig.company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="tt-link"
          >
            {siteConfig.company.url.replace('https://', '')}
          </a>
        </div>
      </div>
    </footer>
  );
}
