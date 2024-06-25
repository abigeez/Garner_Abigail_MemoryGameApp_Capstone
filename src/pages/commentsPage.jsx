import React from 'react'
import Navbar from '../components/Navbar'
import CommentList from '../components/comments/CommentList'
function CommentsPage() {
  return (
   <div>
            <Navbar></Navbar>
            <div>Leave A Review</div>
            <div>
                <CommentList currentUser="1"/>
            </div>
        </div>
       
    )
  
}

export default CommentsPage