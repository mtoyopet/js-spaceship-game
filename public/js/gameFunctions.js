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
    drawPointTextObjects()
    sliceShotBombs()
  }

  if (gameStart && gameOver) {
    // ゲームオーバー画面
    gameOverText.drawText()
    playAgainText.drawText()
  }
}

function drawGameObjects() {
  gameObjects.forEach(object => {
    if (!object.dead) {
      object.update()
    }
  });
}

function drawPointTextObjects() {
  pointTextObjects.forEach(object => {
    if (object.counter <= 30) {
      object.showPointText()
      object.counter++
    } 
  })
}

function sliceShotBombs() {
  shotBombs.forEach(shotBomb => {
    if (shotBomb.position.x >= 450) {
      shotBomb.kill()
    }
  })
}

function keyPressed(event){
  var x = event.keyCode;

  if (!gameStart && !gameOver && x !== spaceKey) { 
    // ゲームが始まっていない状態でスペースキー以外が押された時
    return
  } else if (!gameStart && !gameOver && x === spaceKey) {
    // ゲームが始まっていない状態でスペースキーが押された時
    gameStart = true
    startNewGame()
  } else {
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
      if (shotBombs.length < 3) {
        shotBombs.push(new Bomb("./assets/fire_blue.png", player.position.x + 45, player.position.y + 15))
      }
    }
  }
}

function incrementPoint(num) {
  point += num
  pointCounter.innerHTML = point
}

function endGame() {
  gameOver = true
}

function pointUp(point, posX, posY) {
  pointTextObjects.push(new textObject(12, "#F0464A", `+${point}`, posX + 10, posY))
}