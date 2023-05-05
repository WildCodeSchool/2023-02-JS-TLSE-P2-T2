import React, { useState } from "react";

import { InputSwitch } from "primereact/inputswitch";

export default function ToggleButtonFilter() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
    </div>
  );
}
