import { useState, useEffect } from "react";

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    async function getProdutos() {
      try {
        const resposta = await fetch("https://fakestoreapi.com/products");
        const dados = await resposta.json();
        setProdutos(dados);
        console.log(dados);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getProdutos();
  }, []);
  return (
    <div>
      {produtos.map(({ id, title, price, image }) => (
        <div>
          <h2>{title}</h2>
          <p>${price}</p>
          <img className="foto-produto" src={image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default ListaProdutos;
