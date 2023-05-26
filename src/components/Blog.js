import "../css/Blog.css";

export default function Blog() {
  // classes
  const containerClass = "blog";
  const itemsBoxClass = "blog__items";
  const titleClass = "blog__title";
  const beforeTitleClass = "blog__beforetitle";
  const subTitleClass = "blog__subtitle";
  const dateItemClass = "blog__date";
  const itemClass = "blog__item";
  const technologyItemClass = "technology";
  const devicesItemClass = "devices";
  const problemsItemClass = "problems";
  const sectionTitleClass = "title";
  const titleItemClass = "blog__item-title";
  const technologyBgClass = "blog__technology-bg";

  // texts
  const sectionTitle = "Blog";
  const titleText = "Get News";
  const subTitleText = "Feeds";
  const sectionId = "blog";
  const dateText = "20 June/2020";
  const technologyText =
    "Technology is evolving rapidly. New devices and applications.";
  const devicesText = "New devices and applications come to the market.";
  const problemsText = "Every day providing solutions to problems.";

  return (
    <>
      <section className={containerClass} id={sectionId}>
        <ul className={itemsBoxClass}>
          <li className={`${itemClass} ${sectionTitleClass}`}>
            <h2 className={titleClass}>
              <span className={beforeTitleClass}>{sectionTitle}</span>
              {titleText}
              <span className={subTitleClass}>{subTitleText}</span>
            </h2>
          </li>
          <li className={`${itemClass} ${technologyItemClass}`}>
            <div className={technologyBgClass}></div>
            <span className={dateItemClass}>{dateText}</span>
            <h3 className={`${titleItemClass} ${technologyItemClass}`}>
              {technologyText}
            </h3>
          </li>
          <li className={`${itemClass} ${devicesItemClass}`}>
            <span className={dateItemClass}>{dateText}</span>
            <h3 className={`${titleItemClass} ${devicesItemClass}`}>
              {devicesText}
            </h3>
          </li>
          <li className={`${itemClass} ${problemsItemClass}`}>
            <span className={dateItemClass}>{dateText}</span>
            <h3 className={`${titleItemClass} ${problemsItemClass}`}>
              {problemsText}
            </h3>
          </li>
        </ul>
      </section>
    </>
  );
}
