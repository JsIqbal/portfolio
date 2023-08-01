const MyClient = () => {
    return (
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
    );
};

export default MyClient;
