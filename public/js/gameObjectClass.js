class GameObject {
  constructor(src, posX, posY, width=64, height=64){
    this.image = new Image();
    this.image.src = src;
    this.position = new Position(posX, posY);
    this.size = new Size(width, height);

    gameObjects.push(this)
  }
  update() {
    gameScreenCtx.drawImage(this.image, this.position.x, this.position.y, this.size.width, this.size.height)
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