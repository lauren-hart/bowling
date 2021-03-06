module.exports = {
    scoreNormal,
    scoreSpare,
    scoreStrike,
    scoreDoubleStrike,
    scoreGame
}
   

function scoreNormal (frame) {
    const frameScore = frame[0] + frame[1]
    return frameScore
}

function scoreSpare (frame, nextFrame) {
    const frameScore = frame[0] + frame[1]
    if (frameScore === 10 && frame[0] !== 10) {
        return frameScore + nextFrame[0]
    }
}

function scoreStrike (frame, nextFrame) {
    const frameScore = frame[0] + frame[1]
    if (frame[0] === 10 && nextFrame[0] + nextFrame[1]) {
        return frameScore + nextFrame[0] + nextFrame[1]
    }   
}

function scoreDoubleStrike (frame, nextFrame, thirdFrame) {
    const frameScore = frame[0] + frame[1]
    if (frame[0] === 10 && nextFrame[0] === 10) {
        return frameScore + nextFrame[0] + nextFrame[1] + thirdFrame[0]
    }
}

function scoreGame (score) {

    let gameScore = 0

    for (i = 0; i < score.length; i++) {
        if (score[i][0] === 10) {
            gameScore += scoreStrike(score[i], score[i + 1])
        }
        else if (score[i][0] + score[i][1] < 10) {
            gameScore += scoreNormal(score[i])   
        }
    } return gameScore
}
    
