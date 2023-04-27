import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function ContactUs({ setSelectedPage }: Props) {

    const inputStyles = `mb-5 w-full rounded-lg px-5 py-3 placeholder-black`

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger()
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section id="contato" className="mx-auto w-5/6 pt-24 pb-32">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contato)}>
                {/* HEADER */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0, }
                    }}
                    className="md:w-3/5">
                    <HText>
                        <span className="text-primary-500">JUNTE-SE AGORA</span>
                    </HText>
                    <p className="my-5 text-white">
                    Compartilhe sua jornada fitness conosco! Envie-nos uma mensagem contando um pouco sobre seus objetivos
                    e desafios, e nós enviaremos nossos melhores planos de treino e aulas que melhor se encaixam ao seus objetivos para ajudá-lo a conquistá-los.
                    </p>
                </motion.div>

                {/* FORM AND IMAGE */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, }
                        }}
                        className="mt-10 basis-3/5 md:mt-0">

                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/3518066c867a295fb3a06135962aad67"
                            method="POST">

                            <input className={inputStyles} type="text" placeholder="NOME" {...register("name", { required: true, maxLength: 100 })} />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "Max length is 100 characters.."}
                                </p>
                            )}

                            <input className={inputStyles} type="email" placeholder="EMAIL" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })} />
                            {errors.email && (
                                <p className="mt-1 text-primary-500">
                                    {errors.email.type === "required" && "This field is required."}
                                    {errors.email.type === "pattern" && "Invalid Email adress"}
                                </p>
                            )}

                            <textarea rows={4} cols={50} className={inputStyles} placeholder="MENSAGEM" {...register("message", { required: true, maxLength: 2000 })} />
                            {errors.message && (
                                <p className="mt-1 text-primary-500">
                                    {errors.message.type === "required" && "This field is required."}
                                    {errors.message.type === "maxLength" && "Max length is 2000 characters.."}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="mt-5 rounded-lg bg-primary-100 px-20 py-3 transition duration-500 hover:bg-primary-500 hover:text-white"
                            >
                                ENVIAR
                            </button>

                        </form>
                    </motion.div>
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, }
                    }}
                    className="relative mt-16 basis-2/5 md:mt-0">

                        <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                            <img
                            src={ContactUsPageGraphic}
                            alt="contact-us-img" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs