import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initAuthentication;

/* 
steps for authentication:
Step-1. Initaial setup:
------------------
i. firebase : create profject
ii. create web app
iii. get configuration
iv. initialize firebase
v. enable auth method

Step-2:
i. Create login component
ii. Create register component 
iii. Create route for login & register

Step-2:
i. set up sign in method
ii. set up sign out method
iii. set user state
iv. speical observer 

*/