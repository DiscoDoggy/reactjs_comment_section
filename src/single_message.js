import React from 'react'
import {useState, useEffect} from 'react'

import Vote from './vote'
import CreateMessage from './new_message';
import {message_list} from './messages_list'

import './index.css'


function SingleMessage(props) {
    const [replies, add_reply] = useState([]);
    const [replying, set_replying_status] = useState(false);
    const [new_message_text, set_new_message_text] = useState("");
    const [new_message_name, set_new_message_name] = useState("");
    
    var depth = props.depth;
    var name = props.name;
    var content = props.content;

    function handleReply() {
        var new_message = {
            name: new_message_name,
            content: new_message_text,
            key: message_list.length + 1,
            depth: depth+1
        }
        add_reply(replies.concat(new_message));
        set_replying_status(false);

    }

    function replyButtonHit() {
        console.log(depth);
        if(depth + 1 > 3) {
            alert("Reply not allowed! Cannot reply beyond depth 3!");
            set_replying_status(false);
            return false;
        }
        else{
            set_replying_status(true);
            return true;
        }
    }

    return(
        <>
            <div className = 'single-message'>
                <div className ='name-content-vote'>
                    <div className ='name-content'>
                        <p className = 'name'>{name}</p>
                        <p className = 'content'>{content}</p>
                    </div>

                    <div className = 'all-vote'>
                        <Vote />
                    </div>
                </div>
                <div className ='reply-button'>
                    <button onClick={replyButtonHit} className = 'btn btn-light'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reply" viewBox="0 0 16 16">
  <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z"/>
</svg>Reply!</button>
                </div>

                        {replying && (<CreateMessage 
                            message_name = {new_message_name}
                            message_text = {new_message_text}
                            on_message_name_update = {set_new_message_name}
                            on_message_text_update = {set_new_message_text}
                            key = {message_list.length+1}
                            handle_submit = {handleReply}
                        />  
                        )}
                    
                    {replies.map((reply) => (
                        <section className = "reply">
                            <SingleMessage 
                                key = {reply.id}
                                name = {reply.name}
                                content = {reply.content}
                            />
                        </section>
                    ))}

            </div>
        </>
    );
}

export default SingleMessage;