let distance_to_object = 0
basic.showIcon(IconNames.Yes)
basic.pause(500)
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.forever(function () {
    distance_to_object = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(distance_to_object)
    if (distance_to_object > 4) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (distance_to_object <= 4) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (distance_to_object <= 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
