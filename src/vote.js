import React from 'react'
import {useState, useEffect} from 'react'
import './index.css'

function Vote() {

    const [vote_val, set_vote_val] = useState(0);

    function inc_vote_val(){
        set_vote_val(vote_val + 1);
    }

    function dec_vote_val() {
        set_vote_val(vote_val - 1);
    }

    return(
        <>
            <button onClick ={inc_vote_val} className = 'btn btn-success btn-circle btn-xl'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
</svg></button>
            <p>{vote_val}</p>
            <button onClick = {dec_vote_val} className = 'btn btn-danger btn-circle btn-xl'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg></button>
        
        </>


    );


}

export default Vote