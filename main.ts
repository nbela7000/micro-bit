radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("gyorsulás", input.acceleration(Dimension.Y))
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("A", 1)
        led.plot(0, 0)
    } else if (false) {
        radio.sendValue("A", 0)
        led.unplot(0, 0)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("B", 1)
        led.plot(4, 0)
    } else {
        radio.sendValue("B", 0)
        led.unplot(4, 0)
    }
})
