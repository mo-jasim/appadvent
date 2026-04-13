import ITSkills from './ITSkills';
import DevelopmentCycle from './development-cycle';
import ExpertsInAdvanced from './Experts-in-advanced';
import DevelopmentSkills from './Development-Skills';
import ScienceSoft from './How-ScienceSoft’s';
import Cooperation from './Cooperation-Models';
import CompaniesLove from '../website-designing-development/Companies-Love';

const page = () => {
    return (
        <div className="font-THICCCBOI w-full overflow-x-hidden">
            <section className="relative py-12 sm:py-20 overflow-hidden " style={{ background: 'linear-gradient(180deg, #050a15 0%, #130f30 50%, #4a0e2e 100%)' }}>
                <div className="flex flex-col gap-4 sm:gap-5 relative z-10 max-w-6xl mx-auto px-4">
                    <p className='gradient-text text-3xl sm:text-5xl lg:text-[60px] font-bold text-center pb-2'>IT Staff Augmentation Services</p>
                    <p className='text-white text-[32px] sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-center leading-tight'>Cost-Effective Staffing Solutions</p>
                    <p className='max-w-6xl text-[16px] sm:text-base lg:text-[20px] mx-auto text-center w-full text-gray-400 leading-relaxed px-2'>
                        We design, develop, and scale apps that turn your vision into reality. From MVPs to full-fledged products, our services cover every step of your digital journey. Our services go beyond coding—we help startups and businesses design, build, and grow apps that drive impact and ROI.                </p>
                    <p
                        className="text-[#32B9E9] font-medium underline text-center text-sm sm:text-base lg:text-lg cursor-pointer hover:text-[#2aa8d6] transition-colors"
                    >
                        Have a project in mind?
                    </p>
                </div>
            </section>
            <div className='w-full' style={{ backgroundImage: "url('/images/polygon.png')", }} >

                {/* IT skills available for hiring */}
                <ITSkills />
                {/* Experts to complete a software development cycle */}
                <DevelopmentCycle />
                {/* Experts in advanced techs */}
                <ExpertsInAdvanced />
                {/* Development Skills of Our Node.js Developers */}
                <DevelopmentSkills />
                {/* How ScienceSoft’s Staff Augmentation Works */}
                <ScienceSoft />
                {/* Outsourcing Cooperation Models We Support */}
                <Cooperation />
                <CompaniesLove />
            </div>
        </div>
    );
}

export default page;
