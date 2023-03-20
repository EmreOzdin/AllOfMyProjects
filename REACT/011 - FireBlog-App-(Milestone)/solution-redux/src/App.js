import "./App.css";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUserAction } from "./redux/actions/authActions";
import { auth } from "./utils/firebaseUtil";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      dispatch(setCurrentUserAction(user));
    });
    return unsubscribe; //! clean-up function
  }, [dispatch]);

  return (
    <div className="App">
      <AppRouter />
      <ToastContainer />
    </div>
  );
}

export default App;
