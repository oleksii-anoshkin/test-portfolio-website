import "../css/Testimonials.css";
// images
import firstPeople from "../images/mask-1.webp";
import secondPeople from "../images/mask-2.webp";
import thirdPeople from "../images/mask-3.webp";
import fourthPeople from "../images/mask-4.webp";
import doble from "../images/doble.webp";
import firstPerson from "../images/person-1.webp";
import secondPerson from "../images/person-2.webp";
import thirdPerson from "../images/person-3.webp";
import fourthPerson from "../images/person-4.webp";
import fifthPerson from "../images/person-5.webp";
import sixthPerson from "../images/person-6.webp";

export default function Testimonials() {
  // classes
  const containerClass = "testimonials";
  const containerBgClass = "testimonials__bg";
  const titleClass = "testimonials__title";
  const beforeTitleClass = "testimonials__beforetitle";
  const subTitleClass = "testimonials__subtitle";
  const peoplesContainerClass = "testimonials__peoples";
  const peopleContainerClass = "testimonials__people";
  const peopleImgClass = "testimonials__img";
  const slideBtnClass = "testimonials__slide-btn";
  const slideBtnActiveClass = "active";
  const personDobleClass = "doble";
  const personTextClass = "card-text";
  const personImgClass = "card-img";
  const personNameClass = "card-name";
  const personPosClass = "card-pos";

  // texts
  const sectionTitle = "Testimonials";
  const titleText = "What People";
  const subTitleText = "Says";
  const sectionId = "testimonials";
  const peoplesAltText = "people image";
  const firstPersonText =
    "Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.";
  const firstPersonName = "Michal John";
  const secondPersonName = "Morgan Freeman";
  const thirdPersonName = "Troy Adams";
  const fourthPersonName = "Leona Joy";
  const fifthPersonName = "Bobbi Donald";
  const sixthPersonName = "Olivia Pirs";
  const firstPersonPos = "CEO of MZP";
  const secondPersonPos = "PR Manager";
  const thirdPersonPos = "Web developer";
  const fourthPersonPos = "Project manager";
  const fifthPersonPos = "Database architect";
  const sixthPersonPos = "HR";
  const anyPersonText =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates dicta incidunt deleniti debitis, explicabo neque ipsa aspernatur saepe tempore maiores ducimus, quam cum cumque similique accusamus.";

  return (
    <>
      <section className={containerClass} id={sectionId}>
        <div className={containerBgClass}></div>
        <ul className={peoplesContainerClass}>
          <li className={peopleContainerClass}>
            <img
              className={peopleImgClass}
              src={firstPeople}
              alt={peoplesAltText}
            />
          </li>
          <li className={peopleContainerClass}>
            <img
              className={peopleImgClass}
              src={secondPeople}
              alt={peoplesAltText}
            />
          </li>
          <li className={peopleContainerClass}></li>
          <li className={peopleContainerClass}>
            <img
              className={peopleImgClass}
              src={thirdPeople}
              alt={peoplesAltText}
            />
          </li>
          <li className={peopleContainerClass}>
            <img
              className={peopleImgClass}
              src={fourthPeople}
              alt={peoplesAltText}
            />
          </li>
        </ul>
        <h2 className={titleClass}>
          <span className={beforeTitleClass}>{sectionTitle}</span>
          {titleText}
          <span className={subTitleClass}>{subTitleText}</span>
        </h2>
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className={`${slideBtnClass} ${slideBtnActiveClass}`}
              aria-current="true"
              aria-label="Slide 1"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              className={`${slideBtnClass}`}
              aria-label="Slide 2"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              className={`${slideBtnClass}`}
              aria-label="Slide 3"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="3"
              className={`${slideBtnClass}`}
              aria-label="Slide 4"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="4"
              className={`${slideBtnClass}`}
              aria-label="Slide 5"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="5"
              className={`${slideBtnClass}`}
              aria-label="Slide 6"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className={personDobleClass} src={doble} alt="..." />
              <p className={personTextClass}>{firstPersonText}</p>
              <img className={personImgClass} src={firstPerson} alt="..." />
              <h3 className={personNameClass}>{firstPersonName}</h3>
              <span className={personPosClass}>{firstPersonPos}</span>
            </div>
            <div className="carousel-item">
              <img className={personDobleClass} src={doble} alt="..." />
              <p className={personTextClass}>{anyPersonText}</p>
              <img className={personImgClass} src={secondPerson} alt="..." />
              <h3 className={personNameClass}>{secondPersonName}</h3>
              <span className={personPosClass}>{secondPersonPos}</span>
            </div>
            <div className="carousel-item">
              <img className={personDobleClass} src={doble} alt="..." />
              <p className={personTextClass}>{anyPersonText}</p>
              <img className={personImgClass} src={thirdPerson} alt="..." />
              <h3 className={personNameClass}>{thirdPersonName}</h3>
              <span className={personPosClass}>{thirdPersonPos}</span>
            </div>
            <div className="carousel-item">
              <img className={personDobleClass} src={doble} alt="..." />
              <p className={personTextClass}>{anyPersonText}</p>
              <img className={personImgClass} src={fourthPerson} alt="..." />
              <h3 className={personNameClass}>{fourthPersonName}</h3>
              <span className={personPosClass}>{fourthPersonPos}</span>
            </div>
            <div className="carousel-item">
              <img className={personDobleClass} src={doble} alt="..." />
              <p className={personTextClass}>{anyPersonText}</p>
              <img className={personImgClass} src={fifthPerson} alt="..." />
              <h3 className={personNameClass}>{fifthPersonName}</h3>
              <span className={personPosClass}>{fifthPersonPos}</span>
            </div>
            <div className="carousel-item">
              <img className={personDobleClass} src={doble} alt="..." />
              <p className={personTextClass}>{anyPersonText}</p>
              <img className={personImgClass} src={sixthPerson} alt="..." />
              <h3 className={personNameClass}>{sixthPersonName}</h3>
              <span className={personPosClass}>{sixthPersonPos}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
