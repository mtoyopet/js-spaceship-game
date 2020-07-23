// プレーヤーオブジェクト
class Player extends GameObject {
  constructor(src, posX, posY){
    super(src, posX, posY, 64, 48)
    this.dead = false

    // setInterval(() => { 
      console.log("enemies!!!!")
      if (this.dead) { return }
      this.checkHit()
    // }, 200)
  }

  checkHit() {
    enemies.forEach(enemy => {
      let distX = shootBomb.position.x - this.position.x 
      let distY = shootBomb.position.y - this.position.y

      if ((distX < 28 && distX > -28) && (distY < 28 && distY > -28) && (!this.hit) && (!this.dead)) {
        console.log("YES")
      }
    })
  }
}
