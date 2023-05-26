// styles
import "../css/Services.css";
// images
import research from "../images/research-ico.webp";
import design from "../images/design-ico.webp";
import development from "../images/development-ico.webp";

export default function Services() {
  // classes
  const containerClass = "services";
  const titleClass = "services__title";
  const beforeTitleClass = "services__beforetitle";
  const subTitleClass = "services__subtitle";
  const servicesItemsClass = "services__items";
  const servicesItemClass = "services__item";
  const itemTitleClass = "services__item-title";
  const itemBoxClass = "services__item-box";
  const itemTextClass = "services__item-text";
  const researchClass = "research";
  const designClass = "design";
  const developmentClass = "development";
  const imgAltText = "logo";

  // texts
  const sectionTitle = "Services";
  const titleText = "What actually";
  const subTitleText = "I love to do";
  const researchTitle = "UX Research";
  const designTitle = "Brand Design";
  const developmentTitle = "Web Development";
  const itemText =
    "New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future.";
  const sectionId = "services";

  return (
    <>
      <section className={containerClass} id={sectionId}>
        <h2 className={titleClass}>
          <span className={beforeTitleClass}>{sectionTitle}</span>
          {titleText}
          <span className={subTitleClass}>{subTitleText}</span>
        </h2>
        <ul className={servicesItemsClass}>
          <li className={servicesItemClass}>
            <div className={itemBoxClass}>
              <img src={research} alt={`${researchClass} ${imgAltText}`} />
              <h3 className={`${itemTitleClass} ${researchClass}`}>
                {researchTitle}
              </h3>
            </div>
            <p className={itemTextClass}>{itemText}</p>
          </li>
          <li className={servicesItemClass}>
            <div className={itemBoxClass}>
              <img src={design} alt={`${designClass} ${imgAltText}`} />
              <h3 className={`${itemTitleClass} ${designClass}`}>
                {designTitle}
              </h3>
            </div>
            <p className={itemTextClass}>{itemText}</p>
          </li>
          <li className={servicesItemClass}>
            <div className={itemBoxClass}>
              <img
                src={development}
                alt={`${developmentClass} ${imgAltText}`}
              />
              <h3 className={`${itemTitleClass} ${developmentClass}`}>
                {developmentTitle}
              </h3>
            </div>
            <p className={itemTextClass}>{itemText}</p>
          </li>
        </ul>
      </section>
    </>
  );
}
