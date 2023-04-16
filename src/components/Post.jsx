/* eslint-disable jsx-a11y/alt-text */
import styles from './Post.module.css'

export function Post() {
  return (
    <div>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img src="https://github.com/diegorcarvalho.png" />
            <div className={styles.authorInfo}>
              <strong>Autor</strong>
              <span>Profissão</span>
            </div>
          </div>
        </header>
      </article>
    </div>
  )
}
