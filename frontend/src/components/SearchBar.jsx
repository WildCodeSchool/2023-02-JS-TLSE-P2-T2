import { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";

export default function SearchBar() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      <div className="card">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search"
          />
        </span>
      </div>
      <p>
        {data
          .filter((val) => {
            return val.name.includes(value);
          })
          .map((val) => {
            return <p key={val.id}>{val.name}</p>;
          })}
      </p>
    </div>
  );
}
