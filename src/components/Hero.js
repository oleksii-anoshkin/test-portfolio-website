// styles
import "../css/Hero.css";

export default function Main() {
  // classes
  const containerClass = "hero";
  const beforeTextClass = "hero__beforetitle";
  const titleClass = "hero__title";
  const subTitleClass = "hero__subtitle";
  const btnClass = "hero__btn";

  // texts
  const btnText = "Let’s Talk";
  const beforeTitleText = "Hello,";
  const titleText = "Adam Zakob";
  const subTitleText = "a freelance UX Designer";
  const btnHref = "contact";

  return (
    <>
      <section className={containerClass}>
        <h1 className={titleClass}>
          <span className={beforeTextClass}>{beforeTitleText}</span>
          {titleText}
          <span className={subTitleClass}>{subTitleText}</span>
        </h1>
        <a className={btnClass} href={`#${btnHref}`}>
          {btnText}
        </a>
      </section>
    </>
  );
}
