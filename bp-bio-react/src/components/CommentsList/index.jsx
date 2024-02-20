import CommentsItem from "../CommentsItem"

const CommentsList = ({ comments, setComments }) => {

    return (
        <>
            <ul>
                {comments.map((comment, i) => (<CommentsItem
                    comment={comment}
                    key={i} />))}
            </ul>
        </>
    )
}

export default CommentsList