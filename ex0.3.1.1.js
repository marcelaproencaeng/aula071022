const filmes = [
  {
    titulo: ' O Senhor do Aneis: A Sociedade do Anel',
    lancamento: 2002,
  },
  {
    titulo: ' Harry Potter e a Pedra Filosofal ',
    lancamento: 2001,
  },
  {
    titulo: 'Matrix',
    lancamento: 1999,
  },
];
const resultado = filmes.map((filme) => {
  return filme.lancamento;
});

console.log(resultado);