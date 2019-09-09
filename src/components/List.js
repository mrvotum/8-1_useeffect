import React, { useEffect, useState } from "react";
import axios from "axios";
import nanoid from "nanoid";

export default function List({ handleInfo }) {
  const [names, setNames] = useState([]);

  const [chosen, setChosen] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
      )
      .then(res => setNames(res.data))
      .catch(error => console.log(error));
  }, []);

  function handleChosen(id, name) {
    setChosen(id);
    handleInfo(id, name);
  }

  return (
    <div className="list-names">
      {names.map(({ id, name }) => {
        return (
          <div
            key={nanoid()}
            onClick={() => handleChosen(id, name)}
            className={`list-name ${id === chosen ? "chosen" : ""}`}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
}
