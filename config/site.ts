export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "portfolio v-1",
    description:
        "Make beautiful websites regardless of your design experience.",
    homepage: "https://jsiqbal.github.io/portfolio",
    navItems: [
        {
            label: "Home",
            href: `/`,
        },
        {
            label: "Docs",
            href: "/docs",
        },
        {
            label: "Pricing",
            href: "/pricing",
        },
        {
            label: "Blog",
            href: "/blog",
        },
    ],
    navMenuItems: [
        {
            label: "Profile",
            href: "/profile",
        },
        {
            label: "Dashboard",
            href: "/dashboard",
        },
        {
            label: "Projects",
            href: "/projects",
        },
        {
            label: "Team",
            href: "/team",
        },
        {
            label: "Calendar",
            href: "/calendar",
        },
        {
            label: "Settings",
            href: "/settings",
        },
        {
            label: "Help & Feedback",
            href: "/help-feedback",
        },
        {
            label: "Logout",
            href: "/logout",
        },
    ],
    links: {
        github: "https://github.com/JsIqbal",
        twitter: "https://twitter.com/JavascriptIqbal",
        docs: "https://nextui-docs-v2.vercel.app",
        facebook: "https://www.facebook.com/javascriptiqbal",
        discord: "https://discord.com/channels/jsiqbal#0898",
        sponsor: "https://patreon.com/jrgarciadev",
        instagram: "https://www.instagram.com/iqbal_sabbir/",
        linkedin: "https://www.linkedin.com/in/jsiqbal/",
    },
};
