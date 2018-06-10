const express = require("express")
const app = express();

// body-parserとかをいれないとPOSTをとれないのでそこらへんはする

// publicをstaticフォルダとする
app.use(express.static("public"))

// routing
app.get("*", (req, res) => {
  res.sendfile("views/index.html")
})

// PORT周りは好きなようにいい感じに！w
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`listen on http://localhost:${PORT}`)
})

/**
 * react routerを使うのであれば
 * const router = [
 *   { path: "/", component: Index },
 *   { path: "/hoge", component: Hoge }
 * ]
 * みたいなのを作って、expressのapp.get()を
 * app.get(router.map(r => r.path)) とかにするとルーティングされてないルートはexpressのnot foundになるので、そこでハンドリングする
 */