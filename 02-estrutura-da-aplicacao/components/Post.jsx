import styles from "./Post.module.css";
import { Coment } from "./Coment";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.head}>
        <div className={styles.author}>
          <Avatar src='https://github.com/cannyster.png' />
          <div className={styles.authorInfo}>
            <strong>Jhonanthan</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time
          title="20 de março"
          dateTime="2025-03-20 22:25"
          className={styles.data}
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Iai Pessoal 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 {""}
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#"> #novoprojeto</a>
          <a href="#"> #nlw</a>
          <a href="#"> #rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea placeholder="Deixe seu Feedback aqui" />
        <footer><button type="submit">Comentar</button></footer>
      </form>

      <div className={styles.commentList}>
        <Coment />
        <Coment />
        <Coment />
      </div>
    </article>
  );
}
