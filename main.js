const body = document.body;
const app = document.createElement("div");

app.innerHTML = `
<div class="chat">
    <h1>聊天室</h1>
    <div>

    </div>
    <input type="text">
    <button class="button">送出</button>
</div>
`

const button = app.querySelector("button");
const input = app.querySelector("input")
body.appendChild(app);

button.addEventListener("click", () =>
{
  console.log(input.value)
});