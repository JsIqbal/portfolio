import AboutMe from "./components/about-me";
import AboutMeCard from "./components/card";
import { backend, laptop, ui, work } from "./components/icons";
import MyClient from "./components/my-client";

export default function AboutPage() {
    return (
        <>
            <AboutMe />

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h2 className="text-3xl  mb-8 text-left">What I do!</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <AboutMeCard
                            title="Employment"
                            description="Software Engineer at Axiata Digital Agency. Experienced in full-stack development, handling both frontend and backend of web applications with a focus on maintenance and scalability."
                            icon={work}
                        />

                        <AboutMeCard
                            title="Frontend Technologies"
                            description="Proficient in React, Next.js, and Vue.js for building interactive and user-friendly web applications. Skilled in modern JavaScript, HTML, and CSS, with a passion for creating intuitive and responsive UI components."
                            icon={laptop}
                        />

                        <AboutMeCard
                            title="Backend Technologies"
                            description="Experienced in backend technologies such as Go, Node.js, and Express.js. Specializing in designing RESTful APIs and implementing robust backend logic for data storage, authentication, and business processes."
                            icon={backend}
                        />

                        <AboutMeCard
                            title="UI Libraries and Frameworks"
                            description="Familiar with various UI libraries and frameworks, including NextUI, ShadcnUI, Material-UI (MUI), Bootstrap, and Tailwind CSS. Proficient in leveraging these tools to enhance user experiences and create visually appealing web applications with customizable UI components."
                            icon={ui}
                        />
                    </div>
                </div>
            </div>

            {/* <MyClient /> */}
        </>
    );
}
