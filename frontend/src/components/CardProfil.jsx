/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

function CardProfil({ dataTabUsers }) {
  return (
    dataTabUsers && (
      <div>
        <div className="tabContainer">
          {dataTabUsers.map((el) => (
            <ul className="tabUser" key={el.id}>
              <div className="tabUserAvatar">
                <div className="tabHeader" />
                <li>
                  <img src={el.avatar_url} alt="lorem" />
                </li>
                <li className="tabUserLogin">{el.login}</li>
                <li className="tabUserId">ID #{el.id}</li>
                <div className="tabFooter" />
              </div>
            </ul>
          ))}{" "}
        </div>
      </div>
    )
  );
}

CardProfil.propTypes = {
  dataTabUsers: PropTypes.shape({
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
export default CardProfil;
