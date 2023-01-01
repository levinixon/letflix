import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { login, logout, selectUser } from "../store/userSlice";
import HomeScreen from "../pages/HomeScreen";
import LoginScreen from "../pages/LoginScreen"
import SignInScreen from "../pages/SignInScreen";

export default function Home() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);
  
  return (
    <div>
      {!user ? (
        <LoginScreen />
      ) : (
        <HomeScreen />
      )}
    </div>
  );
};

