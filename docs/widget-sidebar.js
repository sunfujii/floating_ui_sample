(() => {
  const CHAT_URL = "https://sunfujii.github.io/floating_ui_sample/chat_simple.html";

  // ページ全体をラップする要素を作る
  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.height = "100vh";
  wrapper.style.margin = "0";
  wrapper.style.padding = "0";

  // 元々のbody内容を main-content に移す
  const mainContent = document.createElement("div");
  mainContent.style.flex = "1";
  mainContent.style.overflowY = "auto";
  mainContent.style.background = "#fafafa";
  mainContent.innerHTML = document.body.innerHTML;

  // サイドバーを生成
  const sidebar = document.createElement("div");
  sidebar.id = "chat-sidebar";
  sidebar.style.width = "400px";
  sidebar.style.borderLeft = "1px solid #ddd";
  sidebar.style.background = "#fff";
  sidebar.style.display = "flex";
  sidebar.style.flexDirection = "column";
  sidebar.style.height = "100vh";
  sidebar.style.position = "sticky";
  sidebar.style.top = "0";
  sidebar.style.boxShadow = "-2px 0 5px rgba(0,0,0,0.1)";

  // iframeでチャットを埋め込む
  const iframe = document.createElement("iframe");
  iframe.src = CHAT_URL;
  iframe.style.flex = "1";
  iframe.style.border = "none";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  sidebar.appendChild(iframe);

  // bodyの中身を置き換え
  document.body.innerHTML = "";
  document.body.style.margin = "0";
  document.body.appendChild(wrapper);

  // mainContentとsidebarをラップ内に追加
  wrapper.appendChild(mainContent);
  wrapper.appendChild(sidebar);
})();
