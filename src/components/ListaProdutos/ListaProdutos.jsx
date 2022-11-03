import { useState, useEffect } from "react";
import serverApi from "../../api/servidor-api";

import React from "react";

const ListaProdutos = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    async function getPosts() {
      try {
        const resposta = await fetch(`https://fakestoreapi.com/products`);
      } catch (error) {}
    }
  });

  return <div>ListaProdutos</div>;
};

export default ListaProdutos;
