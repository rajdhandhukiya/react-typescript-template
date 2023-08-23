import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { routes as routeName } from 'constants/pageRoutes.constants';

import Layouts, { LayoutsV1 } from "layouts/index";
import NotFound from "pages/404/NotFound";
// import { UserRole } from 'store/users/types';
// import PrivateRoute from './PrivateRoute';

export const Navigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={routeName.LoginUrl} element={<Authentication />} /> */}
        <Route element={<Layouts />}></Route>
        <Route element={<LayoutsV1 />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
