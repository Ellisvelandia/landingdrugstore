import React from "react";

// Reusable Column Component
interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div className="flex flex-col">
    <h5 className="mb-4 text-lg font-bold text-gray-100">{title}</h5>
    <ul className="space-y-2">
      {links.map(({ label, href }, index) => (
        <li key={index}>
          <a
            href={href}
            className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300"
            aria-label={label}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="mt-8 bg-gradient-to-b from-gray-900 to-gray-800 px-4 py-12 text-gray-100">
      {/* Main Content */}
      <nav
        className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        aria-label="Footer Navigation"
      >
        {/* Help & Support */}
        <FooterColumn
          title="Help & Support"
          links={[
            { label: "Customer Service", href: "/support" },
            { label: "Returns", href: "/returns" },
            { label: "Tips & Advice", href: "/tips" },
            { label: "FAQs", href: "/faqs" },
          ]}
        />

        {/* Our Services */}
        <FooterColumn
          title="Our Services"
          links={[
            { label: "Over-the-counter medicines", href: "/medicines" },
            { label: "Subscribe & Save", href: "/subscribe" },
            { label: "Refer a Friend", href: "/refer" },
            { label: "Baby Club Signup", href: "/baby-club" },
          ]}
        />

        {/* About Us */}
        <FooterColumn
          title="About Us"
          links={[
            { label: "Our Company", href: "/company" },
            { label: "Our Team", href: "/team" },
            { label: "Careers", href: "/careers" },
            { label: "Affiliates", href: "/affiliates" },
          ]}
        />

        {/* Social */}
        <div className="flex flex-col">
          <h5 className="mb-4 text-lg font-bold text-gray-100">Social</h5>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="hover:text-blue-500 transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-blue-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="mx-auto mt-12 max-w-7xl border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>&copy; 2025 BioPharmDirect. All rights reserved.</p>
        <p className="mt-2">
          <a
            href="/privacy"
            className="hover:underline text-gray-300 transition-colors duration-300"
          >
            Privacy
          </a>{" "}
          |{" "}
          <a
            href="/terms"
            className="hover:underline text-gray-300 transition-colors duration-300"
          >
            Terms & Conditions
          </a>{" "}
          |{" "}
          <a
            href="/sitemap"
            className="hover:underline text-gray-300 transition-colors duration-300"
          >
            Site Map
          </a>
        </p>
      </div>
    </footer>
  );
}
