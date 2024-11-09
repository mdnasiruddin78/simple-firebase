
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import './App.css'
import { auth } from './Firebase/Firebse'
import { useState } from 'react'

function App() {

  const [user,setUser] = useState(null)

  const googleProvider = new GoogleAuthProvider()

  const handleGoogleSignIn = () => {
    signInWithPopup(auth,googleProvider)
    .then(result => {
      console.log(result.user)
      setUser(result.user)
    })
    .catch(error => {
      console.log('error',error)
    })
  }

  return (
    <>
      <h1>simple firebase dimple</h1>
      <button onClick={handleGoogleSignIn}>login with google</button>
      {
        user && <div>
          <h3>user: {user.displayName}</h3>
          <p>email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      }
    </>
  )
}

export default App
