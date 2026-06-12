const DevelopmentSkills = () => {
    return (
        <>
            <section className="mt-[80px] mb-[80px] px-4 font-THICCCBOI">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-2 leading-tight">
                            Development Skills of Our Node.js Developers
                        </h2>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 pb-1 h-full max-w-7xl mx-auto">
                        {[
                            {
                                titleIcon: "/staf-images/img-1.svg",
                                title: 'Programming Langugaes',
                            },
                            {
                                titleIcon: "/staf-images/img-2.svg",
                                title: 'Web Frameworks',
                            },
                            {
                                titleIcon: "/staf-images/img-3.svg",
                                title: 'Frontend Frameworks',
                            },
                            {
                                titleIcon: "/staf-images/img-4.svg",
                                title: 'Mobile App Frameworks',
                            },
                            {
                                titleIcon: "/staf-images/img-5.svg",
                                title: 'Data base Systems',
                            },
                            {
                                titleIcon: "/staf-images/img-6.svg",
                                title: 'Version Control',
                            },
                            {
                                titleIcon: "/staf-images/img-7.svg",
                                title: 'Build Tools',
                            },
                            {
                                titleIcon: "/staf-images/img-8.svg",
                                title: 'Continuous Integration',
                            },
                            {
                                titleIcon: "/staf-images/img-9.svg",
                                title: 'Web servers',
                            },
                            {
                                titleIcon: "/staf-images/img-10.svg",
                                title: 'API Documentation',
                            },
                            {
                                titleIcon: "/staf-images/img-11.svg",
                                title: 'Messaging queue',
                            },
                            {
                                titleIcon: "/staf-images/img-12.svg",
                                title: 'Testing Frameworks',
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white border border-gray-100 text-black p-6 sm:p-8 rounded-[20px] flex flex-col items-center text-center gap-4 hover:shadow-xl transition-shadow">
                                <div className="flex items-center gap-2">
                                    <h3 className="font-bold text-[20px] md:text-[24px]">{item.title}</h3>
                                </div>
                                <div className="">
                                    <img src={item.titleIcon} alt={item.title}
                                        width={100}
                                        height={100}
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default DevelopmentSkills;