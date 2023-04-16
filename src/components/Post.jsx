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
          <time
            title="11 de maio de 2023 às 08:13h"
            dateTime="2023-04-16 08:13:00"
          >
            Publicado há 1h
          </time>
        </header>
      </article>
    </div>
  )
}
