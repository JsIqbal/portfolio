"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Modal, Button, Text } from "@nextui-org/react";
import toast from "react-hot-toast";

export default function MailModal() {
    const [open, setOpen] = useState(false);

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
                        toast.success("Mail sent successfully.");
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };

    return (
        <div>
            <Button auto color="warning" shadow onPress={() => setOpen(true)}>
                Mail me!
            </Button>
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={open}
                onClose={() => setOpen(false)}
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
                        {/* hell */}
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
                            onClick={() => setOpen(false)}
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
