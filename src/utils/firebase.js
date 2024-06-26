// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*a/c 1st firebase
const firebaseConfig = {
  apiKey: "AIzaSyBmAdYe6OhSLzN8KCZ4Grb2RHXjWifHg_4",
  authDomain: "ainetflix.firebaseapp.com",
  projectId: "ainetflix",
  storageBucket: "ainetflix.appspot.com",
  messagingSenderId: "393538912476",
  appId: "1:393538912476:web:b4f6ea44fd20ef7eaeb419",
  measurementId: "G-9S0JSPCR65"
};
*/

const firebaseConfig = {
  apiKey: "AIzaSyDypDrXG831_OhcAuDKjpla3TwtPc91J_I",
  authDomain: "aimovies-fe0c8.firebaseapp.com",
  projectId: "aimovies-fe0c8",
  storageBucket: "aimovies-fe0c8.appspot.com",
  messagingSenderId: "184857626112",
  appId: "1:184857626112:web:d9caa308d855ca30207ae5",
  measurementId: "G-9L162T7JMV"
};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();