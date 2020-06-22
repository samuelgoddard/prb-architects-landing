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
          <img src={ introGif } className="w-full h-full object-cover" alt="Gif of project imagery" />
        </motion.div>
        <div className="p-4 md:p-6  flex flex-wrap h-screenn">
          <div className="w-full">
            <motion.div 
              className="content"
              variants={item}
              className="w-32 md:w-full md:max-w-2xs"
            >
              <motion.h1 variants={item} className="text-lg md:text-xl">Full site launch Spring 2020</motion.h1>
            </motion.div>
          </div>

          <div className="mt-auto w-full">
            <motion.div variants={item}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5/12 md:w-4/12 xl:w-3/12" viewBox="0 0 113 92"><g data-name="Group 79"><text data-name="Player Roberts Bell" transform="translate(0 23)" fontSize="35" fontFamily="Founders Grotesk"><tspan x="0" y="0">Player</tspan><tspan x="0" y="28">Roberts</tspan><tspan x="0" y="56">Bell</tspan></text><g data-name="Group 40" fill="none" stroke="#000"><path data-name="Path 1" d="M74.366 66.11v11.747H62.619"/><path data-name="Path 2" d="M74.366 77.857l-13.891-13.89"/></g></g></svg>
            </motion.div>

            <motion.div variants={item}className="w-full lg:w-10/12 ml-auto mt-auto">
              <ul className="flex flex-wrap border-t border-black border-b">
                <li className="md:text-lg xl:text-2xl pl-0 py-2 md:py-3 px-2 block">&copy; 2020</li>

                <li className="ml-auto block border-l border-black">
                  <a className="md:text-lg xl:text-2xl py-2 md:py-3 px-2 block hover:text-white focus:text-white hover:line-through hover:line-through" href="mailto:hello@prb-a.com" target="_blank" rel="noopener noreferrer">hello@prb-a.com</a>
                </li>

                <li className="md:text-lg xl:text-2xl py-2 md:py-3 px-2 block border-l border-black pr-12 xl:pr-32 2xl:pr-64 hidden md:block">Architecture + Restoration</li>

                <li className="border-l border-black">
                  <a className="md:text-lg md:text-lg xl:text-2xl py-2 md:py-3 px-2 xl:px-4 block hover:text-white focus:text-white hover:line-through hover:line-through" href="https://example.com" target="_blank" rel="noopener noreferrer">Twi<span className="hidden md:inline">tter</span></a>
                </li>

                <li className="border-l border-black">
                  <a className="md:text-lg md:text-lg xl:text-2xl py-2 md:py-3 px-2 xl:px-4 pr-0 block hover:text-white focus:text-white hover:line-through hover:line-through" href="https://example.com" target="_blank" rel="noopener noreferrer">Insta<span className="hidden md:inline">gram</span></a>
                </li>
              </ul>
              <ul className="flex flex-wrap border-b border-black md:hidden">
                <li className="md:text-lg py-2 block pr-12 block">Architecture + Restoration</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default IndexPage