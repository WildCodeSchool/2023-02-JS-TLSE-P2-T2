import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Divider } from "primereact/divider";
import lightLogo from "../assets/LogoLight.png";

import FilterCategory from "./FilterCategory";

export default function SideBarTop() {
  const [visibleTop, setVisibleTop] = useState(false);

  const mobileSize = window.matchMedia("(max-width: 767px)");

  return (
    <div className="card">
      <div>
        <button
          className="border-white border-4 rounded-full"
          onClick={() => setVisibleTop(true)}
          type="button"
        >
          <img
            src={lightLogo}
            className="w-[5dvw] transition-all duration-300 hover:w-[7dvw] cursor-pointer"
            alt="logo"
          />
        </button>
      </div>

      <Sidebar
        className="bg-white heightSideBarDesktop"
        visible={visibleTop}
        position="top"
        onHide={() => setVisibleTop(false)}
        style={{ height: "100dvh" }}
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
