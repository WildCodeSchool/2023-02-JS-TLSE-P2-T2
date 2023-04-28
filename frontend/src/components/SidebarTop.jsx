import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

import FilterCategory from "./FilterCategory";

export default function SideBarTop() {
  const [visibleTop, setVisibleTop] = useState(false);

  const mobileSize = window.matchMedia("(max-width: 767px)");

  return (
    <div className="card">
      <div className="flex gap-2 justify-content-center">
        <Button
          icon="pi pi-sliders-h"
          className="p-button-rounded"
          onClick={() => setVisibleTop(true)}
        />
      </div>

      <Sidebar
        // className=
        visible={visibleTop}
        position="top"
        onHide={() => setVisibleTop(false)}
        style={{ height: "80dvh" }}
      >
        <div className="filter">
          <FilterCategory />

          {mobileSize.matches ? (
            <Divider layout="horizontal" />
          ) : (
            <Divider layout="vertical" />
          )}
          <FilterCategory />
        </div>
        <Divider />
        <div className="filter">
          <FilterCategory />

          {mobileSize.matches ? (
            <Divider layout="horizontal" />
          ) : (
            <Divider layout="vertical" />
          )}
          <FilterCategory />
        </div>
      </Sidebar>
    </div>
  );
}
