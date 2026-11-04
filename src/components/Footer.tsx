import { siteConfig } from '@/config/site';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="tt-footer" className="site-footer">
      <div className="tt-footer-inner site-footer-inner">
        <ul className="site-footer-social">
          {Object.values(siteConfig.social).map(({ label, url, icon }) => (
            <li key={label}>
              <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
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
