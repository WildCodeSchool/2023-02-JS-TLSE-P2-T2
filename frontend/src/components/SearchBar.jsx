import { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function SearchBar() {
  const [value, setValue] = useState("");

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
