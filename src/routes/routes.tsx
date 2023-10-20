import { useRoutes } from "react-router-dom";
import { paths } from "./path";
import MainPage from "../pages/MainPage";
import Support from "../pages/Support";
import Ticket from "../pages/Ticket";
import SignIn from "../pages/SignIn";
import Layout from "../components/common/layout/Layout";
import NotFoundPage from "../pages/NotFoundPage";

export const Router = () => {
  return useRoutes([
    {
      path: paths.home,
      element: (
        <Layout>
          <MainPage />
        </Layout>
      ),
    },
    {
      path: paths.support,
      element: (
        <Layout>
          <Support />
        </Layout>
      ),
    },
    {
      path: paths.ticket,
      element: (
        <Layout>
          <Ticket />
        </Layout>
      ),
    },
    {
      path: paths.signIn,
      element: (
        <Layout>
          <SignIn />
        </Layout>
      ),
    },
    {
        path: paths.not_found,
        element: <NotFoundPage />,
      },
  ]);
};
