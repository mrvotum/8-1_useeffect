import React, { useEffect, useState } from "react";

import axios from "axios";
import nanoid from "nanoid";

export default function Details({ info }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!info.id) return;

    if (data) {
      return setData(data);
    } else {
      axios
        .get(
          "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/" +
            info.id +
            ".json"
        )
        .then(res => setData(res.data))
        .catch(function(error) {
          console.log(error);
        });
    }
  }, [info.id, data]);

  if (!data) return null;

  return (
    <div className="list-names">
      <img
        className="list-name-image"
        src={
          data.avatar +
          Math.random()
            .toString()
            .slice(2, 3)
        }
        alt="pravatar"
      />
      {Object.keys(data.details).map(key => (
        <div key={nanoid()}>
          {key}: {data.details[key]}{" "}
        </div>
      ))}
    </div>
  );
}
