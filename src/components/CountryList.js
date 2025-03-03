import React from "react";
import StateList from "./StateList";
import "../styles/CountryList.css";

const CountryList = ({ countries, setCountries }) => {
  const editCountry = (index) => {
    const newName = prompt("Enter new country name:", countries[index].name);
    if (newName && window.confirm("Are you sure you want to update?")) {
      const updatedCountries = [...countries];
      updatedCountries[index].name = newName;
      setCountries(updatedCountries);
    }
  };

  const deleteCountry = (index) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      setCountries(countries.filter((_, i) => i !== index));
    }
  };

  const addState = (index) => {
    const stateName = prompt("Enter state name:");
    if (stateName) {
      const updatedCountries = [...countries];
      updatedCountries[index].states.push({ name: stateName, cities: [] });
      setCountries(updatedCountries);
    }
  };

  return (
    <div className="country-container">
      {countries.map((country, index) => (
        <div key={index} className="country-card">
          <div className="country-header">
            <h2>{country.name}</h2>
            <div className="country-buttons">
              <button className="edit-btn" onClick={() => editCountry(index)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => deleteCountry(index)}>
                Delete
              </button>
            </div>
          </div>
          <button className="add-btn" onClick={() => addState(index)}>
            + Add State
          </button>
          <StateList
            countries={countries}
            setCountries={setCountries}
            countryIndex={index}
          />
        </div>
      ))}
    </div>
  );
};

export default CountryList;
