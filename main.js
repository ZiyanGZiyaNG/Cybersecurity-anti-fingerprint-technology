const body = document.body;
const app = document.createElement("div");

app.innerHTML = `
<div class="chat">
    <h1>聊天室</h1>
    <div>
      <!-- 這裡之後放訊息 -->
    </div>
    <input type="text">
    <button class="button">送出</button>
</div>
`

const button = app.querySelector("button");
body.appendChild(app);

button.addEventListener("click", () =>
{
  console.log("clicked");
});