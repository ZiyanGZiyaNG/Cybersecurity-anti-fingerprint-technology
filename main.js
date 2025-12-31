const body = document.body;
const app = document.createElement("div");


app.innerHTML = `
<div>
    <h1>聊天室</h1>
    <div>
      <!-- 這裡之後放訊息 -->
    </div>
    <input type="text">
    <button>送出</button>
  </div>
`

body.appendChild(app);