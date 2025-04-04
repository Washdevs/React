interface Users {
 name: string;
 bio: string;
 age: number;
}

function sumAge(users: Users[]) {
 let sum = 1;

 for (const user of users) {
  sum += user.age;
 }

 return sum;
}

const soma_dos_usuarios = sumAge([{ name: 'marcos', bio: 'opa', age: 19 }]);

console.log(soma_dos_usuarios);
