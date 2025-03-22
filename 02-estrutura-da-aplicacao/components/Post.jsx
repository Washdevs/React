import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.head}>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/Cannyster.png"
          />
          <div className={styles.authorInfo}>
            <strong>Jhonanthan</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="20 de março"
          datetime="2025-03-20 22:25"
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
      <footer className={styles.footer}>
        <p>Deixe seu Feedback</p>
        <input type="text" />
        <button>Publicar</button>
      </footer>
    </article>
  );
}
