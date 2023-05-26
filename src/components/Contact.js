import "../css/Contact.css";

export default function Contact() {
  // classes
  const containerClass = "contact";
  const containerBgClass = "contact__bg";
  const titleClass = "contact__title";
  const beforeTitleClass = "contact__beforetitle";
  const subTitleClass = "contact__subtitle";
  const mailLinkClass = "contact__email-link";
  const formClass = "contact__form";
  const formNameClass = "contact__form-name";
  const formEmailClass = "contact__form-email";
  const formTextClass = "contact__form-text";
  const formBotClass = "contact__form-botbox";
  const formBtnClass = "contact__form-btn";
  const formFileClass = "contact__form-file";
  const boxFileClass = "custom-file-input";
  const labelFileClass = "contact__file-label";

  // texts
  const sectionTitle = "Contact Me";
  const titleText = "Let me know if you want to talk";
  const subTitleText = "about a potential collaboration.";
  const secondSubTitleText = "I'm available for freelance work.";
  const sectionId = "contact";
  const linkEmail = "adamzakob@mail.com";
  const linkText = "infoname@mail.com";
  const formBtnText = "Get a Quote";

  // placeholders
  const nameInputText = "What’s your name?";
  const emailInputText = "Your email";
  const aboutInputText = "Tell me about your project";

  const inputTypeText = "text";
  const inputTypeEmail = "email";
  const inputTypeFile = "file";
  const inputIdFile = "fileInput";

  return (
    <>
      <section className={containerClass} id={sectionId}>
        <div className={containerBgClass}></div>
        <h2 className={titleClass}>
          <span className={beforeTitleClass}>{sectionTitle}</span>
          {titleText}
          <span className={subTitleClass}>{subTitleText}</span>
          <span className={subTitleClass}>{secondSubTitleText}</span>
        </h2>
        <a className={mailLinkClass} href={`mailto:${linkEmail}`}>
          {linkText}
        </a>
        <form className={formClass}>
          <input
            className={formNameClass}
            type={inputTypeText}
            name="userName"
            placeholder={nameInputText}
            required
          />
          <input
            className={formEmailClass}
            type={inputTypeEmail}
            name="userEmail"
            placeholder={emailInputText}
            required
          />
          <input
            className={formTextClass}
            type={inputTypeText}
            name="userText"
            placeholder={aboutInputText}
            required
          />
          <div className={formBotClass}>
            <button className={formBtnClass} type="submit">
              {formBtnText}
            </button>
            <div className={boxFileClass}>
              <input
                className={formFileClass}
                type={inputTypeFile}
                name="userFile"
                id={inputIdFile}
              />
              <label className={labelFileClass} htmlFor={inputIdFile}></label>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
