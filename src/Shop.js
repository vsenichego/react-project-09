import React, { useState, useEffect } from "react";
import Item from "./components/Item.js";

export default function Shop() {
  const [items, setItems] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://covid-shop-mcs.herokuapp.com");
        const data = await response.json();
        if (data) {
          setItems(data);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="shop">
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
