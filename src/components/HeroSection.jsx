import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section className='h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row
    flex-col-reverse items-center justify-between
    lg:px-24 px-10 relative overflow-hidden'>
        {/*Left Section */}
        <div className="z-40 xl:mb-0-[-20%]">
            <motion.h1
            initial={{opacity: 0, y: 80}}
            animate={{opacity: 1, y:0}}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 1.3,
                duration: 1.5,
            }}
             className='text-5xl md:text-7xl
            lg:text-8xl font-bold z-10 mb-6'>
                Desarrollador <br/> Full-Stack
                
            </motion.h1>

            <motion.p
            initial={{opacity: 0, y: 80}}
            animate={{opacity: 1, y:0}}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 1.3,
                duration: 1.5,
            }}
             className="text-xl md:text-1xl
            lg:text-2xl text-purple-200 max-w-2xl">
                Desarrollador web Full-Stack con más de 3 años de experiencia y bachiller en Ingeniería de Sistemas. Ofrezco soluciones digitales a la medida, desde landing pages y blogs personalizados hasta aplicaciones web complejas como plataformas de e-Commerce con carrito de compras, manejo de usuarios, pasarelas de pago y diseño de bases de datos optimizados.

            </motion.p>
        </div>
        <Spline className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0" scene="https://prod.spline.design/JcXYMY2S8d8KTQZX/scene.splinecode" />

    </section>
  )
}

export default HeroSection