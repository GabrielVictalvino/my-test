import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <Link href='/'><h2>conduit</h2></Link>
          <ul>
            <li>
              <p><Link href="/">Home</Link></p>
            </li>
            <li>
              <p><Link href="/Signin">Sign In</Link></p> 
            </li>
            <li>
              <p><Link href="/Signup">Sign Up</Link></p> 
            </li>
          </ul>  
        </div>
        
    )
}