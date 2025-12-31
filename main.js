const body = document.body;
const app = document.createElement("div");

app.innerHTML = `
<div class="chat">
    <h1>聊天室</h1>
    <div class="message"></div>
    <input type="text">
    <button class="button">送出</button>
</div>
`

body.appendChild(app);


const button = app.querySelector("button");
const input = app.querySelector("input")
const message = app.querySelector(".message")

button.addEventListener("click", () =>
{
  const msg = document.createElement("p");
  msg.innerText = input.value;
  message.appendChild(msg);

  input.value = "";
});

