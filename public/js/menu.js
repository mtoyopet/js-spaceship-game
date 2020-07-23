function startNewGame () {
  player = new SpaceShip("./assets/spaceShip.png", 30, 200)

  // ランダムに惑星を描画
  setInterval(() => {
    let index = Math.floor(Math.random() * 5)
    new Star(planets[index], 500, Math.random() * 500, 52, 64)
  }, 50000)

  // 敵の描画
  setInterval(() => {
    new Enemy(`./assets/monster05.png`, 400, Math.random() * 300)      
  }, 1000)

  // 画面をアップデート
  setInterval(() => updateScreen(), 10)
}

function menuText() {
  gameScreenCtx.font = `30px "${fontName}"`;
  gameScreenCtx.fillStyle = "orange" 
  gameScreenCtx.fillText('SPACE SHIP', 80, 100);

  gameScreenCtx.font = `13px "${fontName}"`;
  gameScreenCtx.fillStyle = "white" 
  gameScreenCtx.fillText("Press Enter to Start", 95, 320);

  gameScreenCtx.font = `10px "${fontName}"`;
  gameScreenCtx.fillStyle = "white" 
  gameScreenCtx.fillText("made by TOYOMOMO", 80, 120);
}

function showMenu () {
  let intervalFunctions = [menuText, updateScreen];
  let intervalIndex = 0;
  
  setInterval(() => {
    if (!gameStart) {
      intervalFunctions[intervalIndex++ % intervalFunctions.length]();
    }
  }, 1000);
}
