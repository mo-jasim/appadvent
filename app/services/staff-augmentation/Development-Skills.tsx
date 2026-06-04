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
                                titleIcon: "/staf-images/staf9.svg",
                                title: 'Frameworks',
                            },
                            {
                                titleIcon: "/staf-images/staf10.svg",
                                title: 'Libararies ',
                            },
                            {
                                titleIcon: "/staf-images/staf11.svg",
                                title: 'Server Management ',
                            },
                            {
                                titleIcon: "/staf-images/staf12.svg",
                                title: 'Architecture',
                            },
                            {
                                titleIcon: "/staf-images/staf13.svg",
                                title: 'Data base',
                            },
                            {
                                titleIcon: "/staf-images/staf9.svg",
                                title: 'ORM',
                            },
                            {
                                titleIcon: "/staf-images/staf9.svg",
                                title: 'Frontend Frameworks',
                            },
                            {
                                titleIcon: "/staf-images/staf9.svg",
                                title: 'Message Brokers',
                            },
                            {
                                titleIcon: "/staf-images/staf9.svg",
                                title: 'Monitoring tools',
                            },
                            {
                                titleIcon: "/staf-images/staf9.svg",
                                title: 'API Documentation',
                            },
                            {
                                titleIcon: "/staf-images/staf9.svg",
                                title: 'Web servers',
                            },
                            {
                                titleIcon: "/staf-images/staf9.svg",
                                title: 'Deployment Tools',
                            },
                            {
                                titleIcon: "/staf-images/staf9.svg",
                                title: 'DevOps Tools',
                            },
                            {
                                titleIcon: "/staf-images/staf9.svg",
                                title: 'Analytics Tools',
                            },
                            {
                                titleIcon: "/staf-images/staf9.svg",
                                title: 'SEO Tools',
                            },
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