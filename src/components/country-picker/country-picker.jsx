import React, { useState, useEffect } from "react";
import styles from "./country-picker.module.css";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";
const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchApi();
  }, [fetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, index) => (
          <option value={country} key={index}>
            {" "}
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
