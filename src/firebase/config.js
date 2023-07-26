import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC6sbmTZ0k6GYAtlTsCMADUVcAty3V4qtc",
  authDomain: "miniblog-d315d.firebaseapp.com",
  projectId: "miniblog-d315d",
  storageBucket: "miniblog-d315d.appspot.com",
  messagingSenderId: "445627953229",
  appId: "1:445627953229:web:8b9bd2e429fe11f874ec04"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };