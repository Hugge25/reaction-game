radio.onReceivedNumber(function (receivedNumber) {
    basic.pause(randint(4000, 6000))
    pins.digitalWritePin(DigitalPin.P0, 1)
    while (Player_1 != 5 || Player_2 != 5) {
        if (receivedNumber == 0) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
            Player_1 += 1
            led.toggle(0, Player_1 - 1)
            break;
        } else if (receivedNumber == 1) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
            Player_2 += 1
            led.toggle(4, Player_2 - 1)
            break;
        }
    }
    if (Player_1 == 5) {
        basic.showNumber(1)
    } else if (Player_2 == 5) {
        basic.showNumber(2)
    }
})
let Player_2 = 0
let Player_1 = 0
radio.setGroup(2)
