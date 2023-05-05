import PropTypes from "prop-types";
import FilterAndToggle from "./FilterAndToggle";

function FilterCategory({ activeLanguages, setActiveLanguages, url, setUrl }) {
  return (
    <div className="filterCategory">
      <h3 className="mb-5 text-xl">Languages :</h3>
      <FilterAndToggle
        activeLanguages={activeLanguages}
        setActiveLanguages={setActiveLanguages}
        url={url}
        setUrl={setUrl}
      />
    </div>
  );
}

FilterCategory.propTypes = {
  activeLanguages: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  setActiveLanguages: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  url: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  setUrl: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
};
export default FilterCategory;
