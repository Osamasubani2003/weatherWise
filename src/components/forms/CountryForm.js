import React, { useState } from 'react';
import Select from 'react-select';
import governorates from './Governorates';

const CountryForm = ({ getWeather }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCountryChange = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
    setSelectedCity(null); 
  };

  const handleCityChange = (selectedCity) => {
    setSelectedCity(selectedCity);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (selectedCity) {
      getWeather(selectedCountry.value, selectedCity.value);
    } else {
      alert("Please select a city."); 
    }
  };

  const countryOptions = governorates.map(option => ({ label: option.country, value: option.country }));
  const cityOptions = selectedCountry ? governorates.find(option => option.country === selectedCountry.value)?.cities.map(city => ({ label: city, value: city })) : [];

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <Select
            id="country-select"
            name="country-select"
            value={selectedCountry}
            onChange={handleCountryChange}
            options={countryOptions}
            isClearable
            isSearchable
            placeholder="Select Country"
            aria-label="Select Country"
            styles={{
              control: (provided) => ({
                ...provided,
                backgroundColor: '#BEBEBE', 
              }),
              input: (provided) => ({
                ...provided,
                color: '#3B494E', 
                width: '200px',
              }),
            }}
            style={styles.select}
          />
          <Select
            id="city-select"
            name="city-select"
            value={selectedCity}
            onChange={handleCityChange}
            options={cityOptions}
            isClearable
            isSearchable
            placeholder="Select City"
            noOptionsMessage={() => "Please select a country first"}
            isDisabled={!selectedCountry}
            aria-label="Select City"
            styles={{
              control: (provided) => ({
                ...provided,
                backgroundColor: '#BEBEBE', 
              }),
              input: (provided) => ({
                ...provided,
                color: '#3B494E',
                width: '200px', 
              }),

            }}
            style={styles.select}
          />
          <button type="submit" style={{...styles.button, width: '200px'}}>Get Weather</button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '300px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#293438',
    borderRadius: '8px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  select: {
    flex: '1',
    marginRight: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4285F4',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default CountryForm;
