// styles
import "../css/Footer.css";
// images
import vector from "../images/vector.webp";
import instagram from "../images/instagram.webp";
import linkedin from "../images/linkedin.webp";

export default function Footer() {
  // classes
  const footerClass = "footer";
  const footerTitleClass = "footer__title";
  const footerNavClass = "footer__nav";
  const itemsClass = "footer__nav-items";
  const itemClass = "footer__nav-item";
  const linkClass = "footer__link";
  const linkImgClass = "footer__link-img";

  // texts
  const titleText = "Let’s be Friends";
  const rel = "noopener noreferrer nofollow";
  const target = "_blank";

  // href
  const vectorHref = "https://example.com/";
  const instagramHref = "https://example.com/";
  const linkedinHref = "https://example.com/";

  // alt
  const vectorAlt = "vector";
  const instagramAlt = "instagram";
  const linkedinAlt = "linkedin";

  return (
    <>
      <footer className={footerClass}>
        <p className={footerTitleClass}>{titleText}</p>
        <nav className={footerNavClass}>
          <ul className={itemsClass}>
            <li className={itemClass}>
              <a
                className={linkClass}
                href={vectorHref}
                target={target}
                rel={rel}>
                <img
                  className={linkImgClass}
                  src={vector}
                  alt={vectorAlt}></img>
              </a>
            </li>
            <li className={itemClass}>
              <a
                className={linkClass}
                href={instagramHref}
                target={target}
                rel={rel}>
                <img
                  className={linkImgClass}
                  src={instagram}
                  alt={instagramAlt}></img>
              </a>
            </li>
            <li className={itemClass}>
              <a
                className={linkClass}
                href={linkedinHref}
                target={target}
                rel={rel}>
                <img
                  className={linkImgClass}
                  src={linkedin}
                  alt={linkedinAlt}></img>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
