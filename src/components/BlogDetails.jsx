import React from 'react'

const BlogDetails = (props) => {
  return (
    <div className='container mx-auto mt-4 p-4'>
        <img src={props.blog.postDetails.img} alt="img" />
        <p className='mt-2'>{props.blog.postDetails.content}</p>
    </div>
  )
}

export default BlogDetails