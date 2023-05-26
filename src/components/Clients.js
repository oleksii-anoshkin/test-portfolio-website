import "../css/Clients.css";
// images
import slack from "../images/slack.webp";
import medium from "../images/medium.webp";
import microsoft from "../images/microsoft.webp";
import zeplin from "../images/zeplin.webp";
import shopify from "../images/shopify.webp";

export default function Clients() {
  // classes
  const containerClass = "clients";
  const titleClass = "clients__title";
  const beforeTitleClass = "clients__beforetitle";
  const subTitleClass = "clients__subtitle";
  const clientsItemsClass = "clients__items";
  const clientsItemClass = "clients__item";
  const itemBgClass = "clients__item-bg";
  const itemContentClass = "clients__item-content";
  const itemTitleClass = "clients__item-title";
  const itemImgClass = "clients__item-img";
  const imgBoxClass = "clients__item-box";

  // texts
  const sectionTitle = "Clients";
  const titleText = "Big Deal";
  const subTitleText = "With";
  const sectionId = "clients";
  const imgAlt = "logo";

  // titles
  const slackTitle = "Slack";
  const mediumTitle = "Medium";
  const microsoftTitle = "Microsoft";
  const zeplinTitle = "Zeplin";
  const shopifyTitle = "Shopify";

  // titles classes
  const slackClass = "slack";
  const mediumClass = "medium";
  const microsoftClass = "microsoft";
  const zeplinClass = "zeplin";
  const shopifyClass = "shopify";

  // links
  const rel = "noopener noreferrer nofollow";
  const target = "_blank";
  const slackLink = "https://slack.com/";
  const mediumLink = "https://medium.com/";
  const microsoftLink = "https://www.microsoft.com/";
  const zeplinLink = "https://zeplin.io/";
  const shopifyLink = "https://www.shopify.com/";

  return (
    <>
      <section className={containerClass} id={sectionId}>
        <h2 className={titleClass}>
          <span className={beforeTitleClass}>{sectionTitle}</span>
          {titleText}
          <span className={subTitleClass}>{subTitleText}</span>
        </h2>
        <ul className={clientsItemsClass}>
          <li className={clientsItemClass}>
            <div className={`${itemBgClass} ${slackClass}`}></div>
            <a
              className={`${itemContentClass} ${slackClass}`}
              href={slackLink}
              target={target}
              rel={rel}>
              <div className={imgBoxClass}>
                <img
                  className={itemImgClass}
                  src={slack}
                  alt={`${slackClass} ${imgAlt}`}
                />
              </div>
              <h3 className={itemTitleClass}>{slackTitle}</h3>
            </a>
          </li>
          <li className={clientsItemClass}>
            <div className={`${itemBgClass} ${mediumClass}`}></div>
            <a
              className={`${itemContentClass} ${mediumClass}`}
              href={mediumLink}
              target={target}
              rel={rel}>
              <div className={imgBoxClass}>
                <img
                  className={itemImgClass}
                  src={medium}
                  alt={`${mediumClass} ${imgAlt}`}
                />
              </div>
              <h3 className={itemTitleClass}>{mediumTitle}</h3>
            </a>
          </li>
          <li className={clientsItemClass}>
            <div className={`${itemBgClass} ${microsoftClass}`}></div>
            <a
              className={`${itemContentClass} ${microsoftClass}`}
              href={microsoftLink}
              target={target}
              rel={rel}>
              <div className={imgBoxClass}>
                <img
                  className={itemImgClass}
                  src={microsoft}
                  alt={`${microsoftClass} ${imgAlt}`}
                />
              </div>
              <h3 className={itemTitleClass}>{microsoftTitle}</h3>
            </a>
          </li>
          <li className={clientsItemClass}>
            <div className={`${itemBgClass} ${zeplinClass}`}></div>
            <a
              className={`${itemContentClass} ${zeplinClass}`}
              href={zeplinLink}
              target={target}
              rel={rel}>
              <div className={imgBoxClass}>
                <img
                  className={itemImgClass}
                  src={zeplin}
                  alt={`${zeplinClass} ${imgAlt}`}
                />
              </div>
              <h3 className={itemTitleClass}>{zeplinTitle}</h3>
            </a>
          </li>
          <li className={clientsItemClass}>
            <div className={`${itemBgClass} ${shopifyClass}`}></div>
            <a
              className={`${itemContentClass} ${shopifyClass}`}
              href={shopifyLink}
              target={target}
              rel={rel}>
              <div className={imgBoxClass}>
                <img
                  className={itemImgClass}
                  src={shopify}
                  alt={`${shopifyClass} ${imgAlt}`}
                />
              </div>
              <h3 className={itemTitleClass}>{shopifyTitle}</h3>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
