import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactionButtons } from './ReactionButtons'
import { selectPostById } from './postSlice'

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params
  const post = useSelector((state) => selectPostById(state, postId))

  if (!post) {
    return (
      <section>
        <h2>Post not found</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post}></ReactionButtons>
        <Link to={`/editpost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  )
}
