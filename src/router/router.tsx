import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

// pages
import { Home, SingleProject, Projects, NotFound } from 'pages'

// components
import { ContactUs, Footer, Navigation, ScrollToTop } from 'components'

// styled components
import { Screen } from 'theme/elements'

export function Router() {
  return (
    <BrowserRouter>
      <Screen>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/projects/:id">
            <SingleProject />
          </Route>
          <Route exact path="/not-found">
            <NotFound />
          </Route>
        </Switch>
        <ContactUs />
        <Footer />
      </Screen>
      <ScrollToTop />
    </BrowserRouter>
  );
}
