import './Chat.css';
import Carter from 'carter-js';
import { useState, useRef, useEffect } from 'react';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';


const Chat =()=>{
    const [inputValue, setInputValue] = useState("");
    const [carterId, setCarterId] = useState('')
    const chatHeader = useRef();
    const chatMessages = useRef();
    const chatInput = useRef();
    const chatInputForm = useRef();
    const apiKey = atob('NGVhMGVkMTYtNGUwNS00OWY3LWI5ZmItYjRiNWRjM2RkOWIy');
    const carter = new Carter(apiKey);

     

    const createChatMessageElement = (message) => `
    <div style="padding: 0.625em;border-radius:1em;margin-bottom:0.625em;display:flex;flex-direction:column;color:#fff;${message.sender === 'You' ? 'background-color:#1c9bef;' : 'background-color:#3d5365;'}" className="message ${message.sender === 'You' ? 'human-bg' : 'bot-bg'}">
        <div style="font-weight: bold;margin-bottom:0.31em;" className="message-sender">${message.sender}</div>            
        <div style="font-size: 1em;margin-bottom:0.31em;word-wrap:break-word;" className="message-text">${message.text}</div>
        <div style="font-size:0.75em;text-align:right;" className="message-timestamp">${message.timestamp}</div>           
    </div>
    `
    function generateId(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        result.concat('_SynthiaID')
        return result;
    }

    const scrollToBottom = (id) => {
        const element = id.current;
        element.scrollTop = element.scrollHeight;
    }

    function botMessage(resp) {
        const date = new Date();
        const hour = date.getHours();
        const min = date.getMinutes();
        const timestamp = hour + ':' + min;
        let message = {
            sender:'Synthia',
            text:resp,
            timestamp:timestamp
        };
        console.log(message);
        chatMessages.current.innerHTML += createChatMessageElement(message);
        scrollToBottom(chatMessages);
    }
    const sendMessage = (e) => {
        const date = new Date();
        const hour = date.getHours();
        const min = date.getMinutes();
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
        const interaction = await carter.say(inputValue, carterId);
        const outputText = interaction.outputText;
        console.log(outputText);
        botMessage(outputText);
    }
    useEffect(() => {
        const setId = () => {
            const cookie = read_cookie('SynthiaID_cookie');
            if (cookie != null) {
                setCarterId(cookie);
                console.log('Synthia ID detected. ')
                console.log('Detected ID is \'', cookie.concat(' \'.'));
            }
            else {
                console.log('Synthia ID not found in cookies, generating one now....');
                const res = generateId(15);
                console.log('Generated ID is \'', res.concat(' \'.'));
                bake_cookie('SynthiaID_cookie', res)
                setCarterId(res);
            }
        }
        const opener = async (e) => {
            const response = await carter.opener(carterId);
            botMessage(response.outputText);
        };
        setId()
        opener()
    }, []);

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