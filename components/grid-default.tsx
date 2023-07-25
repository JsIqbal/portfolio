"use client";

import "@/styles/globals.css";

import clsx from "clsx";

import { ReactNode } from "react";
import { ProfileCard } from "./profile-card";
// import SocialProfile from "./social-profile";

function GridDefault({ children }: { children: ReactNode }) {
    return (
        <div className="grid grid-cols-6 gap-4">
            <div className="col-span-2 space-x-0">
                <div className="flex flex-col w-full ">
                    <div
                        className={clsx(
                            { color: "foreground" },
                            " p-4 w-2/3 m-auto mb-[-200px]"
                        )}
                    >
                        <ProfileCard />
                        <p>one</p>
                    </div>

                    <div
                        className={clsx(
                            { color: "foreground" },
                            "bg-sky-500/50 p-4  pt-[200px] rounded-lg w-full m-auto"
                        )}
                    >
                        {/* <SocialProfile /> */}
                        <p>two</p>
                    </div>
                </div>
            </div>

            <div className="col-span-4  bg-sky-500/75">{children}</div>
        </div>
    );
}

export default GridDefault;
