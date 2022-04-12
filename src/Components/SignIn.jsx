import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function SignIn() {
    const auth = getAuth();
    const signIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }
    return (
        <div className="relative h-screen">
            <button onClick={signIn}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SignIn
            </button>
        </div>
    )
}