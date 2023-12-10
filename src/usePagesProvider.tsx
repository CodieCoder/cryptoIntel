import { useContext } from "react";

import PagesContext from "./Context";

const usePagesProvider = () => {
  const pagesContext = useContext(PagesContext);
  return pagesContext;
};
export default usePagesProvider;
