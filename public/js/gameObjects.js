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
      this.explode()
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

  explode() {
    shootBombs.forEach(element => {
      let distX = element.position.x - this.position.x 
      let distY = element.position.y - this.position.y

      if ((distX < 28 && distX > -28) && (distY < 28 && distY > -28) && (!this.hit) && (!this.dead)) {
        let indexOfBomb = shootBombs.indexOf(element)
        shootBombs.splice(indexOfBomb, 1)

        element.dead = true
        this.hit = true
        getPoint();
        let count = -1
        let counter = 0
        let that = this;
        bombObject();

        function bombObject() {
          count++;
          counter ++;
          if (count == shootBombsImages.length) count = 0;
          that.image.src = shootBombsImages[count];
          setTimeout(bombObject, 80);

          if (counter >= 8)  {
            that.dead = true
          }
        };
      }
    })    
  }
}

// 爆弾オブジェクト
class Bomb extends GameObject {
  constructor(src, posX, posY, call){
    super(src, posX, posY, 64, 48)
    this.dead = false
    this.bombLife = 400
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