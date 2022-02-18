import { Route, Routes } from 'react-router-dom';
import { dataRoutes } from './dataRoute';

const Router = () => {
  return (
    <Routes>
      {dataRoutes.map((route, key) => (
        <Route path={route.path} element={<route.component />} key={key} />
      ))}
    </Routes>
  );
};

export default Router;
