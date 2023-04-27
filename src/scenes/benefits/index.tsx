import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.webp";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "Academias de Última Geração",
        description: "Em nossos centros de treinamento ©shredded contamos com as melhores instalações e equipamentos de última geração."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "Aulas Variadas",
        description: "Espere os mais diversos tipos de aulas para seus diferentes moods, como yoga, crossfit ou HIIT."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Profissionais Experientes",
        description: "Temos os profissionais mais capacitados e experientes da área para melhor te acompanhar durante seus treinos."
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
        <section id="benefícios" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefícios)}
                className="text-white">
            
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
                <HText>MAIS QUE UMA ACADEMIA.</HText>
                <p className="my-5 text-sm text-white">
                Nossa rede de academias oferece instalações de última geração e profissionais competentes para garantir que você alcance seus objetivos fitness.
                Com uma ampla variedade de modalidades de aulas, você pode experimentar novos desafios e encontrar a que melhor se adequa às suas necessidades.
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
                    <div className="beofre:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
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
                            MILHARES DE MEMBROS SE TORNANDO {" "}
                            <span className="text-primary-500">FIT</span>
                        </HText>
                    </motion.div>
                    </div>
                    </div>
                    {/* DESCRIPTION */}
                    <motion.div
                    className="text-white"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:50},
                        visible: {opacity:1, x:0,}
                    }}>
                        <p className="my-5">
                        Na nossa rede de academias, já transformamos a vida de milhares de pessoas que alcançaram seus objetivos fitness com nossos planos de treino personalizados e aulas de qualidade.
                        Se você está procurando uma comunidade comprometida em ajudá-lo a alcançar seus objetivos, aqui é o lugar certo.
                        </p>
                        
                    </motion.div>

                    {/* BUTTON */}

                    <div className="relative mt-16">
                        <div className="text-black before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
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