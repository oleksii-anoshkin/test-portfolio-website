import "../css/Portfolio.css";
// images
import firstImg from "../images/first-project.webp";
import secondImg from "../images/second-project.webp";

export default function Portfolio() {
  // classes
  const containerClass = "portfolio";
  const boxBgClass = "portfolio__bg";
  const boxContentClass = "portfolio__content";
  const boxTextContentClass = "portfolio__texts";
  const titleClass = "portfolio__title";
  const beforeTitleClass = "portfolio__beforetitle";
  const subTitleClass = "portfolio__subtitle";
  const linkClass = "portfolio__link";
  const itemsClass = "portfolio__items";
  const itemClass = "portfolio__item";
  const imgClass = "portfolio__img";

  // texts
  const sectionTitle = "Portfolio";
  const titleText = "All Creative";
  const subTitleText = "Projects";
  const sectionId = "works";
  const href = "https://example.com/";
  const rel = "noopener noreferrer nofollow";
  const target = "_blank";
  const imgAlt = "project name";

  return (
    <>
      <section className={containerClass} id={sectionId}>
        <div className={boxBgClass}></div>
        <div className={boxContentClass}>
          <div className={boxTextContentClass}>
            <h2 className={titleClass}>
              <span className={beforeTitleClass}>{sectionTitle}</span>
              {titleText}
              <span className={subTitleClass}>{subTitleText}</span>
            </h2>
            <a className={linkClass} href={href} target={target} rel={rel}>
              Explore More
            </a>
          </div>
          <ul className={itemsClass}>
            <li className={itemClass}>
              <img className={imgClass} src={firstImg} alt={imgAlt} />
            </li>
            <li className={itemClass}>
              <img className={imgClass} src={secondImg} alt={imgAlt} />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
