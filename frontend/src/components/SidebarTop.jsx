import React, { useState } from "react";
import PropTypes from "prop-types";

import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

import SearchBar from "./SearchBar";
import FilterCategory from "./FilterCategory";

import DividerResponsive from "./DividerResponsive";

export default function SideBarTop({ dataTab }) {
  const [visibleTop, setVisibleTop] = useState(false);
  const customIcons = <SearchBar dataTab={dataTab} />;

  // const mobileSize = window.matchMedia("(max-width: 767px)");

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

          {/* {mobileSize.matches ? (
            <Divider layout="horizontal" />
          ) : (
            <Divider layout="vertical" />
          )} */}
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
