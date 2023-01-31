import { useLanguageContext } from './';
import { toast } from "react-toastify";

export const useMail = () => {
    const { texts } = useLanguageContext();
    const { successMsg, errorMsg } = texts.toast;

    const sendMail = async (form) => {
        try {
            const controller = new AbortController();
            setTimeout(() => controller.abort(), 3000);
            const res = await fetch("https://formsubmit.co/ajax/3702f78ca0e155db85eb4c62d886ab6f", {
                signal: controller.signal,
                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            if (res.status === 200) {
                return toast.success(successMsg);
            }
            toast.error(errorMsg);
        } catch (error) {
            toast.error(errorMsg);
            console.error(error);
        }
    };

    return { sendMail };
};