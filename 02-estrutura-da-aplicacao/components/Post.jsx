import styles from "./Post.module.css";
import { Coment } from "./Coment";
import { Avatar } from "./Avatar";
import{ format, formatDistanceToNow} from 'date-fns';
import {ptBR} from 'date-fns/locale/pt-BR'
import { Paragraph } from "@phosphor-icons/react";

export function Post({author, publishedAt, content }) {

const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
  locale: ptBR,
})
const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
  locale: ptBR,
  addSuffix: true
})

return (
    <article className={styles.post}>
      <header className={styles.head}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title= {publishedDateFormatted } dateTime={publishedAt.toISOString()} className={styles.data}>
          {publishedDateRelativeNow}
        </time>
      </header>

      <div className={styles.content}>
      {content.map(line => {
        if(line.type === 'paragraph'){
                  return <p>{line.content}</p>
        }if(line.type === 'link'){
          return <p><a href="#">{line.content}</a></p>
        }
        else{
          return <p>Erro ao retornar Valores</p>
        }
        })}
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
