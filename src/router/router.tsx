import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

// pages
import { Home } from 'pages'

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
