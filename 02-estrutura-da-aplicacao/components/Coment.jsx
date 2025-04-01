import styles from './Coment.module.css';
import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';

export function Coment({ content, onDeleteComment }) {
 // onDeleteComment, prop recebida de Post
 //
 function handleDeleteComment() {
  // 2 - a função recebo o conteúdo e passa para a função deleteComment, que deleta o Conteúdo
  onDeleteComment(content);
 }

 return (
  <div className={styles.comment}>
   <Avatar hasBorder={false} src="https://github.com/deyvin.png" />
   <div className={styles.commentBox}>
    <div className={styles.commentContent}>
     <header>
      <div className={styles.authorAndTime}>
       <strong>deyvin</strong>
       <time title="20 de março" dateTime="2025-03-20 22:25" className={styles.data}>
        {' '}
        Cerca de 1h atrás
       </time>{' '}
      </div>

      <button onClick={handleDeleteComment} title="Deletar comentário">
       {' '}
       {/* 1 -  - Ao clicar executa a função */} <Trash size={22} />
      </button>
     </header>

     <p>{content}</p>
    </div>

    <footer>
     <button>
      <ThumbsUp />
      Aplaudir <span>20</span>
     </button>
    </footer>
   </div>
  </div>
 );
}
