import React from 'react'
import {Navbar,Hero,Skills,Projects} from "./components"
import styles from './style';
const App = () => {
  return (
    <div className = "bg-gray-100 w-full overflow-hidden">
      <div className = {`${styles.paddingX} ${styles.flexCenter}`}>
        <div className = {`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className = {`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Skills />
          <Projects /> 
        </div>
      </div>

    
    </div>
  )
}

export default App