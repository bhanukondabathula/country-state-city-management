import React from "react";
import CityList from "./CityList";
import "../styles/StateList.css";

const StateList = ({ countries, setCountries, countryIndex }) => {
  const editState = (stateIndex) => {
    const newName = prompt(
      "Enter new state name:",
      countries[countryIndex].states[stateIndex].name
    );
    if (newName && window.confirm("Are you sure you want to update?")) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].name = newName;
      setCountries(updatedCountries);
    }
  };

  const deleteState = (stateIndex) => {
    if (window.confirm("Are you sure you want to delete this state?")) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states.splice(stateIndex, 1);
      setCountries(updatedCountries);
    }
  };

  const addCity = (stateIndex) => {
    const cityName = prompt("Enter city name:");
    if (cityName) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].cities.push(cityName);
      setCountries(updatedCountries);
    }
  };

  return (
    <div className="state-container">
      {countries[countryIndex].states.map((state, stateIndex) => (
        <div key={stateIndex} className="state-card">
          <div className="state-header">
            <h3>{state.name}</h3>
            <div className="state-buttons">
              <button className="edit-btn" onClick={() => editState(stateIndex)}>
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteState(stateIndex)}
              >
                Delete
              </button>
            </div>
          </div>
          <button className="add-btn" onClick={() => addCity(stateIndex)}>
            + Add City
          </button>
          <CityList
            countries={countries}
            setCountries={setCountries}
            countryIndex={countryIndex}
            stateIndex={stateIndex}
          />
        </div>
      ))}
    </div>
  );
};

export default StateList;
