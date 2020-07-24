// メインループ
function updateScreen() {
  gameScreenCtx.fillStyle = "#0C2659"
  gameScreenCtx.fillRect(0, 0, 440, 440)
  
  if (!gameStart && !gameOver) {
    titleText.drawText()
    toyomomoText.drawText()
  }

  if (gameStart && !gameOver) {
    // オブジェクトの描画
    drawGameObjects()
  }

  // ゲームオーバー画面
  if (gameStart && gameOver) {
    gameOverText.drawText()
  }
}

function drawGameObjects() {
  gameObjects.forEach(element => {
    if (!element.dead) {
      element.update()
    }
  });
}

function keyPressed(event){
  var x = event.keyCode;

  // ゲームが始まっていない状態でスペースキー以外が押された場合
  if (!gameStart && !gameOver && x !== spaceKey) { return }

  // ゲームが始まっていない状態でスペースキーが押された場合
  if (!gameStart && !gameOver && x === spaceKey) {
    gameStart = true
    return startNewGame()
  }

  // 上方向
  if (x === upKey) {
    if (player.position.y <= 0) return player.position.y = 0
    player.position.y -= 20
  }
  // 下方向
  if (x === downKey) {
    if (player.position.y >= 380) return player.position.y = 380
    player.position.y += 20
  }
  // スペースキーが押されたら爆弾を発射する
  if (x === spaceKey) {
    shotBombs.push(new Bomb("./assets/fire_blue.png", player.position.x + 45, player.position.y + 15))
  }
}

function incrementPoint(num) {
  point += num
  pointCounter.innerHTML = point
}

function endGame() {
  gameOver = true
}