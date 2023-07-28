"use client";

import React, { useState } from "react";
import { Modal, Button, Text } from "@nextui-org/react";
import MailForm from "./mail-form";

export default function MailModal() {
    const [open, setOpen] = useState(false);

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
                <MailForm setOpen={setOpen} />
            </Modal>
        </div>
    );
}
