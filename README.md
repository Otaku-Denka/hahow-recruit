## 開啟方法

- npm install
- npm run build
- npm run start

server up on http://localhost:3000

## 使用技術

- React
- Nextjs - SSR & code split
- next-bundle-analyzer - nextjs 官方出的分析工具，使用它將沒使用的 antd-icons 和 momentjs locale 移除
  進行性能優化如下圖
  減肥前
  <img src="https://imgur.com/iVWF7fI.png" width="973" height="557"/>
  減肥後
  <img src="https://imgur.com/bd6Dmuh.png" width="973" height="557"/>
- typescript - 型別定義
- koa - 使用 koa-router 製作動態路由，nextjs 本身未支援 params 路由
- tslint - 依照 airbnb 編碼規範，提高程式碼品質
