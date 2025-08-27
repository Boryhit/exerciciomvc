import { useCountryController } from './controllers/countryController.js';
import CountryListView from './views/CountryListView.js';

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
