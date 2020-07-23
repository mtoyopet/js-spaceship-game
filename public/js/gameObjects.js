class GameObject {
  constructor(src, posX, posY, width=64, height=64){
    this.image = new Image();
    this.image.src = src;
    this.position = new Position(posX, posY);
    this.size = new Size(width, height);

    gameObjects.push(this)
  }
  update(event) {
    gameScreenCtx.drawImage(this.image, this.position.x, this.position.y, this.size.width, this.size.height)
  }
  setImage(src) {
    this.image.src = src
  }
  setPosition(posX, posY) {
    this.position.x = posX
    this.position.y = posY 
  }
}

// プレーヤーオブジェクト
class Player extends GameObject {
  constructor(src, posX, posY){
    super(src, posX, posY, 64, 48)
  }
}

// 宇宙船オブジェクト
class SpaceShip extends GameObject {
  constructor(src, posX, posY){
    super(src, posX, posY, 64, 64)
  }
}

// 敵オブジェクト
class Enemy extends GameObject {
  constructor(src, posX, posY){
    super(src, posX, posY, 64, 64)
    this.hit = false
    this.dead = false
    this.moveSpeed = 3 + (Math.random() * 15); 
  
    setInterval(() => { 
      if (!this.hit) { this.move() }
      this.checkHit(this)
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

  checkHit(enemy) {
    shotBombs.forEach(shootBomb => {
      let distX = shootBomb.position.x - enemy.position.x 
      let distY = shootBomb.position.y - enemy.position.y

      if ((distX < 28 && distX > -28) && (distY < 28 && distY > -28) && (!this.hit) && (!this.dead)) {
        enemy.dead = true
        shootBomb.dead = true
        enemy.hit = true
        let indexOfBomb = shotBombs.indexOf(shootBomb)
        new Explosion(enemy.position.x, enemy.position.y).explode(indexOfBomb)
        getPoint();
      }
    })
  }
}

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
}

// 惑星オブジェクト
class Star extends GameObject {
  constructor(src, posX, posY, call, width, height) {
    super(src, posX, posY, width, height)

    setInterval(() => {
      this.position.x -= 1
    }, 200)
  }
}

class Position {
  constructor (posX, posY) {
    this.x = posX
    this.y = posY
  }
}

class Size {
  constructor (width, height) {
    this.width = width
    this.height = height
  }
}