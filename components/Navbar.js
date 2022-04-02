import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <Link href='/'><h2>conduit</h2></Link>
          <ul>
            <li>
              <Link href="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link href="/Signin">
                <p>Sign In </p>
              </Link>
            </li>
            <li>
              <Link href="/Signup">
                <p>Sign Up </p>
              </Link>
            </li>
          </ul>  
        </div>
        
    )
}