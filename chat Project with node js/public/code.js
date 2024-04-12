

const app = document.querySelector(".app");
const socket = io();
const button = document.querySelector("#join-user");
const sendmsg = document.querySelector("#send-message");
const inputText = document.querySelector("#message-input");
const UserInputText = document.querySelector("#Username");

let uname;

function UserInput() {
    // console.log("Button clicked!");
    let usernameInput = app.querySelector(".join-screen #Username");
    let username = usernameInput ? usernameInput.value : '';

    if (username.length == 0) {
        return;
    }
    socket.emit("newuser", username);
    uname = username;
    app.querySelector(".join-screen").classList.remove("active");
    app.querySelector(".chat-screen").classList.add("active");

    // console.log('clicked');
};

button.addEventListener("click", function () {

    UserInput();

})

UserInputText.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        UserInput();
    }

});

function Inputmsg() {
    let message = app.querySelector(".chat-screen #message-input").value;

    if (message.length == 0) {
        return;
    }
    renderMessage("my", {
        username: uname,
        text: message
    });

    socket.emit("chat", {
        username: uname,
        text: message
    });

    console.log(message);
    app.querySelector(".chat-screen #message-input").value = "";

};

sendmsg.addEventListener("click", function () {

    Inputmsg();
});

inputText.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        Inputmsg();
    }
});



app.querySelector(".chat-screen #exit-chat").addEventListener("click", function () {
    socket.emit("exituser", uname);
    window.location.href = window.location.href;
})

socket.on("update", function (update) {
    renderMessage("update", update)
})

socket.on("chat", function (message) {
    renderMessage("other", message);
    // console.log('other message sender');

})

function renderMessage(type, message) {
    let messageContainer = app.querySelector(".chat-screen .messages");


     


    if (type == "my") {

        let el = document.createElement("div");
        el.setAttribute("class", "message my-message");
        el.innerHTML = `
        <div>
        <div class="text">${message.text}</div>
        <button onClick={() => editMessage(message.id)}>Edit</button>
        <button onClick={() => deleteMessage(message.id)}>Delete</button>
        </div>`;

        // <button onClick = {btn()} >BTN</button>

        messageContainer.appendChild(el);
    }
    else if (type == "other") {
        let el = document.createElement("div");
        el.setAttribute("class", "message other-message");
        el.innerHTML =
            `<div class = "Other-Messages">
             
        <div class="name">message by ${message.username}</div>
         <div class="text">${message.text}</div>
          
             </div>`;

        messageContainer.appendChild(el);

    }
    else if (type == "update") {
        let el = document.createElement("div");
        el.setAttribute("class", "update");
        el.innerText = message;
        messageContainer.appendChild(el);
    }

    messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
}

// ------------------------------------------------------------------------

