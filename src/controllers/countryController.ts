import { useEffect, useState } from 'react';
import { Country } from '../models/countryModel';
import { fetchCountries } from '../services/countryService';

export function useCountryController() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    fetchCountries(search, region)
      .then(setCountries)
      .catch(console.error);
  }, [search, region]);

  return {
    countries,
    search,
    setSearch,
    region,
    setRegion
  };
}
