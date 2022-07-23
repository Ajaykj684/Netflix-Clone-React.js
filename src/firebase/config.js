import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAm_yaNBnWnsviCqgi_Ob1hVYH9OPCuziM",
    authDomain: "netflix-clone-7b9fa.firebaseapp.com",
    projectId: "netflix-clone-7b9fa",
    storageBucket: "netflix-clone-7b9fa.appspot.com",
    messagingSenderId: "1069380328190",
    appId: "1:1069380328190:web:ddc345411fed7282b623af",
    measurementId: "G-QLQNPXQBJC"
  };





export default firebase.initializeApp(firebaseConfig)