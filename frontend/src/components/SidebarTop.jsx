import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

import ToggleButtonFilter from "./ToggleButtonFilter";

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
        className="bg-white heightSideBarDesktop"
        visible={visibleTop}
        position="top"
        onHide={() => setVisibleTop(false)}
        style={{ height: "100dvh" }}
      >
        <div className="filter">
          <div className="filterCategory">
            <h3>Lorem:</h3>
            <div className="filterAndToggle">
              <p className="filterItem">Lorem ipsum</p>
              <ToggleButtonFilter />
            </div>
            <div className="filterAndToggle">
              <p className="filterItem">Lorem ipsum</p>
              <ToggleButtonFilter />
            </div>
            <div className="filterAndToggle">
              <p className="filterItem">Lorem ipsum</p>
              <ToggleButtonFilter />
            </div>
          </div>

          {mobileSize.matches ? (
            <Divider layout="horizontal" />
          ) : (
            <Divider layout="vertical" />
          )}
          <div className="filterCategory">
            <h3>Lorem:</h3>
            <div className="filterAndToggle">
              <p className="filterItem">Lorem ipsum</p>
              <ToggleButtonFilter />
            </div>
            <div className="filterAndToggle">
              <p className="filterItem">Lorem ipsum</p>
              <ToggleButtonFilter />
            </div>
            <div className="filterAndToggle">
              <p className="filterItem">Lorem ipsum</p>
              <ToggleButtonFilter />
            </div>
          </div>
        </div>
        <Divider />
        <div className="filter">
          <div className="filterCategory">
            <h3>Lorem:</h3>
            <div className="filterAndToggle">
              <p className="filterItem">Lorem ipsum</p>
              <ToggleButtonFilter />
            </div>
            <div className="filterAndToggle">
              <p className="filterItem">Lorem ipsum</p>
              <ToggleButtonFilter />
            </div>
            <div className="filterAndToggle">
              <p className="filterItem">Lorem ipsum</p>
              <ToggleButtonFilter />
            </div>
          </div>

          {mobileSize.matches ? (
            <Divider layout="horizontal" />
          ) : (
            <Divider layout="vertical" />
          )}
          <div className="filterCategory">
            <h3>Lorem:</h3>
            <div className="filterAndToggle">
              <p className="filterItem">Lorem ipsum</p>
              <ToggleButtonFilter />
            </div>
            <div className="filterAndToggle">
              <p className="filterItem">Lorem ipsum</p>
              <ToggleButtonFilter />
            </div>
            <div className="filterAndToggle">
              <p className="filterItem">Lorem ipsum</p>
              <ToggleButtonFilter />
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
