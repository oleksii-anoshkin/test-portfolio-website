import "../css/MenuBtn.css";

export default function MenuBtn({ btnLogo, setBtnLogo }) {
  // classes
  const menuBtnBgClass = "menu material-symbols-outlined";
  const menuItemsClass = "menu__items";
  const menuItemClass = "menu__item";
  const menuLinkClass = "menu__link";
  const activeClass = "active";

  // texts
  const menuText = "menu";
  const closeText = "close";
  const aboutLinkText = "About";
  const aboutIdText = "about";
  const servicesLinkText = "Services";
  const servicesIdText = "services";
  const portfolioLinkText = "Portfolio";
  const portfolioIdText = "works";
  const clientsLinkText = "Clients";
  const clientsIdText = "clients";
  const testimonialsLinkText = "Testimonials";
  const testimonialsIdText = "testimonials";
  const blogLinkText = "Blog";
  const blogIdText = "blog";
  const contactLinkText = "Contact";
  const contactIdText = "contact";

  function showMenu(e) {
    document
      .querySelectorAll(`.${menuItemsClass}`)
      .forEach(
        (link) =>
          (link.className = `${menuItemsClass} ${
            link.className.includes(activeClass) ? "" : activeClass
          }`)
      );

    setBtnLogo(btnLogo === menuText ? closeText : menuText);
  }

  return (
    <>
      <nav>
        <button className={menuBtnBgClass} type="button" onClick={showMenu}>
          {btnLogo}
        </button>
        <ul className={menuItemsClass}>
          <li className={menuItemClass}>
            <a className={menuLinkClass} href={`#${aboutIdText}`}>
              {aboutLinkText}
            </a>
          </li>
          <li className={menuItemClass}>
            <a className={menuLinkClass} href={`#${servicesIdText}`}>
              {servicesLinkText}
            </a>
          </li>
          <li className={menuItemClass}>
            <a className={menuLinkClass} href={`#${portfolioIdText}`}>
              {portfolioLinkText}
            </a>
          </li>
          <li className={menuItemClass}>
            <a className={menuLinkClass} href={`#${clientsIdText}`}>
              {clientsLinkText}
            </a>
          </li>
          <li className={menuItemClass}>
            <a className={menuLinkClass} href={`#${blogIdText}`}>
              {blogLinkText}
            </a>
          </li>
          <li className={menuItemClass}>
            <a className={menuLinkClass} href={`#${testimonialsIdText}`}>
              {testimonialsLinkText}
            </a>
          </li>
          <li className={menuItemClass}>
            <a className={menuLinkClass} href={`#${contactIdText}`}>
              {contactLinkText}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
