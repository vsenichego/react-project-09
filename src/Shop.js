import React, { useState, useEffect } from "react";
import Item from "./components/Item";
import useFetch from "./components/useFetch";

export default function Shop() {
  const [items, setItems] = useState();
  const { get, loader } = useFetch();

  useEffect(() => {
    get("https://covid-shop-mcs.herokuapp.com/")
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }, []);
 
  return (
    <div>
      <h2>{loader ? "Загружаем..." : ""}</h2>
      {items &&
        items.map((item) => {
          const info = {
            name: item.name,
            desc: item.desc,
            image: item.image
          };
          return <Item info={info} />;
        })}
    </div>
  );
}
