class TitleScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'TitleScene'
    })
  }
  preload() {
    this.load.image('logo', 'assets/sprites/logo.png')
    this.load.image('play', 'assets/sprites/play.png')
    this.load.image('background1', 'assets/background/plx-1.png')
    this.load.image('background2', 'assets/background/plx-2.png')
    this.load.image('background3', 'assets/background/plx-3.png')
    this.load.image('background4', 'assets/background/plx-4.png')
    this.load.image('background5', 'assets/background/plx-5.png')
    this.load.image('platform', 'assets/background/platform.png')
  }
  create() {
    this.background1 = this.add.tileSprite(400, 300, 800, 600, 'background1')
    this.background2 = this.add.tileSprite(400, 300, 800, 600, 'background2')
    this.background3 = this.add.tileSprite(400, 300, 800, 600, 'background3')
    this.background4 = this.add.tileSprite(400, 300, 800, 600, 'background4')
    this.background5 = this.add.tileSprite(400, 300, 800, 600, 'background5')

    this.ground = this.add.tileSprite(400, 568, 800, 100, 'platform')
    this.physics.add.existing(this.ground)
    this.ground.body.immovable = true
    this.ground.body.moves = false

    this.logo = this.add.image(400, 180, 'logo')
    this.logo.setScale(1.5)

    let play = this.add.image(400, 400, 'play')
    play.setScale(4)
    play.setInteractive()
    play.on('pointerdown', () => this.scene.start('GameScene'))
    play.on('pointerover', () => play.setTint(0xcccccc))
    play.on('pointerout', () => play.setTint(0xffffff))
  }

  update() {
    this.background1.tilePositionX += 10
    this.background2.tilePositionX += 10
    this.background3.tilePositionX += 10
    this.background4.tilePositionX += 10
    this.background5.tilePositionX += 10
    this.ground.tilePositionX += 10
  }
}

export default TitleScene
