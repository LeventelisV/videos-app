import Comment from "./Comment"

export default function CommentList({ comments, user }) {
    return (
        <ul className="mt-6">
            {comments.map((comment) => {
                return <Comment key={comment.id} comment={comment} user={user} />
            })}
        </ul>
    )
}