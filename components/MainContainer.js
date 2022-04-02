import Navbar from '/components/Navbar'
import Footer from '/components/Footer'

import styles from '../styles/MainContainer.module.css'

export default function MainContainer({children}){
    return(
        <div className={styles.teste}>
            <Navbar/>
            <div className={styles.container}>{children}</div>
            <Footer/>
        </div>
    )
}