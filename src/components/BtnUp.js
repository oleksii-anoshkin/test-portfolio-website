import "../css/BtnUp.css";

export default function BtnUp() {
  const containerClass = "arrow-up";
  const arrowClass = "material-symbols-outlined";
  const linkClass = "item__link";
  const activeClass = "current";
  const arrowText = "keyboard_double_arrow_up";
  const arrowHref = "about";

  function resetCurrentClass() {
    document
      .querySelectorAll(`.${linkClass}`)
      .forEach(
        (link) =>
          (link.className = `${linkClass} ${
            link.id === `${arrowHref}-btn` ? activeClass : ""
          }`)
      );
  }

  return (
    <>
      <div className={containerClass}>
        <a
          className={arrowClass}
          href={`#${arrowHref}`}
          onClick={resetCurrentClass}>
          {arrowText}
        </a>
      </div>
    </>
  );
}
