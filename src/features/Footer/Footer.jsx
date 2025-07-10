const Footer = () => {
    const footerLinks = ['درباره ما','پشتیبانی','مقالات']
  return (
    <footer className="!py-5 sm:px-10 !px-5">

<div className="bg-neutral-700 h-[1px] w-full !my-5"></div>
        
      <div className="flex flex-col md:flex-row md:items-center justify-between">

        <div className="flex">
          {footerLinks.map((link, i) => (
            <p key={link} className="font-semibold text-secondary-500 text-xs">
              {link}
              {"  "}
              {i !== footerLinks.length - 1 && <span className="!mx-2">|</span>}
            </p>
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
