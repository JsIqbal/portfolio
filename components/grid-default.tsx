"use client";

import "@/styles/globals.css";
import clsx from "clsx";
import { ReactNode } from "react";
import { ProfileCard } from "./profile-card";
import { Text } from "@nextui-org/react";

function GridDefault({ children }: { children: ReactNode }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="md:col-span-2 space-x-0">
                <div className="flex flex-col w-full md:w-auto">
                    <div
                        className={
                            (clsx(
                                "p-4 md:w-2/3 m-auto mb-[-200px]",
                                "w-full", // Full width in mobile view
                                "md:w-2/3", // Adjust width on larger screens
                                "md:max-w-[400px]", // Limit width on larger screens
                                "md:m-auto",
                                "md:mb-0"
                            ),
                            "p-4 md:w-2/3 m-auto mb-[-200px]")
                        }
                    >
                        <ProfileCard />
                        <Text h1 className="text-2xl mt-4 text-center">
                            Iqbal Hossain
                        </Text>
                    </div>

                    <div
                        className={
                            (clsx(
                                "bg-sky-500/50 p-4 pt-[200px] rounded-lg w-full m-auto",
                                "md:w-full",
                                "md:max-w-[400px]",
                                "md:m-auto",
                                "md:pt-0"
                            ),
                            "bg-sky-500/50 p-4 pt-[200px] rounded-lg w-full m-auto")
                        }
                    >
                        <div></div>
                    </div>
                </div>
            </div>

            <div className="col-span-1 md:col-span-4 bg-sky-500/75">
                {children}
            </div>
        </div>
    );
}

export default GridDefault;
