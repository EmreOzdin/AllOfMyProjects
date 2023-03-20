import { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "../components/Navbar.js";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Main from "../pages/Dashboard";
import Profile from "../pages/Profile";
import About from "../pages/About";
import NewBlog from "../pages/NewBlog.js";
import Details from "../pages/Details.js";
import UpdateBlog from "../pages/UpdateBlog";
import { useAuth } from "../contexts/AuthContext";

function AppRouter() {
  const [isAuth, setIsAuth] = useState(true);
  const { currentUser } = useAuth();

  function PrivateRouter() {
    let location = useLocation();

    if (!currentUser) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: location }} replace />;
    } else {
      return <Outlet />;
    }
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/login"
          element={<Login setIsAuth={setIsAuth} isAuth={isAuth} />}
        />
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRouter />}>
          <Route path="profile" element={<Profile />} />
          <Route path="new-blog" element={<NewBlog />} />
          <Route path="update-blog/:id" element={<UpdateBlog />} />
          <Route path="detail/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
