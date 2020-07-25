function startNewGame () {
  pointText.style.display = "block";
  new Planet(planets[0], 300, Math.random() * 400, 80, 80)
  player = new SpaceShip("./assets/spaceShip.png", 30, 200)

  // ノーマル敵の描画
  setInterval(() => {
    enemies.push(new Enemy("./assets/monster_normal.png", 400, Math.random() * 300))      
  }, 1000)

  // スペシャル敵の描画
  setInterval(() => {
    enemies.push(new Enemy("./assets/monster_special.png", 400, Math.random() * 300))      
  }, 15000)
  
  // ランダムに惑星を描画
  setInterval(() => {
    let index = Math.floor(Math.random() * 5)
    new Planet(planets[index], 500, Math.random() * 450, 80, 80)
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
  
  // メニュー画面をぴこぴこさせる
  setInterval(() => {
    if (!gameStart && !gameOver) {
      intervalFunctions[intervalIndex++ % intervalFunctions.length]();
    }
  }, 500);
}
