"use client";

import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export default function Profile() {
    return (
        <Card isFooterBlurred radius="lg" className="border-none">
            <Image
                alt="Woman listing to music"
                className="object-cover"
                height={200}
                src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/282197946_3147856908836171_8845080577657647221_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=sU3WYWxihCYAX865TWo&_nc_ht=scontent.fdac138-1.fna&oh=00_AfAYi3z9pvEQVK_Sxu_7JNX-ytHaH-luZBW8CJ_kVnzrmA&oe=64C426AB"
                width={`100%`}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button
                    className="text-tiny text-white bg-black/20"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                >
                    Notify me
                </Button>
            </CardFooter>
        </Card>
    );
}
