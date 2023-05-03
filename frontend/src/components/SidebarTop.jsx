import React, { useState } from "react";
import PropTypes from "prop-types";

import { Sidebar } from "primereact/sidebar";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import lightLogo from "../assets/LogoLight.png";

import SearchBar from "./SearchBar";
import FilterCategory from "./FilterCategory";

import DividerResponsive from "./DividerResponsive";

export default function SideBarTop({ dataTab }) {
  const [visibleTop, setVisibleTop] = useState(false);
  const customIcons = <SearchBar dataTab={dataTab} />;

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
        visible={visibleTop}
        position="top"
        onHide={() => setVisibleTop(false)}
        style={{ height: "80dvh" }}
        icons={customIcons}
      >
        <div className="filter">
          <FilterCategory />
          <DividerResponsive />
          <FilterCategory />
        </div>
        <div className="desktop">
          <Divider />
        </div>

        <div className="filter">
          <FilterCategory />

          <DividerResponsive />
          <FilterCategory />
        </div>
        <div className="divButtonSearchSideBar">
          <Button
            className="buttonSearchSideBar"
            label="Search"
            type="submit"
            icon="pi pi-check"
            iconPos="right"
            outlined
            size="small"
          />
        </div>
      </Sidebar>
    </div>
  );
}
SideBarTop.propTypes = {
  dataTab: PropTypes.shape({
    avatar_url: "",
    login: "",
    name: "",
    id: "",
    html_url: "",
    followers: "",
    public_repos: "",
    location: "",
    updated_at: "",
  }).isRequired,
};
