class Player {
  constructor(col, row) {
    this.col = col,
      this.row = row,
      this.orientation = 'down',
      this.orientations = ['up', 'down', 'left', 'right'],
      this.orientationsImages = {}

  }

  moveUp() {
    this.orientation = 'up'
    if (this.row !== 0) {
      this.row--
    }
  }

  moveDown() {
    this.orientation = 'down'
    if (this.row !== 9) {
      this.row++
    }
  }

  moveLeft() {
    this.orientation = 'left'
    if (this.col !== 0) {
      this.col--
    }
  }

  moveRight() {
    this.orientation = 'right'
    if (this.col !== 9) {
      this.col++
    }
  }

  setup() {
    this.orientationsImages = this.orientations.reduce((acc, val) => {
      return acc = {
        ...acc,
        [val]: loadImage(`assets/character-${val}.png`)
      }
    }, {})
  }

  draw() {
    image(this.orientationsImages[this.orientation], this.col * 50, this.row * 50, 50, 50)

  }

  keyPressed() {
    if (keyCode === LEFT_ARROW) {
      this.moveLeft()
    } else if (keyCode === RIGHT_ARROW) {
      this.moveRight()
    } else if (keyCode === UP_ARROW) {
      this.moveUp()
    } else if (keyCode === DOWN_ARROW) {
      this.moveDown()
    }
  }

}