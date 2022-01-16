# Group60 
# HTTP Help Them To Pick
# 組員
    B08505005   李紘瑜 工海三 (組長) 
    B08705007   林又昕 資管三  
    B10611050   陳祐瑋 生機一

# Demo 影片連結:

# 描述這個服務在做什麼
有鑑於許多大學生常有午餐選擇障礙、晚餐選擇障礙......，團隊開發 H.T.T.P. Help Them To Pick 服務，讓使用者可加入、收藏、搜尋餐廳，並將符合今天胃口的餐廳放進待選清單中，讓系統為使用者選擇要吃什麼。


# Deployed 連結 
https://helpthemtopick.herokuapp.com/

# Github link 
    (請不要給成你的 private wp1101 repo <= 別人看不到)
    (Optional, 如果你有另外建立一個開源的 repo) 

其他說明

# 使用與參考之框架/模組/原始碼
### 前端介面: 
* React.js
* session.storage render參考原始碼：https://javascript.plainenglish.io/connecting-react-with-localstorage-ad590d4e4fa1
* material UI、react-bootstrap
### 後端介面:
* node.js
### 前後端串接：
* GraphQL
### database：
* mongodb


# 專題製作心得

林又昕：


# 如何在 localhost 安裝與測試之詳細步驟

<!-- 請務必詳述，包含：基本的 yarn/npm 指令，後端如果使用其他語言所需要之安裝環境說明，資料庫串接與資料匯入方式，登入之帳密 (if needed)… 等。 -->

* 前端環境架設：
在 terminal 輸入指令
```
cd frontend
yarn install
```
至 frontend/src/index.js 中，將19、24、30行註解掉，並將 20、25、31 解註解 (由於上傳為最終打包檔案，若要 run 在本地後端，需做此動作)


* 後端環境架設：
在 terminal 輸入指令
```
cd backend
yarn install
```
接著至 backend 中按 .env.default 新增 .env

* 開啟後端
在 terminal 輸入指令
```
cd backend
yarn start
```

* 開啟前端
在 terminal 輸入指令
```
cd frontend
yarn start
```








