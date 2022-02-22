import {
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { authentication } from "./firebase.js";

const providerFB = new FacebookAuthProvider();
const providerGG = new GoogleAuthProvider();
const providerGH = new GithubAuthProvider();


export const signInWithFirebase = (typeLogin) => {
  let provider  = "";
  if (typeLogin === "GG") provider  = providerGG;
  if (typeLogin === "FB") provider  = providerFB;
  if (typeLogin === "GH") provider  = providerGH;
  
  signInWithPopup(authentication, provider)
  .then(async (user) => {
     const data = user.user.providerData[0];
     const token = await user.user.getIdToken();
     await fetch("http://localhost:5000/api/user/loginFirebase", { method: 'POST', mode: 'cors', cache: 'no-cache', credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer', 
        body:JSON.stringify(data)
      }).then((res) => {
        if(res.status === 200){
          // Set localStorage
          localStorage.setItem('userData' , JSON.stringify(data));
          // Set a Cookie
          function setCookie(nameCookie, valueCookie, numberDays) {
            let date = new Date();
            date.setTime(date.getTime() + (numberDays * 24 * 24 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = nameCookie + "=" + `Bear ${valueCookie}` + "; " + expires + "; path=/";
        }
        // Apply setCookie
        setCookie('CCD', token , 1);
        window.location.replace("/")
        }
      }).catch(err => {
        console.log(err);
      })
    })
    .catch((error) => {
      if (error.email) {
        return console.log("Email đã được dùng để xác thực");
      }
      // The AuthCredential type that was used.
      if (FacebookAuthProvider.credentialFromError(error)) {
        return console.log("Email đã được dùng để xác thực bằng phương pháp khác");
      }
    });
};
