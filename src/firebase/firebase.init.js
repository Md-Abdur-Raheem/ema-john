import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initAuthentication;

/* 
steps for authentication:
Step-1. Initaial setup:
-----------------------
i. firebase : create profject
ii. create web app
iii. get configuration
iv. initialize firebase
v. enable auth method

Step-2: setup component
-----------------------
i. Create login component
ii. Create register component 
iii. Create route for login & register

Step-3: set auth system
-----------------------
i. set up sign in method
ii. set up sign out method
iii. set user state
iv. speical observer 
v. return necessery methods and states from useFirebase

Step-4: create auth context hook
---------------------------------
i. create a authContext
ii. create  context provider (AuthProvider)
iii. use Auth provider
iv. create useAuth hook
v. set context provider value

step-5: create private route
----------------------------
i. create private route 
ii. set private route

step-6: redirect after login
-----------------------------
i. after login redirect to their desire destination

*/