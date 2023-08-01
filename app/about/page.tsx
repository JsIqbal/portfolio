import AboutMe from "./components/about-me";
import AboutMeCard from "./components/card";
import MyClient from "./components/my-client";

export default function AboutPage() {
    return (
        <>
            <AboutMe />

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-8 text-left">
                        Section Heading
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <AboutMeCard />

                        <AboutMeCard />

                        <AboutMeCard />

                        <AboutMeCard />
                    </div>
                </div>
            </div>

            <MyClient />
        </>
    );
}
