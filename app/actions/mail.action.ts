import emailjs from "@emailjs/browser";

export const sendEmail = async (formData: HTMLFormElement) => {
    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID || "";
    const TEMPLATE_ID = "template_hsx74t7";
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUB_KEY || "";

    try {
        const result = await emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            formData,
            PUBLIC_KEY
        );
        return result;
    } catch (error) {
        throw error;
    }
};
