import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './Components/SignIn'
import VideosMain from './Components/VideosMain'

firebase.initializeApp({
  apiKey: "AIzaSyCAt7B44xhe5HayuqNf6oogNyCmDUmHt5k",
  authDomain: "videos-app-55b69.firebaseapp.com",
  projectId: "videos-app-55b69",
  storageBucket: "videos-app-55b69.appspot.com",
  messagingSenderId: "383469728280",
  appId: "1:383469728280:web:8e8ec0a8a07bfede84c96d"
})
const auth = firebase.auth();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <section>{user ? <VideosMain user={user} auth={auth} /> : <SignIn />}</section>
    </div>
  );
}

export default App;
