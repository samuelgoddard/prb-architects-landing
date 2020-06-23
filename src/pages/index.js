import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import introGif from "../images/prb-intro.gif"

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

const item = {
	initial: { opacity: 0 },
	enter: { opacity: 1, transition },
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
        className="h-full"
      >
        <motion.div variants={item} className="absolute top-0 right-0 landing-image w-7/12 md:w-1/3">
          <img src={ introGif } className="w-full h-full object-cover" alt="Gif of project imagery" />
        </motion.div>

        <div className="p-4 md:p-6 h-full flex flex-wrap">
          <div className="w-full">
            <motion.div 
              className="content"
              variants={item}
              className="w-32 md:w-full md:max-w-2xs"
            >
              <motion.h1 variants={item} className="text-lg md:text-xl">Full site launch Summer 2020</motion.h1>
            </motion.div>
          </div>

          <div className="mt-auto w-full">
            <motion.div variants={item}>
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" className="w-32 md:w-4/12 xl:w-3/12 mb-5 md:mb-8" viewBox="0 0 906.89 620.42"><defs></defs><path className="cls-1" d="M25.39 183.53H.34V0H67c45.44 0 71.36 21.55 71.36 57.37 0 36.12-25.92 57.67-71.36 57.67H25.39zM66.46 94.4c32 0 47.47-13.1 47.47-37 0-23.59-15.43-36.69-47.47-36.69H25.39V94.4zM185.29 0v183.53h-24.18V0zM320.72 158.48c0 6.7 3.79 9.9 9.91 9.9a24.11 24.11 0 0011.06-2.91v13.11c-4.36 4.37-9.61 7.57-19.51 7.57-13.11 0-22.43-9.9-23.88-25.05-6.99 14.9-25.05 25.9-45.73 25.9-24.76 0-40.78-13.4-40.78-35.25 0-24.17 20.68-34.07 51.26-40.19l34.37-7v-4.91c0-17.48-10.19-28.25-28-28.25-18.35 0-28.25 10.77-32 25.63l-21.55-2.92c4.95-23.88 23.88-41.36 53.88-41.36 32 0 51 16.32 51 48.64zm-23.3-37.86l-28.54 6.11c-20.1 4.37-32.91 8.16-32.91 23.6 0 10.77 7.28 18.93 21.84 18.93 22.43 0 39.61-16.89 39.61-42.53zM374 232.46l20.68-49.22-53.59-127h25.34l40.48 97.86h1.17l39-97.86H471l-73.4 176.21zM603.24 140.71c-6.41 28.84-27.67 46.29-59.42 46.29-37.86 0-65.53-25.64-65.53-65.25 0-40.19 27.67-69 64.37-69 40.48 0 61.16 28.84 61.16 63.5v9.61H502.47c1.16 24.76 18.93 42.23 41.65 42.23 21.26 0 33.78-10.19 39-29.71zm-24.17-30.58c-.88-20.39-12.24-39-36.41-39-23 0-36.7 18.06-39.61 39zM704.89 80.42c-7-3.78-11.94-5.24-19.81-5.24-18.35 0-32 16.6-32 41.07v67.28h-24.21V56.25H653v25.92c4.67-14.56 17.77-29.42 36.12-29.42 7.87 0 13.69 2 18.06 5.83zM120.34 400c-3.49-4.95-6.12-18.35-7.57-39.9C111.6 339.66 102 326 76.94 326H25.1v74H.34V216.46H74.9c46.61 0 69 21.55 69 54.17 0 28.25-19.22 43.11-41.65 45.73 22.43 4.37 33.21 18.06 34.95 39.61 2.33 26.79 3.21 37.28 9.32 44zm-46.89-94.13c31.16 0 45.14-11.65 45.14-34.37 0-21-14-34.37-45.14-34.37H25.1v68.74zM229.85 403.44c-37.28 0-64.66-27.37-64.66-67s27.38-67.28 64.66-67.28c37.58 0 65.25 27.67 65.25 67.28s-27.67 67-65.25 67zm0-18.64c25.93 0 40.49-20.09 40.49-48.35 0-28.54-14.56-48.34-40.49-48.34-25.63 0-39.9 19.8-39.9 48.34.05 28.26 14.27 48.35 39.9 48.35zM338.49 400h-18.35V216.46h24.18v83c5.53-15.72 21.84-30.29 45.72-30.29 37.58 0 58.25 29.71 58.25 67.28s-20.67 67-58.54 67c-23.59 0-40.19-14-46-30zm5.24-60c0 28 17.77 44.27 40.78 44.27 25.05 0 38.74-18.64 38.74-47.77s-13.69-47.76-38.74-47.76c-23 0-40.78 16.31-40.78 44zM591 357.13c-6.41 28.84-27.67 46.31-59.41 46.31-37.87 0-65.54-25.63-65.54-65.24 0-40.19 27.67-69 64.37-69 40.49 0 61.16 28.84 61.16 63.5v9.61H490.23c1.16 24.76 18.93 42.23 41.65 42.23 21.26 0 33.78-10.19 39-29.71zm-24.17-30.58c-.88-20.39-12.24-39-36.41-39-23 0-36.7 18.06-39.61 39zM692.65 296.84c-7-3.78-11.94-5.24-19.81-5.24-18.34 0-32 16.6-32 41.07V400h-24.21V272.67h24.18v25.92c4.66-14.56 17.76-29.42 36.11-29.42 7.87 0 13.69 2 18.06 5.83zM720.9 290.14h-19.23V277l8.16-1.46c11.94-2.33 14.56-8.15 17.47-20.39l3.79-17.76h13.69v35.24h35.82v17.47h-35.82v77.19c0 11.36 4.66 16.6 15.73 16.6 8.15 0 16.6-3.5 23.88-7.57v16.31c-9.32 7-18.64 10.77-32.62 10.77-18.06 0-30.87-8.44-30.87-33.2zM816.72 355.68c2.33 19.51 16 30 37.86 30 16.9 0 29.42-6.12 29.42-18.93 0-11.95-8.45-16-24.17-18.94L838.27 344c-23.88-3.79-38.15-14-38.15-35.83 0-23.3 19.51-39 48.93-39 33.79 0 53.59 15.73 55.92 45.15l-19.51 1.16c-2.92-19.51-14.86-28.54-36.41-28.54-16 0-26.51 7.28-26.51 18.93 0 10.2 6.41 15.44 19.52 17.77l23.88 3.79c25.63 4.36 40.78 14 40.78 37 0 25.33-22.43 39-52.14 39-31.74 0-55.92-14.85-58.25-46.31zM78.4 616.37H.34v-183.5H75.2c45.43 0 64.07 19.81 64.07 48.94 0 21.26-15.14 35.82-34.66 39.31 22.43 3.79 39.91 18.65 39.91 44.86 0 31.75-23.31 50.39-66.12 50.39zM24.81 512.1h51.26c26.5 0 37.86-11.36 37.86-29.13 0-17.47-11.36-29.42-37.86-29.42H24.81zm0 19.51v64.08h53c27.38 0 41.65-11.94 41.65-31.75 0-20.1-14.27-32.33-41.65-32.33zM289.55 573.55c-6.4 28.84-27.67 46.31-59.41 46.31-37.87 0-65.54-25.63-65.54-65.24 0-40.19 27.67-69 64.37-69 40.49 0 61.17 28.84 61.17 63.5v9.61H188.78c1.16 24.76 18.93 42.23 41.65 42.23 21.26 0 33.78-10.19 39-29.71zM265.38 543c-.88-20.39-12.23-39-36.41-39-23 0-36.7 18.06-39.61 39zM344.6 432.87v183.5h-24.18v-183.5zM406.93 432.87v183.5h-24.18v-183.5z"/><g id="Group_40" data-name="Group 40"><path d="M631.25 616.4H489.33v-13.22h128.7v-128.7h13.22V616.4z"/><path transform="rotate(-45 559.62 544.768)" d="M553.01 452.82h13.22v183.91h-13.22z"/></g></svg>
            </motion.div>

            <motion.div variants={item}className="w-full ml-auto mt-auto">
              <ul className="flex flex-wrap border-t border-black border-b">
                <li className="md:text-lg xl:text-2xl pl-0 py-2 md:py-3 px-2 block">&copy; 2020</li>

                <li className="ml-auto block border-l border-black">
                  <a className="md:text-lg xl:text-2xl py-2 md:py-3 px-2 lg:px-4 xl:px-6 block hover:text-white focus:text-white hover:line-through hover:line-through" href="mailto:hello@prb-a.com" target="_blank" rel="noopener noreferrer">hello@prb-a.com</a>
                </li>

                <li className="md:text-lg xl:text-2xl py-2 md:py-3 px-2 lg:px-4 xl:px-6 block border-l border-black pr-12 xl:pr-32 2xl:pr-64 hidden md:block">Architecture + Conservation</li>

                <li className="border-l border-black">
                  <a className="md:text-lg md:text-lg xl:text-2xl py-2 md:py-3 px-2 lg:px-4 xl:px-6 block hover:text-white focus:text-white hover:line-through hover:line-through" href="https://twitter.com/prbarchitects" target="_blank" rel="noopener noreferrer">Twi<span className="hidden md:inline">tter</span></a>
                </li>

                <li className="border-l border-black">
                  <a className="md:text-lg md:text-lg xl:text-2xl py-2 md:py-3 px-2 lg:px-4 xl:px-6 pr-0 block hover:text-white focus:text-white hover:line-through hover:line-through" href="https://www.instagram.com/prbarchitects/" target="_blank" rel="noopener noreferrer">Insta<span className="hidden md:inline">gram</span></a>
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