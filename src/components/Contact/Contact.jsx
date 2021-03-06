import { useContext, useState } from 'react';
import LanguageContext from '../../context/LanguageContext';
import './Contact.css';
import { toast } from "react-toastify";
import { sendMail } from './sendMail';

const initialForm = {
    email: "",
    subject: "",
    message: ""
}

let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

const Contact = () => {
    const { texts } = useContext(LanguageContext);
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.email || !form.subject || !form.message) {
            toast.error("All fields are required!!!")
            return false;
        }

        if (!regexEmail.test(form.email)) {
            toast.error("Please, enter a valid email!!!")
            return false;
        }

        sendMail(form)
    }

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
                        <button type="submit">
                            {texts.formBtnLabel}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;
