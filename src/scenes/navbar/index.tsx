import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import LogoWhite from '@/assets/logobranca.png';
import LogoBlack from '@/assets/logopreta.png';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
    const logo = isTopOfPage ? LogoWhite : LogoBlack;
    const navbarTextColor = isTopOfPage ? "text-white" : "text-black";

    return <nav>
        <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* LEFT SIDE */}
                    <img src={logo} alt="logo" className='h-[24px] w-[113px]'/>
                    {/* RIGHT SIDE */}
                    {isAboveMediumScreens ? (<div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm ${navbarTextColor}`}>
                            <Link page="Início" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Benefícios" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Aulas" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Contato" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                        <div className={`${flexBetween} gap-8 ${navbarTextColor}`}>
                            <p>Inscreva-se</p>
                            <ActionButton setSelectedPage={setSelectedPage}>Torne-se Membro</ActionButton>
                        </div>
                    </div>) : (
                        <button
                            className='rounded-full bg-secondary-500 p-2'
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className='h-6 w-6 text-black' />
                        </button>
                    )}
                </div>
            </div>
        </div>
        {/* MOBILE MENU */}

        {!isAboveMediumScreens && isMenuToggled && (
            <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
                {/* CLOSE ICON */}
                <div className='flex justify-end p-12'>
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className='h-6 w-6 black' />
                    </button>
                </div>
                {/* MENU ITEMS */}
                <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
                    <Link page="Início" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Benefícios" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Aulas" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Contato" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
            </div>
        )}
    </nav>;
}

export default Navbar