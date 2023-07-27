"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Modal, Button, Text } from "@nextui-org/react";

export default function MailModal() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    const form: React.RefObject<HTMLFormElement> = useRef(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
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
                        closeHandler(); // Close the modal after sending the email
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };

    return (
        <div>
            <Button auto color="warning" shadow onPress={handler}>
                Mail me!
            </Button>
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <form ref={form} onSubmit={sendEmail} className="p-6 bg-white">
                    <Text id="modal-title" size={18} className="mb-4 font-bold">
                        Get in <span className="text-primary">Touch!</span>
                    </Text>
                    <div className="mb-6">
                        <input
                            required
                            type="text"
                            placeholder="Your Name"
                            className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                            name="from_name"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            required
                            type="email"
                            placeholder="Your Email"
                            className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                            name="user_email"
                        />
                    </div>
                    <div className="mb-6">
                        <textarea
                            required
                            rows={6}
                            placeholder="Your Message"
                            className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] resize-none outline-none focus-visible:shadow-none focus:border-primary"
                            name="message"
                        />
                    </div>
                    <div>
                        <Button
                            auto
                            type="submit"
                            className="w-full text-white bg-primary rounded border border-primary p-3 transition hover:bg-opacity-90"
                        >
                            Send Message
                        </Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
