import { useState } from "react";
import { InputText } from "primereact/inputtext";
// import axios from "axios";

// https://api.github.com/search/users?q=location:france&per_page=100
// exemple de query
// ?q=location:france&per_page=100"
// ?q=language:javascript

export default function SearchBar() {
  const [value, setValue] = useState("");
  // const [dataSearchUsers, setDataSearchUsers] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`https://api.github.com/search/users?q=location:france&per_page=100`)
  //     .then((response) => {
  //       setDataSearchUsers(response.data.items);
  //     })
  //     .catch((error) => {
  //       console.error(error.message);
  //     });
  // }, []);

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
    </div>
  );
}
