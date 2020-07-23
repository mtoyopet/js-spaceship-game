class Explosion extends GameObject {
  constructor(posX, posY){
    super(explosionImages[0], posX, posY)
    this.dead = false
    this.count = -1
    this.counter = 0
  }

  explode(callback) {
    let explosion = this
    changeExplosionImage();

    function changeExplosionImage() {
      // 爆発画像を順に表示させる
      explosion.count++;
      explosion.counter ++;      
      if (explosion.count == explosionImages.length) { explosion.count = 0; }
      explosion.image.src = explosionImages[explosion.count];
      setTimeout(changeExplosionImage, 80);

      if (explosion.counter >= 8)  {
        explosion.dead = true

        if (callback !== undefined) {
          callback()
        }    
      }
    };
  }
}