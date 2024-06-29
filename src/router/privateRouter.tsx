import LayoutPage from "../components/LayoutPage/LayoutPage";
import { NotFound } from "../pages/404/NotFound";
import PrivateGard from "./PrivateGard";


const privateRouter = [
  {
    element: <LayoutPage />,
    children: [
      {
        element: <PrivateGard />,
        children: [
          {
            path: "/*",
            element: <NotFound />,
          },
        ],
      },
    ],
  },
];

export default privateRouter;
