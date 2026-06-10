import ServiceCards from "./Service-Item";

const WebDevelopmentProjects = () => {
    return (
        <section className='text-center mt-[80px] mb-[80px] font-THICCCBOI'>
            {/* Headline: Mobile pe text chota aur BR hidden rahega */}
            <h1 className='text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 leading-tight'>
                How We Ensure Success in Web Development <br className="hidden md:block" /> Projects
            </h1>

            <p className='text-black max-w-6xl mx-auto mb-10 px-4 leading-tight text-sm md:text-[20px] font-THICCCBOI'>
                Apart from technical expertise, many other factors influence project success and software quality. ScienceSoft’s teams approach all of them seriously. You are welcome to check the descriptions of processes and practices we rely on to deliver on goal, quality, schedule, and budget:
            </p>

            {/* Grid: Mobile (1 column), Tablet (2 columns), Desktop (3 columns) preferrable hai for 8 items */}
            <ServiceCards />
        </section>
    );
};

export default WebDevelopmentProjects;