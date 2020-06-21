import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import introGif from "../images/prb-intro.gif"

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

const item = {
	initial: { y: 15, opacity: 0 },
	enter: { y: 0, opacity: 1, transition },
	exit: {
		opacity: 0,
		transition: { transition }
	}
}

const IndexPage = () => {
  return (
    <>
      <SEO title="Player Roberts Bell" />
      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          enter: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.div variants={item} className="absolute top-0 right-0 landing-image w-7/12 md:w-1/3">
          <img src={ introGif } className="w-full h-full object-cover" />
        </motion.div>
        <div className="p-4 md:p-6  flex flex-wrap h-screen">
          <div className="w-full">
            <motion.div 
              className="content"
              variants={item}
              className="w-32 md:w-full md:max-w-2xs"
            >
              <motion.p variants={item} className="text-lg md:text-xl">Full site launch Spring 2020</motion.p>
            </motion.div>
          </div>

          <div className="mt-auto w-full">
            <motion.div variants={item}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-1/2 md:w-4/12 xl:w-3/12" viewBox="0 0 113 92"><g data-name="Group 79"><text data-name="Player Roberts Bell" transform="translate(0 23)" fontSize="35" fontFamily="Founders Grotesk"><tspan x="0" y="0">Player</tspan><tspan x="0" y="28">Roberts</tspan><tspan x="0" y="56">Bell</tspan></text><g data-name="Group 40" fill="none" stroke="#000"><path data-name="Path 1" d="M74.366 66.11v11.747H62.619"/><path data-name="Path 2" d="M74.366 77.857l-13.891-13.89"/></g></g></svg>
            </motion.div>

            <motion.div variants={item}>
              <div className="md:border-t md:border-black md:border-b">
                <ul className="flex flex-wrap">
                  <li className="text-xl xl:text-2xl py-3 pr-4 hidden md:block">&copy; 2020</li>

                  <li className="ml-auto hidden md:block">
                    <a className="text-xl xl:text-2xl py-3 px-4 block hover:text-white" href="mailto:hello@prb-a.com" target="_blank" rel="noopener noreferrer">hello@prb-a.com</a>
                  </li>

                  <li className="text-xl xl:text-2xl py-3 px-4 block border-l border-black pr-12 xl:pr-32 2xl:pr-64 hidden md:block">Architectural Design</li>

                  <li className="block md:hidden ml-auto">
                    <a className="text-lg md:text-xl xl:text-2xl md:py-3 px-2 xl:px-4 block hover:text-white" href="mailto:hello@prb-a.com" target="_blank" rel="noopener noreferrer">Email</a>
                  </li>

                  <li className="md:border-l md:border-black">
                    <a className="text-lg md:text-xl xl:text-2xl md:py-3 px-2 xl:px-4 block hover:text-white" href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                  </li>

                  <li className="md:border-l md:border-black">
                    <a className="text-lg md:text-xl xl:text-2xl md:py-3 px-2 xl:px-4 pr-0 xl:pr-0 block hover:text-white" href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default IndexPage