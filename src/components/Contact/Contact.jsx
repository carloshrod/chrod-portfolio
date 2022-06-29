import { useState } from 'react';
import './Contact.css';
import { toast } from "react-toastify";

const initialForm = {
    email: "",
    subject: "",
    message: ""
}

let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

const Contact = () => {
    const [form, setForm] = useState(initialForm)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.email || !form.subject || !form.message) {
            toast.error("Todos los campos son requeridos!!!")
            return false;
        }

        if (!regexEmail.test(form.email)) {
            toast.error("Ingresa un email válido!!!")
            return false;
        }

        fetch("https://formsubmit.co/ajax/3702f78ca0e155db85eb4c62d886ab6f",{
            method: 'POST',
            body: JSON.stringify(form),
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }).then((res) => {
            toast.success("Email enviado!!!")
        });
    }

    return (
        <div className="contact-container" id="contact">
            <div className="contact-desc">
                <h2>Contact</h2>
                <p>
                    Would you like to work with me? <i className={
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
                        <input className="input" name="email" placeholder="Email" type="email" onChange={handleInputChange} value={form.email} />
                    </div>
                    <div className="input-wrapper">
                        <input className="input" name="subject" placeholder="Subject" type="text" onChange={handleInputChange} value={form.subject}/>
                    </div>
                    <div className="input-wrapper">
                        <textarea className="input" name="message" rows="5" placeholder="Message" type="text" onChange={handleInputChange} value={form.message}/>
                    </div>
                    <div className="input-wrapper d-flex justify-content-center align-items-center">
                        <button type="submit">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact