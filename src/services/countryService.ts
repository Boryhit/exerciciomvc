import axios from 'axios';
import { Country } from '../models/countryModel';

export async function fetchCountries(name: string, region: string): Promise<Country[]> {
  const response = await axios.get<Country[]>('/api/countries', {
    params: {
      name,
      region
    }
  });
  return response.data;
}
