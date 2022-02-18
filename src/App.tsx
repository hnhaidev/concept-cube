import { Fragment, Suspense } from 'react';
import Nav from './components/Nav';
import Router from './routers/router';

const App = () => {
  return (
    <Fragment>
      <Suspense fallback="...">
        <Router />
        <Nav />
      </Suspense>
    </Fragment>
  );
};

export default App;
