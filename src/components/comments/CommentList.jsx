import { useState,useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import "../comments/CommentList.css"

function CommentList() {

  const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [author, setAuthor] =  useState('');
    const [body,setBody] = useState('');
    const [editIndex, setEditIndex] = useState(null); // to track which comment is being edited

    useEffect(() => {
      fetchComments();
    },[]
  );

  const fetchComments = async () => {
    try{
      const response = await axios.get('http://localhost:8000/comments');
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleNameChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleTextChange = (event) => {
    setBody(event.target.value);

  };


  const handleSubmit = async (event) => {
    event.preventDefault ();
    if(editIndex !== null) {
      ///  for if edit index is not null, update existing comment
      try {
        await axios.put(`http://localhost:8000/comments/${comments[editIndex]._id}`, {author,body});
        const updatedComments = [...comments];
        updatedComments[editIndex] = {...updatedComments[editIndex], author,body};
        setComments(updatedComments);
        setEditIndex(null);
      }catch (error) {
        console.error('Error updating comment:', error);
      }
    }else {
      //otherwise add new comment
      try{
        const response = await axios.post('http://localhost:8000/comments'), {author,body});
        setComments([...comments,response.data]);
      }catch (error){
        console.error('Error adding comment:', error);
      }
    }
    setAuthor('');
    setBody('');
  };


  const handleEdit = (index) => {
    setAuthor(comments[index].author);
    setText(comments[index].body);
    setEditIndex(index);
  };


  const handleDelete = async (index) => {
    try{
      await axios.delete(`http://localhost:8000/comments/${comments[index]._id}`);
      const updatedComments = [...comments];
      updatedComments.splice(index,1);
      setComments(updatedComments); 
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  }

  };

  


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