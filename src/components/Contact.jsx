import { useForm, useLanguageContext } from '../hooks';

const initialForm = {
    email: "",
    subject: "",
    message: ""
}

const Contact = () => {
    const { texts } = useLanguageContext();
    const { form, isSending, handleChange, handleSubmit} = useForm(initialForm);

    return (
        <div className="contact-container" id="contact">
            <div className="contact-desc">
                <h2>{texts.contactLabel}</h2>
                <p>
                    {texts.contactDesc} <i className={
                        `fa-regular fa-hand-point-${window.screen.width > 960
                            ?
                            "right fa-bounce"
                            : "down fa-bounce"}`}
                    />
                </p>
            </div>
            <div className="container-fluid contact-form">
                <form className="row g-3 justify-content-center" onSubmit={handleSubmit} noValidate>
                    <div className="input-wrapper">
                        <input
                            className="input" name="email" placeholder={texts.placeholder1} type="email"
                            onChange={handleChange} value={form.email}
                        />
                    </div>
                    <div className="input-wrapper">
                        <input
                            className="input" name="subject" placeholder={texts.placeholder2} type="text"
                            onChange={handleChange} value={form.subject}
                        />
                    </div>
                    <div className="input-wrapper">
                        <textarea
                            className="input" name="message" rows="5" placeholder={texts.placeholder3}
                            type="text" onChange={handleChange} value={form.message}
                        />
                    </div>
                    <div className="input-wrapper">
                        <button disabled={isSending}>
                            {isSending
                                ? <>{texts.loader}<i className="bx bx-loader bx-spin m-1" /></>
                                : texts.formBtnLabel
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;
