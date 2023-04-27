import Logo from "@/assets/logopreta.png"

type Props = {}

function Footer({ }: Props) {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis1/2 md:mt-0">
                    <img src={Logo} alt="logo" className="h-[24px] w-[113px]"/>
                    <p className="my-5">
                       Entre em contato conosco por email para receber planos personalizados no seu email.
                    </p>
                    <p>© SHREDDED Todos os direitos reservados.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold mb-5">Links</h4>
                    <p className="my-2.5"><a href='https://github.com/henryornellas' target="_blank" className="underline">Github</a></p>
                    <p className="my-2.5"><a href='https://www.linkedin.com/in/henry-gabriel-a276301b6/' target="_blank" className="underline my-3">LinkedIn</a></p>
                    <p className="my-2.5"><a href='https://github.com/henryornellas' target="_blank" className="underline">Portfolio</a></p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contato</h4>
                    <p className="my-5">Draco Dormiens Numquam Titillandus</p>
                    <p className="my-5">Aut Viam Inveniam Aut Faciam</p>
                    <p>(12) 34567-8910</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer