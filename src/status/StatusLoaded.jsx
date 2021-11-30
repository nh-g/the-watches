// NPM package
import { Route, Switch } from 'react-router-dom';

// Project files
import Home from '../pages/Home';
import ParcelDetail from '../pages/ParcelDetail';
export default function StatusLoaded({data}) {
    return (
      <Switch>
        <Route path="/" exact>
          <Home data={data} />
        </Route>

        <Route path="/parcels/:parcel_id">
          <ParcelDetail data={data} />
        </Route>

     </Switch>
    );
}
