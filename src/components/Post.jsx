/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
import styles from './Post.module.css'
import { Comment } from './Comment'

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
        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p>
            👉{' '}<a href="#">jane.design/doctorcare</a>
          </p>
          <p>
            <a href="#">#novoprojeto</a>{' '}
            <a href="#">#nlw</a>{' '}
            <a href="#">#rocketseat</a>
          </p>
        </div>
        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea placeholder='Deixe um comentário' />
          <footer>
            <button type='submit'>Publicar</button>
          </footer>
        </form>
        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
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
        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae maxime magni, numquam excepturi deleniti hic iure, officia 
            doloremque architecto, labore ullam unde voluptas. Ratione non hic vel deleniti, commodi fugiat.Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Repudiandae maxime magni, numquam excepturi deleniti hic iure, officia doloremque architecto, labore ullam unde voluptas. 
            Ratione non hic vel deleniti, commodi fugiat.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae maxime magni, 
            numquam excepturi deleniti hic iure, officia doloremque architecto, labore ullam unde voluptas. Ratione non hic vel deleniti, commodi fugiat.
            Ratione non hic vel deleniti, commodi fugiat.Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Repudiandae maxime magni, numquam excepturi deleniti hic iure, officia doloremque architecto, labore ullam unde voluptas. 
            Ratione non hic vel deleniti, commodi fugiat.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae maxime magni, 
            numquam excepturi deleniti hic iure, officia doloremque architecto, labore ullam unde voluptas. Ratione non hic vel deleniti, commodi fugiat.
          </p>
          <p>
            Repudiandae maxime magni, numquam excepturi deleniti hic iure, officia doloremque architecto, labore ullam unde voluptas. 
            Ratione non hic vel deleniti, commodi fugiat.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae maxime magni, 
            numquam excepturi deleniti hic iure, atione non hic vel deleniti, commodi fugiat.Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Repudiandae maxime magni, numquam excepturi deleniti hic iure, officia doloremque architecto, labore ullam 
            unde voluptas. Ratione non hic vel deleniti, commodi fugiat.
          </p>
          <p>
            👉{' '}<a href="#">jane.design/doctorcare</a>
          </p>
          <p>
            <a href="#">#novoprojeto</a>{' '}
            <a href="#">#nlw</a>{' '}
            <a href="#">#rocketseat</a>
          </p>
        </div>
        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea placeholder='Deixe um comentário' />
          <footer>
            <button type='submit'>Publicar</button>
          </footer>
        </form>
      </article>
    </div>
  )
}
