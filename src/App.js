import { useEffect, useState } from 'react';
import './App.css';
import { toHaveErrorMessage } from '@testing-library/jest-dom/matchers';
import Countries from './Components/Countries/Countries';
import Country from './Components/country/Country';
import Search from './Components/Search/Search';



const url = 'https://restcountries.com/v3.1/all';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);


  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
      setError(null);
    } catch (e) {
      setIsLoading(false);
      setError(e);
    }
  };


  useEffect(() => {
    fetchData(url);
  }, []);

  const hendleRemoveCountry = (name) => {
    const filter = filteredCountries.filter((Country) => Country.name.common !== name);
    setFilteredCountries(filter);
  }
  const hendleSearch = (searchVlue) => {
    let value = searchVlue.toLowerCase();
    const newCountries = countries.filter((Country) => {
      const countryName = Country.name.common.toLowerCase();
      return countryName.startsWith(value);
    })
    setFilteredCountries(newCountries);
  }
  return (
    <>
      <h1>Country App</h1>
      <Search onSearch={hendleSearch} />
      {isLoading && <h2>Loading...</h2>}
      {error && (<h2>{error.message}</h2>)}
      {
        countries && <Countries countries={filteredCountries} onRemoveCountry={hendleRemoveCountry} />
      }
    </>
  );
};
export default App;
