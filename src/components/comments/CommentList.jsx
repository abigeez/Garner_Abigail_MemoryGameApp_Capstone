import { useState,useEffect } from 'react'
import React from 'react'
import axios from 'axios'

function CommentList() {

  const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [author, setAuthor] =  useState('');
    const [body,setBody] = useState('');
    const [editIndex, setEditIndex] = useState(null); // to track which comment is being edited

    useEffect(() => {

    }
  )













  }
  


  return (

    <div className="commentBox">
 <h2 className="h2Comment">Comment Section:</h2>
 <br></br>
 <p>Leave a comment below on what you thought about the game!</p>
      <form >
        <label>
          Name:
        
        </label>

      </form>
    </div>

    
  )
}

export default CommentList