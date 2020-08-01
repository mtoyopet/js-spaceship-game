// 敵オブジェクト
class Enemy extends GameObject {
  constructor(src, posX, posY, hp, width=64, height=64, moveSpeed=8){
    super(src, posX, posY, width, height)
    this.point = src === "./assets/monster_normal.png" ? 1 : 5
    this.hit = false
    this.stop = false
    this.moveSpeed = moveSpeed + (Math.random() * 15);
    this.hp = hp

    setInterval(() => { 
      if (!this.hit && !this.stop) { this.move() }
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

  // 爆弾に当たったかチェックする
  checkHit() {
    if (gameStart && !gameOver){
      shotBombs.forEach(shootBomb => {
        let distX = shootBomb.position.x - this.position.x 
        let distY = shootBomb.position.y - this.position.y

        if ((distX < 35 && distX > -35) && (distY < 35 && distY > -35) && (!this.hit) && (!this.dead)) {
          if (this.hp <= 0 && !this.stop) {
            this.die()
            shootBomb.explode(shootBomb)
            pointUp(this.point, this.position.x, this.position.y)
            new Explosion(this.position.x, this.position.y).explode()
  
            incrementPoint(this.point);
          } else {
            this.reduceHP()
            shootBomb.explode(shootBomb)
          }
        }
      })
    }
  }

  die () {
    this.dead = true
    this.hit = true
    enemies.splice(enemies.indexOf(this), 1)
  }

  reduceHP () {
    this.stop = true
    this.hp -= 1

    if (this.hp >= 0) {
      let icon = new Icon("./assets/ouch.png", this.position.x - 4, this.position.y - 4)
      setTimeout(() => {
        icon.dead = true
      }, 300)
    }

    setTimeout(() => {
      this.stop = false
    }, 500)
  }
}