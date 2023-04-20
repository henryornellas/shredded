import Logo from "@/assets/Logo.png"

type Props = {}

function Footer({ }: Props) {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis1/2 md:mt-0">
                    <img src={Logo} alt="logo" />
                    <p className="my-5">
                        awueauweuawudhu awuh wuadhuawu dhawu dhu awueauweuawudhu awuh wuadhuawu dhawu dhu
                        awuhe auwheuhawue uawhe uhawue hawuhe uawhueh uawhe uahwue hawu hewhae
                    </p>
                    <p>© Shredded All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">auwhe awueawhe auwh e</p>
                    <p className="my-5">awawuea auw </p>
                    <p>Uwuh awua wdua </p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact US</h4>
                    <p className="my-5">auwhe awueawhe auwh e</p>
                    <p className="my-5">aawahd awudha</p>
                    <p>(12) 34567-8910</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer