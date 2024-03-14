import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import {app} from '../Firebase'
const OAuth = () => {
  const handleGoogleClick = async () =>{
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)
      const result = await signInWithPopup(auth,provider)
      console.log(result);
      const res = await fetch('/api/auth/google',{
        method : 'POST',
        headers :{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          name : result.user.displayName,
          email: result.user.email,
          photo : result.user.photoURL
        })
      })
      
      const data = await res.json()
      
      console.log(data,'success');

    } catch (error) {
      console.log("Could not login with google",error);
    }
  }
  return (
      <button type='button' onClick={handleGoogleClick} className='bg-red-700 text-white rounded-lg p-3 uppercase hower:opacity-95'>Continue With Google</button>
  )
}

export default OAuth