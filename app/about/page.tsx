export default function AboutPage() {
    return (
        <>
            {/* =========About me section============= */}
            <div className="container mx-auto px-4 py-8">
                <div className="mx-auto text-left">
                    {/* Section Heading */}
                    <h2 className="text-3xl font-bold mb-4">Section Heading</h2>

                    {/* First Paragraph */}
                    <p className="mb-4 text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed cursus ex sit amet metus cursus, non commodo nisi
                        tincidunt.
                    </p>

                    {/* Second Paragraph */}
                    <p className="text-gray-700">
                        Sed dictum nibh vitae ipsum fermentum, quis feugiat
                        metus venenatis. Integer non laoreet metus. Nulla
                        facilisi.
                    </p>
                </div>
            </div>

            {/* ============== What I do section ================ */}
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-8 text-left">
                        Section Heading
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center md:flex-row md:items-start  bg-white p-4 rounded-lg shadow-md">
                            {/* SVG Column */}
                            <div className="mb-4 md:mb-0 md:mr-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-12 h-12"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                                    />
                                </svg>
                            </div>

                            {/* Content Column */}
                            <div className="md:ml-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    Card 1 Heading
                                </h3>
                                <p className="text-gray-700 text-left">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed cursus ex sit amet
                                    metus cursus, non commodo nisi tincidunt.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col items-center md:flex-row md:items-start  bg-white p-4 rounded-lg shadow-md">
                            {/* SVG Column */}
                            <div className="mb-4 md:mb-0 md:mr-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-12 h-12"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                                    />
                                </svg>
                            </div>

                            {/* Content Column */}
                            <div className="md:ml-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    Card 1 Heading
                                </h3>
                                <p className="text-gray-700 text-left">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed cursus ex sit amet
                                    metus cursus, non commodo nisi tincidunt.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col items-center md:flex-row md:items-start  bg-white p-4 rounded-lg shadow-md">
                            {/* SVG Column */}
                            <div className="mb-4 md:mb-0 md:mr-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-12 h-12"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                                    />
                                </svg>
                            </div>

                            {/* Content Column */}
                            <div className="md:ml-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    Card 1 Heading
                                </h3>
                                <p className="text-gray-700 text-left">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed cursus ex sit amet
                                    metus cursus, non commodo nisi tincidunt.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="flex flex-col items-center md:flex-row md:items-start  bg-white p-4 rounded-lg shadow-md">
                            {/* SVG Column */}
                            <div className="mb-4 md:mb-0 md:mr-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-12 h-12"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                                    />
                                </svg>
                            </div>

                            {/* Content Column */}
                            <div className="md:ml-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    Card 1 Heading
                                </h3>
                                <p className="text-gray-700 text-left">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed cursus ex sit amet
                                    metus cursus, non commodo nisi tincidunt.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============= My client ============ */}
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold">Section Heading</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {/* Image 1 */}
                    <img
                        src="path/to/image1.jpg"
                        alt="Image 1"
                        className="w-full h-40 object-cover rounded-lg"
                    />

                    {/* Image 2 */}
                    <img
                        src="path/to/image2.jpg"
                        alt="Image 2"
                        className="w-full h-40 object-cover rounded-lg"
                    />

                    {/* Image 3 */}
                    <img
                        src="path/to/image3.jpg"
                        alt="Image 3"
                        className="w-full h-40 object-cover rounded-lg"
                    />

                    {/* Image 4 */}
                    <img
                        src="path/to/image4.jpg"
                        alt="Image 4"
                        className="w-full h-40 object-cover rounded-lg"
                    />

                    {/* Image 5 */}
                    <img
                        src="path/to/image5.jpg"
                        alt="Image 5"
                        className="w-full h-40 object-cover rounded-lg"
                    />
                </div>
            </div>
        </>
    );
}
