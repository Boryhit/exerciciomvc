import { useCountryController } from './controllers/countryController';
import CountryListView from './views/CountryListView';

function App() {
  const { countries, search, setSearch, region, setRegion } = useCountryController();

  return (
    <CountryListView
      countries={countries}
      search={search}
      setSearch={setSearch}
      region={region}
      setRegion={setRegion}
    />
  );
}

export default App;
