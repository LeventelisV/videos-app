

export default function Comment({ comment,user }) {

    return (
        <li className="border-t-2 border-b-2 mb-4 py-2 px-4">
            <div className="flex mb-4">
            <img className="h-5 w-5 mr-2" src={user.photoURL} />
            <h5 className="font-bold">{user.displayName}</h5>
            </div>
            <p>{comment.message}</p>
        </li>

    )
}