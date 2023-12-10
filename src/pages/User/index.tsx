import UserHome from "./UserHome";
import UserProvider from "./UserProvider";

const UserIndex = () => {
  return (
    <UserProvider>
      <UserHome />
    </UserProvider>
  );
};

export default UserIndex;
