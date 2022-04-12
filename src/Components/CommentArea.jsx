import { useState } from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid'

export default function CommentArea({ user }) {
    const [comments, setComments] = useState([])
    const [showComments, setShowComments] = useState(true)


    return (
        <div className="mt-5">
            <button onClick={() => setShowComments(!showComments)}>{showComments ? <EyeOffIcon className="h-5 w-5 text-right" /> : <EyeIcon className="h-5 w-5 text-right" />}</button>
            {showComments &&
                <>
                    <CommentInput comments={comments} setComments={setComments} />
                    <CommentList comments={comments} user={user} />
                </>}
        </div>
    )
}