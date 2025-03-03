import React from "react";
import "../styles/CityList.css";

const CityList = ({ countries, setCountries, countryIndex, stateIndex }) => {
  const deleteCity = (cityIndex) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].cities.splice(cityIndex, 1);
      setCountries(updatedCountries);
    }
  };

  return (
    <div className="city-container">
      {countries[countryIndex].states[stateIndex].cities.map((city, cityIndex) => (
        <div key={cityIndex} className="city-card">
          <p>{city}</p>
          <button className="delete-btn" onClick={() => deleteCity(cityIndex)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default CityList;
