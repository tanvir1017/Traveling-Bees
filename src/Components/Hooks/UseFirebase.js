import {
  createUserWithEmailAndPassword,
  getAuth,
  // getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import { intiAuthentication } from "../Firebase/firebase.init";

intiAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const [token, setToken] = useState("");
  const auth = getAuth();

  // Google sign in
  const googleSignUp = (location, navigate) => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        saveUer(user.email, user.displayName, "PUT");

        if (result) {
          swal({
            title: "Successfully",
            text: "Great you do well, Now you can do everything",
            icon: "success",
            button: "Oww",
          });
        }

        setError("");
        const uri = location?.state?.from || "/";
        navigate(uri);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // register
  const emailPasswordSignUp = (email, password, navigate, location, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        if (user) {
          swal({
            title: "Login Successfully",
            text: "Great you do well, Now you can do everything",
            icon: "success",
            button: "Oww",
          });
        }
        //   update name
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user data to the db
        saveUer(email, name, "POST");
        //   update profile
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});

        setError("");
        const uri = location?.state?.from || "/";
        navigate(uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // sign in user
  const signIn = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        if (user) {
          swal({
            title: "Login Successfully",
            text: "Great you do well, Now you can do everything",
            icon: "success",
            button: "Oww",
          });
        }
        setError("");
        const uri = location?.state?.from || "/";
        navigate(uri);
      })

      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // log out user
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        swal({
          title: "Sign-out Successfully",
          text: "you are now signed out",
          icon: "info",
          button: "I know!",
        });
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // State tracking
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // getIdToken(user).then((idToken) => setToken(idToken));
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unSubscribe;
  }, [auth]);
  // Save user to data base
  const saveUer = (email, displayName, methodType) => {
    const user = { email, displayName };
    fetch("https://peaceful-castle-84704.herokuapp.com/users", {
      method: methodType,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // Load admin api
  useEffect(() => {
    fetch(`https://peaceful-castle-84704.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);
  return {
    user,
    googleSignUp,
    emailPasswordSignUp,
    logout,
    signIn,
    admin,
    error,
    isLoading,
  };
};
export default useFirebase;
