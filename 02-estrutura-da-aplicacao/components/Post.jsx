import styles from './Post.module.css';
import { Coment } from './Coment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { useState } from 'react';

//Estado = variaveis que quero que o componente monitore

export function Post({ author, publishedAt, content }) {
 const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
  locale: ptBR,
 });

 const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
  locale: ptBR,
  addSuffix: true,
 });

 const [comments, setComments] = useState(['Top']);
 // Temos um array de comentários que começa com o valor inicial "Top".

 const [newCommentText, setNewCommentText] = useState('');
 // O texto do novo comentário começa como uma string vazia.

 function handlleCreateNewCommentChange(event) {
  setNewCommentText(event.target.value);

  // Pega o valor digitado no input e atualiza o estado com ele.
 }

 function handlleCreateNewComment(event) {
  event.preventDefault();
  // Impede o comportamento padrão do HTML ao enviar o formulário (recarregar a página).

  setComments([...comments, newCommentText]); // Adicionar um novo comentário com o valor. Nesta ordem.
  /* Usa o spread operator (...) para copiar todos os comentários atuais.
       Depois, adiciona o novo comentário (newCommentText) ao final desse novo array.
       Por fim, chama setComments() para atualizar o estado com esse novo array.
    */

  setNewCommentText('');
  // Limpa o campo de input após adicionar o comentário.
 }

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
    <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} className={styles.data}>
     {publishedDateRelativeNow}
    </time>
   </header>

   <div className={styles.content}>
    {content.map(line => {
     if (line.type === 'paragraph') {
      return <p key={line.content}>{line.content}</p>;
     }
     if (line.type === 'link') {
      return (
       <p key={line.content}>
        <a href="#">{line.content}</a>
       </p>
      );
     } else {
      return <p>Erro ao retornar Valores</p>;
     }
    })}
   </div>
   <form onSubmit={handlleCreateNewComment} className={styles.commentForm}>
    <strong>Deixe seu Feedback</strong>

    <textarea name="textArea" placeholder="Deixe seu Feedback aqui" value={newCommentText} onChange={handlleCreateNewCommentChange} />

    <footer>
     <button type="submit">Comentar</button>
    </footer>
   </form>

   <div className={styles.commentList}>
    {comments.map(comment => {
     return <Coment key={comment} content={comment} />;
    })}
   </div>
  </article>
 );
}
