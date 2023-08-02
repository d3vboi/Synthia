import './Chat.css'
import Carter from 'carter-js'
import { useState, useRef, useEffect } from 'react'


const Chat =()=>{
    const [inputValue, setInputValue] = useState("");
    const chatHeader = useRef();
    const chatMessages = useRef();
    const chatInput = useRef();
    const chatInputForm = useRef();
    const apiKey = atob('NGVhMGVkMTYtNGUwNS00OWY3LWI5ZmItYjRiNWRjM2RkOWIy')
    const carter = new Carter(apiKey)
    const createChatMessageElement = (message) => `
    <div style="padding: 0.625em;border-radius:1em;margin-bottom:0.625em;display:flex;flex-direction:column;color:#fff;${message.sender === 'You' ? 'background-color:#1c9bef;' : 'background-color:#3d5365;'}" className="message ${message.sender === 'You' ? 'human-bg' : 'bot-bg'}">
        <div style="font-weight: bold;margin-bottom:0.31em;" className="message-sender">${message.sender}</div>            
        <div style="font-size: 1em;margin-bottom:0.31em;word-wrap:break-word;" className="message-text">${message.text}</div>
        <div style="font-size:0.75em;text-align:right;" className="message-timestamp">${message.timestamp}</div>           
    </div>
    `
    

    const scrollToBottom = (id) => {
        const element = id.current;
        element.scrollTop = element.scrollHeight;
    }

    function botMessage(resp) {
        const date = new Date()
        const hour = date.getHours()
        const min = date.getMinutes()
        const timestamp = hour + ':' + min
        let message = {
            sender:'Synthia',
            text:resp,
            timestamp:timestamp
        }
        console.log(message)
        chatMessages.current.innerHTML += createChatMessageElement(message)
        scrollToBottom(chatMessages)
    }
    const sendMessage = (e) => {
        const date = new Date()
        const hour = date.getHours()
        const min = date.getMinutes()
        const timestamp = hour + ':' + min
        let message = {
            sender:'You',
            text:inputValue,
            timestamp:timestamp
        }
        console.log(message)
        chatMessages.current.innerHTML += createChatMessageElement(message)
        scrollToBottom(chatMessages)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputValue);
        chatInputForm.current.reset()
        chatInput.current.focus();
        sendMessage();
        const interaction = await carter.say(inputValue, "TesterID4");
        const outputText = interaction.outputText;
        console.log(outputText);
        botMessage(outputText);
    }

    const opener = async (e) => {
        const response = await carter.opener('TesterID4');
        botMessage(response.outputText);
    }
    //useEffect(
    //    opener(),
    //    [] // empty dependency array
    //)

//    <div className="message human-bg">
//    <div className="message-sender">You</div>
//    <div className="message-text">Hello</div>
//    <div className="message-timestamp">13:54</div>           
//    </div>
//    <div className="message bot-bg">
//    <div className="message-sender">Synthia</div>
//    <div className="message-text">Hello</div>
//    <div className="message-timestamp">14:02</div>           
//    </div>
    return (
        <div className="Chat">
            <h2 ref={chatHeader} className="chat-header">Synthia AI</h2>
            <div ref={chatMessages} className="chat-messages">

            </div>
            <form ref={chatInputForm} className="chat-input-form" onSubmit={handleSubmit}>
                <input ref={chatInput} onChange={(e) => setInputValue(e.target.value)} type="text" className="chat-input" required placeholder="Type here..."/>
                <button type="submit" className="button send-button" id="send-button">Send</button>
            </form>

        </div>
    )
}

export default Chat;