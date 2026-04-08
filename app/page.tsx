import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Aethereum Quantum Smart Token
        </h1>
        <p className={styles.description}>
          Next-generation quantum-resistant smart token platform
        </p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>🔐 Quantum Resistant</h3>
            <p>Future-proof cryptographic security</p>
          </div>
          <div className={styles.feature}>
            <h3>⚡ High Performance</h3>
            <p>Optimized for speed and efficiency</p>
          </div>
          <div className={styles.feature}>
            <h3>🌐 Decentralized</h3>
            <p>Built on blockchain technology</p>
          </div>
        </div>
      </div>
    </main>
  )
}
