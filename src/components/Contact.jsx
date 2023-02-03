import { useForm, useLanguageContext } from '../hooks';
import { motion } from "framer-motion";

const initialForm = {
    email: "",
    subject: "",
    message: ""
}

const Contact = () => {
    const { texts } = useLanguageContext();
    const { form, isSending, handleChange, handleSubmit } = useForm(initialForm);

    return (
        <div className="contact-container" id="contact">
            <div className="contact-desc">
                <motion.h2
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    viewport={{ once: true }}
                >{texts.contactLabel}</motion.h2>
                <motion.p
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: .3, type: "spring", stiffness: 50 }}
                    viewport={{ once: true }}
                >
                    {texts.contactDesc} <i className={
                        `fa-regular fa-hand-point-${window.screen.width > 960
                            ?
                            "right fa-bounce"
                            : "down fa-bounce"}`}
                    />
                </motion.p>
            </div>
            <div
                className="container-fluid contact-form"
            >
                <form className="row g-3 justify-content-center" onSubmit={handleSubmit} noValidate>
                    <motion.div
                        className="input-wrapper"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: .6, type: "spring", stiffness: 50 }}
                        viewport={{ once: true }}
                    >
                        <input
                            className="input" name="email" placeholder={texts.placeholder1} type="email"
                            onChange={handleChange} value={form.email}
                        />
                    </motion.div>
                    <motion.div
                        className="input-wrapper"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: .9, type: "spring", stiffness: 50 }}
                        viewport={{ once: true }}
                    >
                        <input
                            className="input" name="subject" placeholder={texts.placeholder2} type="text"
                            onChange={handleChange} value={form.subject}
                        />
                    </motion.div>
                    <motion.div
                        className="input-wrapper"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, type: "spring", stiffness: 50 }}
                        viewport={{ once: true }}
                    >
                        <textarea
                            className="input" name="message" rows="5" placeholder={texts.placeholder3}
                            type="text" onChange={handleChange} value={form.message}
                        />
                    </motion.div>
                    <motion.div
                        className="input-wrapper"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5, type: "spring", stiffness: 50 }}
                        viewport={{ once: true }}
                    >
                        <button disabled={isSending}>
                            {isSending
                                ? <>{texts.loader}<i className="bx bx-loader bx-spin m-1" /></>
                                : texts.formBtnLabel
                            }
                        </button>
                    </motion.div>
                </form>
            </div>
        </div>
    )
}

export default Contact;
