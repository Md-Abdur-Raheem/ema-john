import initAuthentication from "../firebase/firebase.init"
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut  } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";


initAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const signOutFromAccount = () => {
        signOut(auth)
            .then(() => {
                setUser({});
          }).catch((error) => {
                setError(error.message)
          });
    }
    
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state changed', user);
                setUser(user);
            }
        });
    }, [])
    
    return {signInWithGoogle, signOutFromAccount, user, error}
}
export default useFirebase;