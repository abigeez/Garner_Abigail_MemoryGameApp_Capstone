import {useState} from 'react'
import React from 'react'
import Navbar from '../components/Navbar'
import CommentList from '../components/comments/CommentList'
import axios from 'axios'


export default function CommentsPage() {
   

async function getData () {
    
    const { data } = await axios.get('http://localhost:8000/comments', {})
    console.log(data)
}

const data = getData()       

  return (
   
   <div>
            <Navbar></Navbar>
           
            <div>
                <CommentList
                data ={data} />
            </div>
        </div>
       
    )
  
}

