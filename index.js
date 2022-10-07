// run `node index.js` in the terminal

const pessoas = [
  {
    nome: 'mathias',
    anoNascimento: '1995-11-24',
    cidade: ['porto alegre'],
  },
  {
    nome: 'Ricardo',
    anoNascimento: '2002-12-12',
    cidade: ['porto alegre'],
  },
];
const resultado = pessoas.map((pessoa) => {
  return '1995-11-24';
});
console.log(resultado);
