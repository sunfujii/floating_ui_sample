// widget-iframe.js
(function() {
  if (document.getElementById('my-floating-chat')) return;

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
    #chat-iframe-container {
      position: fixed;
      bottom: 100px;
      right: 20px;
      width: 350px;
      height: 500px;
      display: none;
      z-index: 9999;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
      border-radius: 10px;
      overflow: hidden;
    }
    #chat-iframe-container iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  `;
  document.head.appendChild(style);

  // チャットボタン
  const button = document.createElement('div');
  button.id = 'my-floating-chat';
  button.textContent = '💬';
  document.body.appendChild(button);

  // iframe コンテナ
  const container = document.createElement('div');
  container.id = 'chat-iframe-container';

  // 外部チャットURL（クエリや属性で動的に変更可能）
  const scriptTag = document.currentScript;
  const chatUrl = scriptTag.getAttribute('data-chat-url') || 'https://example.com/chat';

  const iframe = document.createElement('iframe');
  iframe.src = chatUrl;
  container.appendChild(iframe);
  document.body.appendChild(container);

  // クリックで開閉
  button.addEventListener('click', () => {
    const visible = container.style.display === 'flex';
    container.style.display = visible ? 'none' : 'flex';
  });
})();
