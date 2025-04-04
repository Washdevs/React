// import { useState } from 'react';

// function Comment() {
//  const [likes, setLikes] = useState(0);

//  function addLike() {
//   setLikes(likes + 1);
//   setLikes(likes + 1);
//  }
// }

// Comment(props, 0); // Forma que começou
// Comment(props, 1); // Forma que fica depois de atualizar

// quanto setLikes é chamada, pro react é o mesmo que chamar Comment(props, 1) e passar um novo parâmetro no caso este 1
// então se o setLikes é duplicado o valor anterior é 0 pois o valor 1 é no último = mais ou menos isso.
