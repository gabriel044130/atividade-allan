import React from 'react';

const App = () => {
  const produtos = [
    {
      id: 1,
      nome: 'xaiome',
      preco: 'R$1,600,00 ',
      image:
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRnDSgmyyjgsWvU3iiGuXL0muPIABhWlpZwQcD6k4S7LXwTgX7RSMQ5S24fwzwzTWVJKX8p32oLo4ZAOkP5VbgqA8qghMLas-4q0zxEJ5FsFZG0xh8iVu55Fg&usqp=CAE',
    },
    {
      id: 2,
      nome: 'xaiome poco',
      preco: 'R$ 2,600,00',
      image: 'https://i.zst.com.br/thumbs/12/2e/1e/-1039496260.jpg',
    },
    {
      id: 3,
      nome: 'xaiome 10',
      preco: 'R$ 1,800,00',
      image: 'https://imgs.casasbahia.com.br/55065634/1g.jpg',
    },
    {
      id: 4,
      nome: 'xaiome i15',
      preco: 'R$ 2,350,00',
      image: 'https://i.zst.com.br/thumbs/12/2e/1e/-1039496260.jpg',
    },
    {
      id: 5,
      nome: 'xaiome i25',
      preco: 'R$ 1,500,00',
      image:
        'https://reviewsbr.com.br/wp-content/uploads/2024/03/Xiaomi-VS-Samsung-Os-Super-Modelos-de-2024-Xiaomi-Mi-11-001-1024x683.jpg',
    },
  ];

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <img
              src={produto.image}
              alt={produto.nome}
              style={{ width: '100px', height: 'auto' }}
            />
            {produto.nome} - {produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
