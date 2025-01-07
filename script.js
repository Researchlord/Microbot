const chatBox= document.getElementById('chat-box');
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById('send-btn');

//Define chatbot responses 
const responses = {
     'hello': 'Hi ! How can i help you?',
     'hi': 'Hey buddy...how may i help you?',
     'how are you' : 'I am doing great,thanks for asking!',
     'what your purpose' : 'I am here to provide basic information and assist with tasks. ',
     'default' : 'Bot Server is busy.Try again later .'
};

//Function to generate chatbot response
function getResponse(userInput) {
    const userInputLower = userInput.toLowerCase();
    for(const key in responses){
        if(userInputLower.includes(key))
    {
        return responses[key];
    }
}
     return responses['default'];
}

//Function to display chat message

function displayMessage(userInput,response) {
    const userMessage = document.createElement('div');
    userMessage.textContent = `You: ${userInput}`;
    userMessage.style.color = '#007ff';
    chatBox.appendChild(userMessage);

    const botMessage = document.createElement('div');
      botMessage.textContent = `Bot: ${response}` ;
      botMessage.style.color = '#dc3545';
      chatBox.appendChild(botMessage);

      chatBox.scrollTop = chatBox.scrollHeight;
}

//Eventlistener for send button

sendBtn.addEventListener('click', () =>
{
    const userInputValue = userInput.value.trim();
    if(userInputValue !== ' ')
    {
        const response = getResponse(userInputValue);
        displayMessage(userInputValue, response);
        userInput.value =' ';
    }
})

//enter key
document.addEventListener('keypress', (e) =>
{
    if(e.key === 'Enter'){
        sendBtn.click();
    }
});
