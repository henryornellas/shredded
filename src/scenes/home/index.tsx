import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import ActionButton from '@/shared/ActionButton';
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/bum.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function Home({ setSelectedPage }: Props) {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
        <section
            id="início"
            className='gap-16 py-10 md:h-full md:pb-0 w-full'
        >
            {/* IMAGE AND MAIN HEADER */}
            <motion.div 
            onViewportEnter={() => setSelectedPage(SelectedPage.Início)}
            className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
                {/* MAIN HEADER */}
                <div className='z-10 mt-32 md:basis-3/5'>
                    {/* HEADINGS */}
                    <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:-50},
                        visible: {opacity:1, x:0,}
                    }}
                    className='md:-mt-20'>
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                                <img src={HomePageText} alt="home-page-text"/>
                            </div>
                        </div>
                        <p className='mt-8 text-md text-white'>
                        Academias sem igual. Treinamentos e aulas fitness incomparáveis. Estúdios topo de linha para você alcançar a forma física que você sonha. Obtenha o corpo dos seus sonhos agora.
                        </p>
                    </motion.div>

                    {/* ACTIONS */}
                    <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:-50},
                        visible: {opacity:1, x:0,}
                    }}
                    className='mt-8 mb-8 flex items-center gap-8'>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Junte-se agora
                        </ActionButton>

                        <AnchorLink
                        className='text-sm font-bold text-primary-500 underline hover:text-white'
                        onClick={()=> setSelectedPage(SelectedPage.Contato)}
                        href={`#${SelectedPage.Contato}`}
                        >
                        <p>Saiba mais</p>
                        
                        </AnchorLink>
                    </motion.div>
                </div>

                {/* IMAGE */}
                <div className='md:flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end md:h-[90%]'>
                    <img src={HomePageGraphic} alt="homepage-graphic" className=''/>
                </div>
            </motion.div>

            {/* SPONSORS */}
            {isAboveMediumScreens && (
                <div className='h-[150px] w-full bg-primary-100 py-10'>
                    <div className='mx-auto w-5/6 justify-center flex'>
                        <div className='flex w-3/5 items-center justify-between gap-8'>
                            <img src={SponsorRedBull} alt="redbull" />
                            <img src={SponsorForbes} alt="forbes" />
                            <img src={SponsorFortune} alt="fortune" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
export default Home