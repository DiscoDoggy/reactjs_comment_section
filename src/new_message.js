import React from 'react'
import {useState, useEffect} from 'react'
import './index.css'

function CreateMessage({
    
    message_name,
    message_text, 
    on_message_name_update, 
    on_message_text_update,
    handle_submit
    })
    

    
{
    function dealWithSubmit(event) {
        event.preventDefault();
        handle_submit();
        on_message_name_update("");
        on_message_text_update("");
    }

    function submit_needs_disable() {
        if(message_name === "" || message_text === "") {
            return true;
        }

        else {
            return false;
        }
    }
    
    return (
        <>
            <div className = "text-input">

                <form onSubmit = {dealWithSubmit}>
                    <div className = "name-box">
                        <input
                            type = "text"
                            value = {message_name} placeholder = "Name..."
                            onChange = {(e) => on_message_name_update(e.target.value)} 
                            className = 'form-control'
                        />
                    </div>
                    <div className = "content-box">
                        <input 
                        type ="text"
                        value = {message_text} placeholder = "Message..."
                        onChange = {(e) => on_message_text_update(e.target.value)} 
                        className = 'form-control'
                        
                        
                        />
                    </div>
                    <div className = 'send-button'>
                        <button
                            type = "submit"
                            disabled={submit_needs_disable()}
                            className = "btn btn-primary"
                        >Send!</button>
                    </div>

                        
                </form>
            
            </div>
        </>
    );

}

export default CreateMessage;