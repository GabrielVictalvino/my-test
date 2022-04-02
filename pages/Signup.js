import Link from 'next/link'
import { useState } from 'react'

import styles from '../styles/Signup.module.css'

export default function Signup() {
  function register(e) {
    e.preventDefault()
    console.log(`Usuário ${username} cadastrou com o e-mail ${email} a senha ${password}`)
  }
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [username, setUsername] = useState()
 
    return(
        <section className={styles.containerIn}>
          <form onSubmit={register}>
            
            <h1>Sign Up</h1>
            <Link href='/Signin'><p><a>have an account?</a></p></Link>
            
            <input type="text" 
            alt="username" 
            placeholder='Username'
            name='Username'
            id='Username'
            onChange={(e) => setUsername(e.target.value)}/>

            <br></br>
            <input type="email" 
              alt="email" 
              placeholder='Email'
              neme='email'
              id='email'
              onChange={(e) => setEmail(e.target.value)}/>

            <br></br>
            <input type="password" 
              alt="password" 
              placeholder='Password'
              name='Password'
              id='Password'
              onChange={(e) => setPassword(e.target.value)}/>

            <br></br>
            <button>Sign up</button>
          </form>
        </section>
        
        
    ) 
}