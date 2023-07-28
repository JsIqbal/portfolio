import { siteConfig } from "@/config/site";
import {
    FacebookIcon,
    InstagramIcon,
    LinkedInIcon,
    TwitterIconCard,
    WhatsappIcon,
} from "./icons";
import { ProfileCard } from "./profile-card";
import { Link } from "@nextui-org/link";
import ToolTipTool from "./ui/tooltip";

const ProfileSummary = () => {
    return (
        <div className="md:col-span-2 space-x-0">
            <div className="flex flex-col w-full md:w-auto">
                <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 -mt-6 h-400 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                        {" "}
                        <ProfileCard />
                    </div>
                    <div className="p-6">
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Iqbal Hossain
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            Software Engineer | Go | Next | Node | Docker |
                            CI/CD | GIT/GITHUB
                        </p>
                    </div>

                    <div className="card">
                        <Link
                            isExternal
                            className="socialContainer containerOne"
                            href={siteConfig.links.instagram}
                        >
                            <InstagramIcon className="text-default-500" />
                        </Link>

                        <Link
                            isExternal
                            className="socialContainer containerTwo"
                            href={siteConfig.links.twitter}
                        >
                            <TwitterIconCard />
                        </Link>

                        <Link
                            isExternal
                            className="socialContainer containerThree"
                            href={siteConfig.links.linkedin}
                        >
                            <LinkedInIcon />
                        </Link>

                        <Link
                            isExternal
                            className="socialContainer containerFour"
                            href="#"
                        >
                            <WhatsappIcon />
                        </Link>
                        <ToolTipTool
                            elementContent={<FacebookIcon />}
                            content="Let's connect to Facebook!"
                            className="socialContainer containerFive"
                            href={siteConfig.links.facebook}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSummary;
