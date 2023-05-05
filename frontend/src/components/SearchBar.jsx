import { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function searchBar({
  setdisplayLocationValue,
  displayLocationValue,
}) {
  const [locationValue, setlocationValue] = useState("");
  useEffect(() => {
    // Mettre à jour l'élément avec l'id "display-locationValue" lorsqu'une nouvelle valeur est définie pour displayLocationValue
    const element = document.getElementById("locationValue");
    if (element) {
      element.innerText = displayLocationValue;
      if (displayLocationValue !== "") {
        element.classList.remove("invisible");
      } else {
        element.classList.add("invisible");
      }
    }
  }, [displayLocationValue]);
  const handleClick = () => {
    setdisplayLocationValue(locationValue);
  };

  return (
    <div>
      <div className="card">
        <span className="p-input-icon-left">
          <InputText
            value={locationValue}
            onChange={(e) => setlocationValue(e.target.value)}
            placeholder="Enter a Location"
          />
          <Button label="Apply" icon="pi pi-search" onClick={handleClick} />
        </span>
      </div>
    </div>
  );
}
