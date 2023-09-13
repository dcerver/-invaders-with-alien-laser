input.onButtonPressed(Button.A, function () {
    Ship.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P2, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    Laser = game.createSprite(Ship.get(LedSpriteProperty.X), 4)
    music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    for (let index = 0; index < 5; index++) {
        basic.pause(100)
        Laser.change(LedSpriteProperty.Y, -1)
        if (Laser.isTouching(Alien) || Laser.isTouching(Alien_laser)) {
            game.addScore(1)
            Laser.delete()
            Alien_laser.delete()
            Alien.delete()
        }
    }
    Laser.delete()
})
input.onButtonPressed(Button.B, function () {
    Ship.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
let Alien_laser: game.LedSprite = null
let Alien: game.LedSprite = null
let Laser: game.LedSprite = null
let Ship: game.LedSprite = null
Ship = game.createSprite(2, 4)
game.startCountdown(60000)
game.setScore(0)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
basic.forever(function () {
    Alien = game.createSprite(randint(0, 4), 0)
    Alien_laser = game.createSprite(Alien.get(LedSpriteProperty.X), Alien.get(LedSpriteProperty.Y))
    Alien.change(LedSpriteProperty.Brightness, 50)
    music.play(music.createSoundExpression(WaveShape.Noise, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        Alien_laser.change(LedSpriteProperty.Y, 1)
    }
    if (Alien_laser.isTouching(Ship)) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
        game.gameOver()
    }
    Alien_laser.delete()
    Alien.delete()
})
basic.forever(function () {
	
})
