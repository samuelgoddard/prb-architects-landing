import React from "react"
import { AnimatePresence } from "framer-motion"
import "../styles/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-prbred min-h-screenn">
        <AnimatePresence>
          {children}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Layout
