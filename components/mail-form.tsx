import React, { useRef, useState } from "react";
import { Button, Text } from "@nextui-org/react";
import { sendEmail } from "@/app/actions/mail.action";
import toast from "react-hot-toast";

interface MailFormProps {
    setOpen: (isOpen: boolean) => void;
}

const MailForm = ({ setOpen }: MailFormProps) => {
    const formRef: React.RefObject<HTMLFormElement> = useRef(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formRef.current) {
            try {
                await sendEmail(formRef.current);
                toast.success("Mail sent successfully.");
            } catch (error) {
                toast.error("Mail didn't go through");
            }
        }
    };
    return (
        <form ref={formRef} onSubmit={handleSubmit} className="p-6 bg-white">
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
                    onClick={() => setOpen(false)}
                    auto
                    type="submit"
                    className="w-full text-white bg-primary rounded border border-primary p-3 transition hover:bg-opacity-90"
                >
                    Send Message
                </Button>
            </div>
        </form>
    );
};

export default MailForm;
