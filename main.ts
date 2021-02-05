input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (Score))
})
let Mauvaise_réponse = 0
let Bonne_réponse = 0
let Score = 0
Score = 0
let Question = 0
basic.showString("Quiz math")
basic.pause(100)
basic.showAnimation(`
. . . . .
. # . # .
. . . . .
. # # # .
. . . . .
`)
basic.pause(0.01)
basic.showAnimation(`
. . . . .
. # . # .
. . . . .
# # # # #
. . . . .
`)
basic.pause(0.01)
basic.showAnimation(`
. . . . .
. # . # .
. # . # .
. # # # .
. . . . .
`)
basic.pause(0.01)
basic.showAnimation(`
. . . . .
. # . # .
# . . . #
. # # # .
. . . . .
`)
basic.pause(0.01)
basic.showAnimation(`
. . . . .
. # . # .
. . . . .
#. . . #
. # # # .
`)
Question += 1
for (let index = 0; index < 1; index++) {
    Bonne_réponse = 0
    Mauvaise_réponse = 0
    basic.showString("Question 1, 1*1=2")
    basic.pause(100)
    basic.showString("A: vrai, B: Faux")
}
while (Bonne_réponse == 0 && Mauvaise_réponse == 0) {
    if (input.buttonIsPressed(Button.B)) {
        Bonne_réponse += 1
        Question += 1
    }
    if (input.buttonIsPressed(Button.A)) {
        Mauvaise_réponse += 1
        Question += 1
    }
}
basic.forever(function () {
    if (Bonne_réponse == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showString("Bonne reponse ")
        Bonne_réponse += -1
        Score += 100
    }
    if (Mauvaise_réponse == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.showString("Mauvaise réponse")
        Mauvaise_réponse += -1
    }
})
