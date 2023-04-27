import { SelectedPage, ClassType } from "@/shared/types"
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.webp";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpeg";
import image5 from "@/assets/image5.jpg";
import image6 from "@/assets/image6.webp";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class"

const classes: Array<ClassType> = [
  {
    name: "Treino de Hipertrofia",
    description: "Treino resistido convencional para construção de massa muscular",
    image: image1,
  },
  {
    name: "Crossfit",
    description: "Modalidade para melhoria da resistencia e capacidade cardiovascular",
    image: image2,
  },
  {
    name: "Aulas em Grupo",
    description: "Diferentes dinamicas divertidas fit em grupo",
    image: image3,
  },
  {
    name: "Aulas de HIIT",
    description: "Treino de alta intensidade intervalado para melhor resistencia vascular",
    image: image4,
  },
  {
    name: "Yoga",
    description: "Aulas com meditações para acalmar e focar em seus movimentos",
    image: image5,
  },
  {
    name: "Peso do Corpo",
    description: "Foco em  variedade de exercícios livres como flexão, barra e agachamentos",
    image: image6,
  }
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

function OurClasses({ setSelectedPage }: Props) {
  return (
    <section id="aulas" className="w-full bg-white py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Aulas)}
      >

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, }
          }}
          className="mx-auto w-5/6"
        >
          <div className="md:w-3/5 text-black">
            <HText>NOSSAS AULAS</HText>
            <p className="py-5">
            Oferecemos diversas modalidades de aulas em nossos centros, desde treino de hipertrofia e CrossFit, para os que buscam um desafio mais intenso,
            até Yoga e outras práticas de bem-estar, para aqueles que preferem uma abordagem mais tranquila.
            Temos diferentes estilos para todos os tipos de praticantes, independentemente de seus objetivos e níveis de condicionamento físico.
            </p>
          </div>

        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[28000] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
                />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses