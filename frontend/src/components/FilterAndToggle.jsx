import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { InputSwitch } from "primereact/inputswitch";

function FilterAndToggle({ activeLanguages, setActiveLanguages, setUrl }) {
  const languages1 = ["Html", "JavaScript", "CSS", "Ruby", "TypeScript"];
  const languages2 = ["C", "Go", "Scheme", "Erlang", "React"];
  const [checked, setChecked] = useState(
    Array(languages1.length + languages2.length).fill(false)
  );

  const handleCheckedChange = (index) => {
    setChecked((prevState) => {
      const newState = [...prevState];
      newState[index] = !prevState[index];
      return newState;
    });
  };

  useEffect(() => {
    const activeLangString = activeLanguages
      .map((lang) => `language:${lang}`)
      .join(" ");
    setUrl(`https://api.github.com/search/users?q=${activeLangString}`);
  }, [activeLanguages]);

  return (
    <div className="flex w-[50dvw] gap-10">
      <div className="w-1/2">
        {languages1.map((el, index) => (
          <div className="filterAndToggle">
            <p className="filterItem">{el}</p>
            <div className="card flex justify-content-center">
              <InputSwitch
                checked={checked[index]}
                onChange={() => {
                  handleCheckedChange(index);
                  setActiveLanguages((prevLanguages) => {
                    const allLanguages = languages1.concat(languages2);
                    const langIndex = index;
                    if (checked[index]) {
                      return prevLanguages.filter(
                        (lang) => lang !== allLanguages[langIndex]
                      );
                    }
                    return [...prevLanguages, allLanguages[langIndex]];
                  });
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/2">
        {languages2.map((el, index) => (
          <div className="filterAndToggle">
            <p className="filterItem">{el}</p>
            <div className="card flex justify-content-center">
              <InputSwitch
                checked={checked[index + languages1.length]}
                onChange={() => {
                  handleCheckedChange(index + languages1.length);
                  setActiveLanguages((prevLanguages) => {
                    const allLanguages = languages1.concat(languages2);
                    const langIndex = index + languages1.length;
                    if (checked[index + languages1.length]) {
                      return prevLanguages.filter(
                        (lang) => lang !== allLanguages[langIndex]
                      );
                    }
                    return [...prevLanguages, allLanguages[langIndex]];
                  });
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

FilterAndToggle.propTypes = {
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
  setUrl: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
};

export default FilterAndToggle;
