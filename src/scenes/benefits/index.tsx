import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "awuehawh auwheuha weua wueu aweuawue uaweu awu ehuaweuaweu auwe uaweuawuehauw euawe"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description: "awuehawuehuaw auwheuhuawheuu uha weua wueu aweuawue uaweu awu ehuaweuaweu auwe uaweuawuehauw euawe"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: "awuehawh auwheuha weahweuahwu auwhe awue uawhe awheawuehauw euawe"
    }
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function Benefits({ setSelectedPage }: Props) {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            
            {/* HEADER */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x:-50},
                visible: {opacity:1, x:0,}
            }}
            className="md:my-5 md:w-3/5">
                <HText>MORE THAN JUST A GYM.</HText>
                <p className="my-5 text-sm">
                  AUWHEUAWUAU AUWEU AWUE UAW EAWUEUA WEAWU EUAWU EUAWE, AUHWEAWHEUAWUEUAEUAE UAWUE UAWEU AUWE 
                  UAWHEAWEUAW EAWUEH UAWUE HAWUHE UAWHEU HAWUE HUAWHE UAWU EUAWUE HAWUE HUAWE AW AWUE A EA
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants={container}
            className="mt-5 md: flex items-center justify-between gap-8">
                {benefits.map((benefit) => (
                    <Benefit
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img className="mx-auto" src={BenefitsPageGraphic} alt="benefits-page" />
                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                    <div className="beofre:absolute before:-top-20 before:-left-20 before:z-[1] beofre:content-abstractwaves">
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:50},
                        visible: {opacity:1, x:0,}
                    }}>
                        <HText>
                            MILLIONS OF HAPPY MEMBER GETTING{" "}
                            <span className="text-primary-500">FIT</span>
                        </HText>
                    </motion.div>
                    </div>
                    </div>
                    {/* DESCRIPTION */}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:50},
                        visible: {opacity:1, x:0,}
                    }}>
                        <p className="my-5">
                            AUuawh uawheu hawuehu auweuaweuawu eawu euawueh awuheu hawue hawuhe uawheuhawue hawuhe u awheu hawue hawueh uaweh
                        </p>
                        <p className="mb-5">
                            AUuawh uawheu hawuehu auweuaweuawu eawu euawueh awuheu hawue hawuhe uawheuhawue hawuhe u awheu hawue hawueh uaweh
                        </p>
                    </motion.div>

                    {/* BUTTON */}

                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
            </motion.div>
        </section>
    )
}

export default Benefits