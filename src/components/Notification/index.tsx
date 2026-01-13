import { useContext } from "react";
import PagesContext from "../../Context";
const NotificationAlert = () => {
  const { notify } = useContext(PagesContext);
  notify.error("Network Error.");
  return <></>;
};

export default (type: any) => {
  return <NotificationAlert />;
};
