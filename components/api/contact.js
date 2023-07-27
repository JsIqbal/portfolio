import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const YOUR_SERVICE_ID = "service_u342xrg";
        const YOUR_TEMPLATE_ID = "template_hsx74t7";
        const YOUR_PUBLIC_KEY = "uB8TN-aUhdfZeVPTq";

        emailjs
            .sendForm(
                YOUR_SERVICE_ID,
                YOUR_TEMPLATE_ID,
                form.current,
                YOUR_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};
