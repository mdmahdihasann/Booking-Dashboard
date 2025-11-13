import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function DashboardCard() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <p>loading data....</p>;
  if (error) return <p>Error data</p>;
  if (!auth) return <p>Auth not initialized</p>;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
      console.log("signout successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {user && (
        <p>
          {user.email}, <button onClick={handleLogout}>SignOut</button>
        </p>
      )}
    </div>
  );
}

export default DashboardCard;
