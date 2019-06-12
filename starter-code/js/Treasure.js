class Treasure {
  constructor() {
    this.row = 0,
      this.col = 0
  }

  setup() {
    this.image = loadImage('assets/treasure.png')
    this.randomPosition()

  }

  randomPosition() {
    this.row = Math.round(random(0, 9))
    this.col = Math.round(random(0, 9))
  }

  isCollected(player) {
    if (player.row === this.row && player.col === this.col) {
      console.log('yes')
      this.randomPosition()
    }
  }

  draw() {
    image(this.image, this.col * 50, this.row * 50, 50, 50)
  }

}