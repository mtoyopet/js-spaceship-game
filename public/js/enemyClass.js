// 敵オブジェクト
class Enemy extends GameObject {
  constructor(src, posX, posY){
    super(src, posX, posY, 64, 64)
    this.hit = false
    this.dead = false
    this.moveSpeed = 3 + (Math.random() * 15); 
  
    setInterval(() => { 
      if (!this.hit) { this.move() }
      this.checkHit()
    }, 200
  )}
  
  move() {
    this.position.x -= this.moveSpeed
    let topDownMoveNum =  Math.floor(Math.random() * 10);
    if ( topDownMoveNum % 2 ) {
      if (this.position.y >= 380) return this.position.y = 380
      this.position.y -= topDownMoveNum
    } else {
      if (this.position.y <= 0) return this.position.y = 0
      this.position.y += topDownMoveNum
    }
  }

  checkHit() {
    shotBombs.forEach(shootBomb => {
      let distX = shootBomb.position.x - this.position.x 
      let distY = shootBomb.position.y - this.position.y

      if ((distX < 28 && distX > -28) && (distY < 28 && distY > -28) && (!this.hit) && (!this.dead)) {
        
        this.kill()
        shootBomb.kill(shootBomb)
        new Explosion(this.position.x, this.position.y).explode()
        getPoint();
      }
    })
  }

  kill () {
    this.dead = true
    this.hit = true
    enemies.splice(enemies.indexOf(this), 1)
  }
}