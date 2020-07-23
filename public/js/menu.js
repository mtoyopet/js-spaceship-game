function startNewGame () {
  pointText.style.display = "block";
  player = new SpaceShip("./assets/spaceShip.png", 30, 200)
  // 敵の描画
  setInterval(() => {
    enemies.push(new Enemy(`./assets/monster05.png`, 400, Math.random() * 300))      
  }, 1000)

  // ランダムに惑星を描画
  setInterval(() => {
    let index = Math.floor(Math.random() * 5)
    new Planet(planets[index], 500, Math.random() * 450, 52, 64)
  }, 50000)
  
  // 画面をアップデート
  setInterval(() => updateScreen(), 10)
}

function menuText() {
  titleText.drawText()
  toyomomoText.drawText()
  startGameText.drawText()
}

function showMenu() {
  let intervalFunctions = [menuText, updateScreen];
  let intervalIndex = 0;
  
  setInterval(() => {
    if (!gameStart && !gameOver) {
      intervalFunctions[intervalIndex++ % intervalFunctions.length]();
    }
  }, 500);
}
