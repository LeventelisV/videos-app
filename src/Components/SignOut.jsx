


export default function SignOut({ auth }) {

    const signOut = () => {
        auth.signOut()
    }
    return (
        auth.currentUser &&
        <button onClick={signOut} className="mb-10 mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            SignOut</button>
    )
}