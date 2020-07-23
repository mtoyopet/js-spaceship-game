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