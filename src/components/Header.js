// styles
import "../css/Header.css";
// images
import logo from "../images/logo.webp";

export default function Header() {
  // classes
  const headerClass = "header";
  const navClass = "header__nav nav";
  const itemsClass = "nav__items";
  const itemClass = "nav__item item";
  const linkClass = "item__link";
  const logoClass = "nav__logo logo";
  const logoImgClass = "logo__img";
  const activeClass = "current";

  // texts
  const logoAlt = "logo";
  const firstLinkText = "About";
  const firstLinkHref = "about";
  const secondLinkText = "Services";
  const secondLinkHref = "services";
  const thirdLinkText = "Works";
  const thirdLinkHref = "works";
  const fourthLinkText = "Blog";
  const fourthLinkHref = "blog";
  const aboutId = "about";

  function setCurrentClass(e) {
    document
      .querySelectorAll(`.${linkClass}`)
      .forEach(
        (link) =>
          (link.className = `${linkClass} ${
            link.id === e.target.id ? activeClass : ""
          }`)
      );
  }

  return (
    <>
      <header id={aboutId} className={headerClass}>
        <nav className={navClass}>
          <a className={logoClass} href="/">
            <img className={logoImgClass} src={logo} alt={logoAlt} />
          </a>
          <ul className={itemsClass}>
            <li className={itemClass}>
              <a
                id={`${firstLinkHref}-btn`}
                className={`${linkClass} ${activeClass}`}
                href={`#${firstLinkHref}`}
                onClick={setCurrentClass}>
                {firstLinkText}
              </a>
            </li>
            <li className={itemClass}>
              <a
                id={`${secondLinkHref}-btn`}
                className={linkClass}
                href={`#${secondLinkHref}`}
                onClick={setCurrentClass}>
                {secondLinkText}
              </a>
            </li>
            <li className={itemClass}>
              <a
                id={`${thirdLinkHref}-btn`}
                className={linkClass}
                href={`#${thirdLinkHref}`}
                onClick={setCurrentClass}>
                {thirdLinkText}
              </a>
            </li>
            <li className={itemClass}>
              <a
                id={`${fourthLinkHref}-btn`}
                className={linkClass}
                href={`#${fourthLinkHref}`}
                onClick={setCurrentClass}>
                {fourthLinkText}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
