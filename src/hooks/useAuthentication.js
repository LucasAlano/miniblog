import {
    getAuth,
    createUserWithEmailandPassword,
    signInWithEmailAndPassword,
    updateProfile,
    singOut
} from 'firebase/auth'

import {useState, useEffect} from 'react'

export const useAuthetication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)    

    //Cleanup
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled(){
        if (cancelled){
            return
        }
    }

}