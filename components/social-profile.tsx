"use client";
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/navbar";
import {
    DiscordIcon,
    FacebookIcon,
    GithubIcon,
    TwitterIcon,
} from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";

function SocialProfile() {
    return (
        <NextUINavbar position="sticky">
            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="center"
            >
                <NavbarItem className="hidden sm:flex gap-4">
                    <Link
                        isExternal
                        href={siteConfig.links.twitter}
                        aria-label="Twitter"
                    >
                        <TwitterIcon className="text-default-500" />
                    </Link>
                    <Link
                        isExternal
                        href={siteConfig.links.discord}
                        aria-label="Discord"
                    >
                        <DiscordIcon className="text-default-500" />
                    </Link>
                    <Link
                        isExternal
                        href={siteConfig.links.facebook}
                        aria-label="Facebook"
                    >
                        <FacebookIcon className="text-default-500 pt-1.5" />
                    </Link>
                    <Link
                        isExternal
                        href={siteConfig.links.github}
                        aria-label="Github"
                    >
                        <GithubIcon className="text-default-500" />
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </NextUINavbar>
    );
}

export default SocialProfile;
