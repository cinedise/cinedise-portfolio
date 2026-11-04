import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact | Cinedise Studio',
  description:
    'Get in touch with Cinedise Studio for your video, film production, and marketing needs.',
  openGraph: {
    title: 'Contact | Cinedise Studio',
    description:
      'Get in touch with Cinedise Studio for your video, film production, and marketing needs.',
  },
};

export default function Contact() {
  return (
    <div id="work">
      {/* Contact Section */}
      <div className="tt-section">
        <div className="tt-section-inner tt-wrap padding-top-150">
          <div className="tt-row">
            <div className="tt-col-lg-5 padding-right-lg-5-p">
              <div className="tt-heading tt-heading-lg margin-bottom-10-p anim-fadeinup">
                <h3 className="tt-heading-subtitle text-gray">Get in Touch</h3>
                <h2 className="tt-heading-title">
                  Drop Us
                  <br /> A Line
                </h2>
              </div>

              <ul className="tt-contact-info padding-bottom-40 text-gray">
                {siteConfig.contact.phones.map((phone, index) => (
                  <li key={index} className="anim-fadeinup">
                    <span className="tt-ci-icon">
                      <i className="fas fa-phone"></i>
                    </span>
                    <a href={`tel:${phone.number}`} className="tt-link">
                      {phone.display}
                    </a>
                  </li>
                ))}
                <li className="anim-fadeinup">
                  <span className="tt-ci-icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="tt-link">
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li className="anim-fadeinup">
                  <h6 className="no-margin-bottom margin-top-40">Follow:</h6>
                  <div className="social-buttons">
                    <ul>
                      {Object.values(siteConfig.social).map(({ label, url, icon }) => (
                        <li key={label}>
                          <a
                            href={url}
                            className="magnetic-item"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                          >
                            <i
                              className={`fab ${icon}`}
                              style={{ fontSize: 22 }}
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="tt-col-lg-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Page Nav */}
      <div className="tt-section padding-bottom-xlg-150">
        <div className="tt-section-inner tt-wrap">
          <div className="tt-page-nav tt-pn-scroll">
            <a href="/#work" className="tt-pn-link anim-fadeinup">
              <div className="tt-pn-title">Portfolio</div>
              <div className="tt-pn-hover-title">Portfolio</div>
            </a>
            <div className="tt-pn-subtitle anim-fadeinup">Selected Works</div>
          </div>
        </div>
      </div>
    </div>
  );
}
