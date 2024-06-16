import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { NETFLIX_LOGO, USER_AVATAR } from "../Utils/constants";
import { toggleGPTView } from "../Utils/gptSlice";
import { LANGAUGE_OPTIONS } from "../Utils/constants";
import { changeLangauge } from "../Utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispacth = useDispatch();

  const user = useSelector((store) => store.user);
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        navigate("/Browse");

        const { uid, displayName, email } = user;

        dispacth(addUser({ uid: uid, displayName: displayName, email: email }));
      } else {
        // User is signed out
        navigate("/");
        dispacth(removeUser());
      }
    });
    return () => unsubscribe();
  }, [navigate, dispacth]);
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/Error");
      });

    //clean up onAuth when componet unmounted(best practice )
  };

  const handleToggle = () => {
    dispacth(toggleGPTView());
  };

  const handleLangChange = (event) => {
    dispacth(changeLangauge(event.target.value));
  };
  return (
    <div className=" flex justify-between flex-col md:flex-row m-0 bg-black md:bg-transparent">
      <div className="   md:p-2 m-auto md:m-0 ">
        <img
          className=" md:w-56 w-44"
          src={NETFLIX_LOGO}
          alt="Netflix-Header-logo"
        />
      </div>

      {user && (
        <div className=" flex">
          <select
            onChange={handleLangChange}
            className=" md:my-10 mx-3 py-1 px-3 bg-red-700  font-semibold text-white h-fit"
          >
            {LANGAUGE_OPTIONS.map((lang) => {
              return (
                <option
                  className=" text-black bg-white"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.language}
                </option>
              );
            })}
          </select>
          <button
            className="md:my-9 mx-3 py-2 px-3 bg-red-700 rounded-lg font-semibold text-white  h-fit"
            onClick={handleToggle}
          >
            GPT search
          </button>

          <div className=" mx-8 ">
            <p className=" font-semibold text-white">{user.displayName}</p>
            <img className=" md:w-16 w-0" alt="user-icon" src={USER_AVATAR} />
            <button className=" text-white font-bold" onClick={handleSignOut}>
              SignOut
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
