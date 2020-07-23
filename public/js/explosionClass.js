class Explosion extends GameObject {
  constructor(posX, posY){
    super(explosionImages[0], posX, posY)
    this.dead = false
    this.count = -1
    this.counter = 0
  }

  explode(index) {
    shootBombs.splice(index, 1)
    let explosion = this
    bombObject();

    function bombObject() {
      explosion.count++;
      explosion.counter ++;
      if (explosion.count == explosionImages.length) { explosion.count = 0; }
      explosion.image.src = explosionImages[explosion.count];
      setTimeout(bombObject, 80);

      if (explosion.counter >= 8)  {
        explosion.dead = true
      }
    };
  }
}