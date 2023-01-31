import { useState } from "react";
import { toast } from "react-toastify";
import { useMail, useLanguageContext } from "./";

let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

export const useForm = (initialForm) => {
    const [form, setForm] = useState(initialForm);
    const [isSending, setIsSending] = useState(false);
    const { texts } = useLanguageContext();
    const { sendMail } = useMail();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsSending(true);
            if (!form.email || !form.subject || !form.message) {
                toast.error(texts.toast.validateFields, { toastId: "validate" })
                return false;
            }
            if (!regexEmail.test(form.email)) {
                toast.error(texts.toast.validateEmail, { toastId: "validate" })
                return false;
            }
            await sendMail(form);
            setForm(initialForm);
        } catch (error) {
            console.error(error);
        } finally {
            setIsSending(false);
        }
    }

    return {
        form, isSending,
        handleChange,
        handleSubmit
    }
}
