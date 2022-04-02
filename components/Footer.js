import styles from '../styles/Footer.module.css'

export default function Footer(){
    return (
        <footer className={styles.footer}> 
           <p>Copyright <span dangerouslySetInnerHTML={{ "__html": "&copy;" }}/>2022 Conduit</p>
        </footer>
    )
} 