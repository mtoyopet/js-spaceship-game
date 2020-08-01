// 爆弾オブジェクト
class Bomb extends GameObject {
  constructor(src, posX, posY, call){
    super(src, posX, posY, 64, 48)
    this.dead = false
    this.shoot()
  }
  shoot() {
    this.intervalId = setInterval(function(obj) {
      obj.position.x += 10
    }, 33, this)
  }

  explode(self) {
    this.dead = true
    shotBombs.splice(shotBombs.indexOf(self), 1)
  }
}
