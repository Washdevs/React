import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://images.unsplash.com/photo-1542033474370-d28774f3338d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxNzE4ODAyfHxlbnwwfHx8fHw%3D"
          />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
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
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href=""> #novoprojeto #nlw #rocketseat</a>
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
