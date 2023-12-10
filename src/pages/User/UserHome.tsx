import { useEffect, useState } from "react";
import UserLayout from "./UserLayout";
import UserDashboard from "./Dashboard";
import { USERPAGES } from "./constants";
import Profile from "./Profile";
import Settings from "./Settings";
import { useParams } from "react-router-dom";

const User = () => {
  const { subpages: subpagesParam } = useParams();
  const [hashPage, setHashPage] = useState<string>("");

  useEffect(() => {
    //@ts-ignore
    setHashPage(USERPAGES[subpagesParam] || USERPAGES.home);
  }, [subpagesParam]);

  const userDashboardLinks = (page: string) => {
    switch (page) {
      case USERPAGES.profile:
        return <Profile />;
      case USERPAGES.settings:
        return <Settings />;
      default:
        return <UserDashboard />;
    }
  };
  return <UserLayout>{userDashboardLinks(hashPage)}</UserLayout>;
};

export default User;
