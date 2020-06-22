import React from "react"
import { AnimatePresence } from "framer-motion"
import Div100vh from 'react-div-100vh'
import "../styles/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <Div100vh>
        <div className="bg-prbred h-full">
          <AnimatePresence>
            {children}
          </AnimatePresence>
        </div>
      </Div100vh>
    </>
  )
}

export default Layout
