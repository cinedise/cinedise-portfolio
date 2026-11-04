import Link from 'next/link';
import { brands } from '@/config/content';

export default function Brands() {
  return (
    <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-150">
      <div className="tt-section-inner tt-wrap">
        <div className="tt-heading tt-heading-xxlg tt-heading-stroke tt-heading-center margin-bottom-10-p anim-fadeinup">
          <h3 className="tt-heading-subtitle text-gray">Proudly Served</h3>
          <h2 className="tt-heading-title">Brands</h2>
        </div>

        <ul className="tt-logo-wall cl-col-44 anim-fadeinup">
          {brands.map((brand) => (
            <li key={brand.name}>
              <a
                href={brand.websiteUrl}
                className="cursor-alter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={brand.logoUrl} alt={brand.name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
