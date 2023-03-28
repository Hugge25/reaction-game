basic.forever(function () {
    basic.pause(randint(4000, 6000))
    pins.digitalWritePin(DigitalPin.P0, 1)
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
            break;
        } else if (input.buttonIsPressed(Button.B)) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
            break;
        } else {
        	
        }
    }
})
