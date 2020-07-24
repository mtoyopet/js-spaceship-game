// 宇宙船オブジェクト
class SpaceShip extends GameObject {
  constructor(src, posX, posY){
    super(src, posX, posY, 64, 64)
    this.dead = false

    setInterval(() => {
      this.checkHit()
    }, 200)
  }

  checkHit () {
    enemies.forEach(enemy => {
      let distX = enemy.position.x - this.position.x 
      let distY = enemy.position.y - this.position.y

      if ((distX < 28 && distX > -28) && (distY < 28 && distY > -28) && (!this.dead)) {
        this.dead = true
        new Explosion(this.position.x, this.position.y).explode(() => {
          gameOver = true     
        })
      }
    })
  }
}
