// widget.js
(function() {
  // チャットボックスが既に存在する場合は重複を防止
  if (document.getElementById('my-floating-chat')) return;

  // スタイルを追加
  const style = document.createElement('style');
  style.textContent = `
    #my-floating-chat {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #007bff;
      color: white;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      z-index: 9999;
      transition: transform 0.2s ease;
    }
    #my-floating-chat:hover {
      transform: scale(1.1);
    }
    #chat-window {
      position: fixed;
      bottom: 100px;
      right: 20px;
      width: 300px;
      height: 400px;
      background: white;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
      display: none;
      flex-direction: column;
      overflow: hidden;
      z-index: 9999;
    }
    #chat-header {
      background: #007bff;
      color: white;
      padding: 10px;
      font-weight: bold;
    }
    #chat-body {
      flex: 1;
      padding: 10px;
      overflow-y: auto;
    }
  `;
  document.head.appendChild(style);

  // チャットボタンを生成
  const button = document.createElement('div');
  button.id = 'my-floating-chat';
  button.textContent = '💬';
  document.body.appendChild(button);

  // チャットウィンドウを生成
  const chatWindow = document.createElement('div');
  chatWindow.id = 'chat-window';
  chatWindow.innerHTML = `
    <div id="chat-header">サポートチャット</div>
    <div id="chat-body">こんにちは！ご質問はありますか？</div>
  `;
  document.body.appendChild(chatWindow);

  // ボタンをクリックすると表示/非表示を切り替え
  button.addEventListener('click', () => {
    chatWindow.style.display = 
      chatWindow.style.display === 'none' || chatWindow.style.display === '' 
      ? 'flex' 
      : 'none';
  });
})();