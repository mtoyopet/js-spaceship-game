class textObject {
  constructor (fontSize, color, text, posX, posY) {
    this.fontSize = fontSize
    this.color = color
    this.text = text
    this.position = new Position(posX, posY);
    this.counter = 0
  }

  drawText() {
    gameScreenCtx.font = `${this.fontSize}px "${fontName}"`;
    gameScreenCtx.fillStyle = `${this.color}` 
    gameScreenCtx.fillText(this.text, this.position.x, this.position.y);  
  }

  showPointText() {
    this.position.y = this.position.y -0.1
    gameScreenCtx.font = `${this.fontSize}px "${fontName}"`;
    gameScreenCtx.fillStyle = `${this.color}` 
    gameScreenCtx.fillText(this.text, this.position.x + 20, this.position.y);    
  }
}