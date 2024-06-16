import { useRef, useState } from "react";
import Header from "./Header";
import validate from "../Utils/validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import "../Utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispacth = useDispatch();

  const [errorMessage, setErrorMessage] = useState(null);
  const handleSignInSignUp = () => {
    setIsSignIn(!isSignIn);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleClick = () => {
    let errorMessageRes;
    if (isSignIn) {
      errorMessageRes = validate(
        email.current.value,
        password.current.value,
        "xyz"
      );
      setErrorMessage(errorMessageRes);
    } else {
      errorMessageRes = validate(
        email.current.value,
        password.current.value,
        fullName.current.value
      );
      setErrorMessage(errorMessageRes);
    }
    if (errorMessage === null && isSignIn === false) {
      //Regsiter the user
      // console.log("register user");

      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          const auth = getAuth();
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, displayName, email } = user;
              dispacth(
                addUser({ uid: uid, displayName: displayName, email: email })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + ":" + errorMessage);
        });
    }
    if (errorMessage === null && isSignIn === true) {
      // console.log("user loged in");
      const auth = getAuth();
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };
  return (
    <div className=" bg-black ">
      <div
        className="   bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg')] 
      "
      >
        <Header />

        <div className="flex  justify-center   h-screen ">
          <form
            onSubmit={handleSubmit}
            className="  flex flex-col bg-black opacity-90 text-white w-96 h-[450px] mt-[10%] md:m-0 "
          >
            <h1 className=" font-bold text-2xl m-4 p-2">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignIn && (
              <input
                ref={fullName}
                className=" m-4 p-2 bg-gray-700"
                type="text"
                placeholder="Name"
              />
            )}
            <input
              ref={email}
              className=" m-4 p-2 bg-gray-700"
              type="text"
              placeholder="Email Id"
            />
            <input
              ref={password}
              className="m-4 p-2 bg-gray-700"
              type="password"
              placeholder="Password"
            />
            <p className=" mx-4 text-red-500 font-bold">{errorMessage}</p>
            <button
              className="  m-4 p-2 bg-red-800 rounded-lg placeholder-opacity-100 "
              onClick={handleClick}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <div className="flex">
              <h1 className=" m-2">
                {isSignIn ? "New to Nextflix.?" : "Alreday Registerd"}
              </h1>
              <button className="  font-bold" onClick={handleSignInSignUp}>
                {isSignIn ? "Sing Up now" : "Sing In"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
