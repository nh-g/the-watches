// NPM package
import { Route, Switch } from 'react-router-dom';

// Project files
import Home from '../pages/Home';
import DetailPage from '../pages/Detail';
import SearchResult from "../pages/SearchResult";
import CategoryPage from '../pages/CategoryPage';
export default function StatusLoaded({data}) {
    return (
      <Switch>
        <Route path="/" exact>
          <Home data={data} />
        </Route>

        <Route path="/products/:sku">
          <DetailPage data={data} />
        </Route>

        <Route path="/results/:query">
          <SearchResult data={data} />
        </Route>

        <Route path="/watches">
          <CategoryPage data={data} category="watch" />
        </Route>

        <Route path="/watch-straps">
          <CategoryPage data={data} category="strap" />
        </Route>

        <Route path="/jewelry">
          <CategoryPage data={data} category="bracelet" />
        </Route>
      </Switch>
    );
}
