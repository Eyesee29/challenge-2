input.onButtonPressed(Button.A, function () {
    counter += 1
    basic.showNumber(counter)
})
input.onButtonPressed(Button.AB, function () {
    if (state == x2) {
        x2 = counter
        basic.showString("X2")
        basic.showNumber(x2)
        state = y1
        counter = 0
    } else if (state == y1) {
        y1 = counter
        basic.showString("Y1")
        basic.showNumber(y1)
        state = y2
        counter = 0
    } else if (state == y2) {
        y2 = counter
        basic.showString("Y2")
        basic.showNumber(y2)
        basic.showString("X1")
        basic.showNumber(x1)
        basic.showString("X2")
        basic.showNumber(x2)
        basic.showString("Y1")
        basic.showNumber(y1)
        basic.showString("Y2")
        basic.showNumber(y2)
        m = (y2 - y1) / (x2 - x1)
        basic.showNumber((y2 - y1) / (x2 - x1))
        basic.showString("m")
        basic.showNumber(m)
        x = randint(0, 100)
        basic.showString("x")
        basic.showNumber(x)
        b = y1 / (m - x)
        basic.showNumber(y1 / (m - x))
        basic.showString("b")
        basic.showNumber(b)
        Y = b + m * x
        basic.showNumber(b + m * x)
        basic.showString("y")
        basic.showNumber(Y)
    } else {
        x1 = counter
        basic.showNumber(x1)
        state = x2
        counter = 0
    }
})
input.onButtonPressed(Button.B, function () {
    counter += -1
    basic.showNumber(counter)
})
let Y = 0
let b = 0
let x = 0
let m = 0
let x1 = 0
let y2 = 0
let y1 = 0
let x2 = 0
let state = 0
let counter = 0
basic.showString("Yara, Issy & Anastasie")
basic.showString("X1?")
basic.forever(function () {
	
})
