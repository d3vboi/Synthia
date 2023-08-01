import './Chat.css'
const chatHeader = document.querySelector('.chat-header')
const chatMessages = document.querySelector('.chat-messages')
const chatInput = document.querySelector('.chat-input')
const chatInputForm = document.querySelector('.chat-input-form')

const createChatMessageElement = (message) => `
    <div className="message ${message.sender === 'You' ? 'human-bg' : 'bot-bg'}">
        <div className="message-sender">${message.sender}</div>            
        <div className="message-text">${message.text}</div>
        <div className="message-timestamp">${message.timestamp}</div>           
    </div>
`
const Chat =()=>{
    return (
        <div className="Chat">
            <h2 className="chat-header">Synthia AI</h2>
            <div className="chat-messages">
                <div className="message human-bg">
                    <div className="message-sender">You</div>
                    <div className="message-text">Hello</div>
                    <div className="message-timestamp">13:54</div>           
                </div>
                <div className="message bot-bg">
                    <div className="message-sender">Synthia</div>
                    <div className="message-text">Hello</div>
                    <div className="message-timestamp">14:02</div>           
                </div>
            </div>
            <form className="chat-input-form">
                <input type="text" className="chat-input"required placeholder="Type here..."/>
                <button type="submit" className="button send-button">Send</button>
            </form>

        </div>
    )
}
export default Chat;