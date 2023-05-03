import React from "react";
import PropTypes from "prop-types";

function CardProfil({ dataTabUsers }) {
  return (
    dataTabUsers && (
      <div>
        <div className="xl:w-[50dvw] xl:flex xl:flex-wrap xl:justify-center xl:gap-5">
          {dataTabUsers.map((el) => (
            <ul
              className="hidden xl:block xl:rounded-xl xl:box-border xl:bg-white xl:text-blue-700 xl:w-[40%] "
              key={el.id}
            >
              <div className="hidden xl:block xl:w-[100%] xl:rounded-tl-lg xl:rounded-tr-lg xl:bg-blue-950 xl:mb-2 ">
                <p className="hidden xl:block xl:invisible">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis itaque minus
                </p>
              </div>
              <li>
                <img
                  src={el.avatar_url}
                  alt="lorem"
                  className="xl:block xl:mx-auto xl:w-[50%]"
                />
              </li>
              <li>{el.login}</li>
              <li>ID #{el.id}</li>
              <div className="hidden xl:block xl:w-[100%] xl:rounded-bl-lg xl:rounded-br-lg xl:bg-blue-950 xl:mt-2">
                <p className="hidden xl:block xl:invisible">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis itaque minus
                </p>
              </div>
            </ul>
          ))}{" "}
        </div>
      </div>
    )
  );
}

CardProfil.propTypes = {
  dataTabUsers: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
};
export default CardProfil;
