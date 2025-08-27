import type { Country } from '../models/countryModel';

interface Props {
  countries: Country[];
  search: string;
  setSearch: (value: string) => void;
  region: string;
  setRegion: (value: string) => void;
}

export default function CountryListView({ countries, search, setSearch, region, setRegion }: Props) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>Países</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          marginTop: '2rem',
          flexWrap: 'wrap'
        }}
      >
        <input
          type="text"
          placeholder="Pesquisar por nome..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '0.5rem', width: '250px' }}
        />

        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          style={{ padding: '0.5rem' }}
        >
          <option value="">Todas as regiões</option>
          <option value="Africa">África</option>
          <option value="Americas">Américas</option>
          <option value="Asia">Ásia</option>
          <option value="Europe">Europa</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctic">Antártida</option>
        </select>
      </div>

      <div
        style={{
          marginTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center'
        }}
      >
        {countries.map((country, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ddd',
              padding: '1rem',
              width: '200px',
              textAlign: 'center'
            }}
          >
            <img
              src={country.flags.png}
              alt={country.flags.alt}
              width="100%"
            />
            <h3>{country.name.common}</h3>
            <p><strong>Capital:</strong> {country.capital?.join(', ') || 'N/A'}</p>
            <p><strong>Região:</strong> {country.region}</p>
            <p><strong>População:</strong> {country.population.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
