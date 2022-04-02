import Link from 'next/link'
import styles from '../styles/Signin.module.css'
import { useState } from 'react'

export default function Signin () {
    function login(e) {
        e.preventDefault()
        console.log(`Usuário ${email} com a senha ${password} Está Logado.`)
      }
        const [email, setEmail] = useState()
        const [password, setPassword] = useState()

    return (
        <form className={styles.containerIn}
        onSubmit={login}>

            <h1>Sign in</h1>
            <Link href='/Signup'><p><a>Need an account?</a></p></Link>

            <input type="email" 
                alt="email" 
                name='email' 
                id='email' 
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
            />
            <br/>

            <input type="password" 
                alt="password" 
                name='password' 
                id='password' 
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <br/>

            <button>Sign In</button>
        </form>
    )
}