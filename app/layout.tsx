import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";

import { ToastProvider } from "@/providers/toast-provider";
import Footer from "@/components/footer";
import ProfileSummary from "@/components/profile-summary";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,

    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={clsx(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <ToastProvider />
                <Providers
                    themeProps={{ attribute: "class", defaultTheme: "dark" }}
                >
                    <div className="relative flex flex-col h-screen">
                        <Navbar />
                        <main className="container mx-auto  pt-16 px-6 flex-grow ">
                            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                                <ProfileSummary />

                                <div className="col-span-1 md:col-span-4 relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                    {children}
                                </div>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
