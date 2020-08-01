function startNewGame () {
  pointText.style.display = "block"
  new Planet(planets[0], 300, Math.random() * 400, 80, 80)
  player = new SpaceShip("./assets/spaceShip.png", 30, 200)

  // ノーマル敵の描画
  setInterval(() => {
    enemies.push(new Enemy("./assets/monster_normal.png", 400, Math.random() * 300, 0))      
  }, 1000)

  // スペシャル敵の描画
  setInterval(() => {
    enemies.push(new Enemy("./assets/monster_special.png", 400, Math.random() * 300, 2))      
  }, 15000)
  
  // ランダムな惑星を描画
  setInterval(() => {
    let index = Math.floor(Math.random() * 5)
    new Planet(planets[index], 500, Math.random() * 450, 80, 80)
  }, 50000)
  
  // 画面をアップデート
  setInterval(() => updateScreen(), 10)
}

function showMenu() {
  let intervalFunctions = [drawMenuTexts, updateScreen]
  let intervalIndex = 0
  
  // メニュー画面をぴこぴこさせる
  setInterval(() => {
    if (!gameStart && !gameOver) {
      drawGameObjects()
      intervalFunctions[intervalIndex++ % intervalFunctions.length]()
    }
  }, 500)
}

// メインループ
function updateScreen() {
  gameScreenCtx.fillStyle = "#0C2659"
  gameScreenCtx.fillRect(0, 0, 440, 440)
  
  if (!gameStart && !gameOver) {
    // ゲームメニュー画面の描画
    titleText.drawText()
    toyomomoText.drawText()
  }

  if (gameStart && !gameOver) {
    // オブジェクトの描画
    drawGameObjects()
    drawPointTextObjects()
    sliceShotBombs()
  }

  if (gameStart && gameOver) {
    // ゲームオーバー画面の描画
    gameOverText.drawText()
    playAgainText.drawText()
  }
}
