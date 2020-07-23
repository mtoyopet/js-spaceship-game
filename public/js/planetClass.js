// 惑星オブジェクト
class Planet extends GameObject {
  constructor(src, posX, posY, call, width, height) {
    super(src, posX, posY, width, height)

    setInterval(() => {
      this.position.x -= 1
    }, 200)
  }
}
