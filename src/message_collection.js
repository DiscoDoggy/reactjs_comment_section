import React from 'react'
import {useState, useEffect} from 'react'

import SingleMessage from './single_message'
import CreateMessage from './new_message'

import {message_list} from './messages_list'
import './index.css'


function MessageCollection(props) {
    const [messages, add_message] = useState([]); //parent messages
    const [new_message_text, set_new_message_text] = useState("");
    const [new_message_name, set_new_message_name] = useState("");

    function append_message() {
        var new_message = {
            name: new_message_name,
            content: new_message_text,
            key: message_list.length + 1
        }
        add_message(messages.concat(new_message))
        // add_message(message_list.concat(new_message));
    };
    

    return(
        <>
            <div className = "whole-app">
                <h1 className = 'new-post-text'>New Post!</h1>
                <CreateMessage 
                    message_name = {new_message_name}
                    message_text = {new_message_text}
                    on_message_name_update = {set_new_message_name}
                    on_message_text_update = {set_new_message_text}
                    key = {message_list.length+1}
                    handle_submit = {append_message}
                />

                {messages.map((message_info) =>(
                    <section className = 'parent-element'>
                        <SingleMessage 
                            name = {message_info.name}
                            content = {message_info.content}
                            key = {message_info.id}
                            depth = {1}
                        />
                    </section>

                ))}
            </div> 
        </>

    );

}

export default MessageCollection;