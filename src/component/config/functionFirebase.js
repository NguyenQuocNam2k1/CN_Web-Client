import {
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { authentication } from "./firebase.js";
import { setCookie, getCookie } from "./cookie.js";

const providerFB = new FacebookAuthProvider();
const providerGG = new GoogleAuthProvider();
const providerGH = new GithubAuthProvider();

export const signInWithFirebase = (typeLogin) => {
  let provider = "";
  if (typeLogin === "GG") provider = providerGG;
  if (typeLogin === "FB") provider = providerFB;
  if (typeLogin === "GH") provider = providerGH;

  signInWithPopup(authentication, provider)
    .then(async (user) => {
      let data = user.user.providerData[0];
      const token = await user.user.getIdToken();
      await fetch("https://cn-web.herokuapp.com/api/user/loginFirebase", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      })
        .then((res) => {
          return res.json();
        })
        .then(async (res) => {
          if (res.status === "200") {
            // Apply setCookie
            localStorage.setItem("authUser", JSON.stringify(res.data));
            setCookie("CCD", token, 1);
            window.location.replace("/");
          }
        })
        .catch((err) => {
          return "SERVER ERROR";
        });
    })
    .catch((error) => {
      if (error.email) {
        const alertLogin = document.querySelector("#alert_login");
        alertLogin.style.display = "block";
        setTimeout(() => {
          alertLogin.style.display = "none";
        }, 5000);
        return;
      }
      // The AuthCredential type that was used.
      if (FacebookAuthProvider.credentialFromError(error)) {
        const alertLogin = document.querySelector("#alert_login");
        alertLogin.style.display = "block";
        setTimeout(() => {
          alertLogin.style.display = "none";
        }, 5000);
        return;
      }
    });
};

export function getDataUser() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return user.providerData[0];
    } else {
      return null;
    }
  });
}

export function logOut() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      const token = getCookie("CCD") || "";
      setCookie("CCD", token, 1 / (24 * 60 * 60 * 1000));
      window.location.replace("/user");
    })
    .catch((error) => {
      console.log(error);
    });
}
