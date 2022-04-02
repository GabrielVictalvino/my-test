import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
      <div className={styles.teste}>
        <main className={styles.banner}> 
          <h1>conduit</h1>
          <p>A place to share your knowledge</p>
        </main>
        <dev className={styles.home}>
          <div>
            <h3>Global Feed</h3>
          </div>
          <div>Popular Tags</div>
        </dev>
      </div>       
  )
}
