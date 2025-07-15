import { Link } from "react-router";

const Footer = () => {
  const footerLinks = [
    { text: "home", to: "/" },
    { text: "contact us", to: "/contact-us" },
    { text: "about us", to: "/about-us" },
  ];
  return (
    <footer className="!py-5 sm:px-10 !px-5">
      <div className="bg-neutral-700 h-[1px] w-full !my-5"></div>

      <div className="flex flex-col gap-y-4 md:flex-row md:items-center justify-between">
        <div className="flex justify-center">
          {footerLinks.map((link, i) => (
            <Link
              to={link.to}
              key={link.text}
              className="font-semibold text-secondary-500 text-xs cursor-pointer"
            >
              {link.text}
              {"  "}
              {i !== footerLinks.length - 1 && <span className="!mx-2">|</span>}
            </Link>
          ))}
        </div>
        <p className="font-semibold text-gray text-xs">
          Copyright @ 2025 Freelancer App Inc. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
