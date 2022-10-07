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
const resultado = filmes.map((filme, id) => {
  console.log(id);
  filme.id = id + 1;
  return filme;
});

console.log(resultado);
