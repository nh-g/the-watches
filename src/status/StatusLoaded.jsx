// NPM package
import { Route, Switch } from 'react-router-dom';

// Project files
import Home from '../pages/Home';
import ParcelDetail from '../pages/ParcelDetail';
import SearchResult from "../pages/SearchResult";

export default function StatusLoaded({data}) {
    return (
      <Switch>
        <Route path="/" exact>
          <Home data={data} />
        </Route>

        <Route path="/products/:sku">
          <ParcelDetail data={data} />
        </Route>

        <Route path="/results/:query">
          <SearchResult data={data} />
        </Route>
      </Switch>
    );
}
