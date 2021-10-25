import initAuthentication from "../firebase/firebase.init"
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut  } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";


initAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            // .then(result => {
            //     setUser(result.user)
            //     console.log(user);
            // })
            // .catch(error => {
            //     setError(error.message);
            // })
    }

    const signOutFromAccount = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            }).catch((error) => {
                setError(error.message)
            })
            .finally(
                setLoading(false)
        )
    }
    
    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                setLoading(false);
            }
       });
        return unsubscribe;
    }, [])
    
    return {signInWithGoogle, signOutFromAccount, user, error, loading, setUser, setError}
}
export default useFirebase;