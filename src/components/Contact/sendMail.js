import { toast } from "react-toastify";

const toastProps = {
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
    closeButton: true,
    icon: true,
}

export const sendMail = async (form) => {
    const loading = toast.loading(
        <div className="text-center">
            Please wait... <i className="bx bx-loader bx-spin m-1" />
        </div>, { icon: false, toastId: "loadingId" }
    );

    const controller = new AbortController()
    setTimeout(() => controller.abort(), 3000)

    try {
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
            toastProps.render = "Email sent!!!"
            toastProps.type = "success"
            toast.update(loading, toastProps)
        } else {
            toastProps.render = "Error sending email!!!"
            toastProps.type = "error"
            toast.update(loading, toastProps)
        }
    } catch (error) {
        if (error.name === 'AbortError') {
            toastProps.render = "Error sending email!!!"
            toastProps.type = "error"
            toast.update(loading, toastProps)
        } else {
            throw error;
        }
    }
}
