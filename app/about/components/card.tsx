interface AboutMeProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const AboutMeCard = ({ title, description, icon }: AboutMeProps) => {
    return (
        <div className="flex flex-col items-center md:flex-row md:items-start  bg-white p-4 shadow  rounded-lg">
            <div className="mb-4 md:mb-0 md:mr-4">{icon}</div>

            <div className="md:ml-4">
                <h3 className="text-xl  mb-2 text-left">{title}</h3>
                <p className="text-gray-700 text-left">{description}</p>
            </div>
        </div>
    );
};

export default AboutMeCard;
