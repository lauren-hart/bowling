//reference to the code we intend to
//test
const game = require('../game')

//TEST SETUP

test('testEnvironment', function() {
    expect(true).toBeTruthy()
})

//TEST GUTTERBALL

test('scores a gutterball', function() {
    //arrange all necessary preconditions and inputs
    const frame = [0, 0]
    const expected = 0
    //act on the object or method under test
    const actual = game.scoreNormal(frame)
    //assert that the expected results have occurred
    expect(actual).toBe(expected)
})

//TEST NORMAL FRAME

test('scores a normal frame', function() {
    //arrange
    const frame = [3, 4]
    const expected = 7
    //act
    const actual = game.scoreNormal(frame)
    //assert
    expect(actual).toBe(expected)
})

//TEST SPARE FRAME

test('scores a spare', function() {
    //arrange
    const frame = [5, 5]
    const nextFrame = [3, 4]
    const expected = 13
    //act
    const actual = game.scoreSpare(frame, nextFrame)
    //assert
    expect(actual).toBe(expected)
})

//TEST STRIKE

test('scores a strike', function() {
    //arrange
    const frame = [10, 0]
    const nextFrame = [3, 4]
    const expected = 17
    //act
    const actual = game.scoreStrike(frame, nextFrame)
    //assert
    expect(actual).toBe(expected)
})

//TEST DOUBLE STRIKE

test('scores a double strike', function() {
    //arrange
    const frame = [10, 0]
    const nextFrame = [10, 0]
    const thirdFrame = [5, 2]
    const expected = 25
    //act
    const actual = game.scoreDoubleStrike(frame, nextFrame, thirdFrame) 
    //assert
    expect(actual).toBe(expected)
})

//SCORE THE WHOLE GAME

test('score the whole game', function() {
    //assert
    //const score = [[1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]]
    const score = [[1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2]]
    const expected = 30
    //act
    const actual = game.scoreGame(score)
    //assert
    expect(actual).toBe(expected)

})

