module.exports = {
    scoreFrame,
    scoreNormal
}


function scoreFrame (frame, nextFrame, thirdFrame) {
    const frameScore = frame[0] + frame[1]

    //if score a spare
    if (frameScore === 10 && frame[0] !== 10) {
        return frameScore + nextFrame[0]
    //if score a double strike
    } else if (frame[0] === 10 && nextFrame[0] === 10) {
    return frameScore + nextFrame[0] + nextFrame[1] + thirdFrame[0]
    //if score a strike
    } else if (frame[0] === 10 && nextFrame[0] + nextFrame[1]) {
        return frameScore + nextFrame[0] + nextFrame[1]
    //if score a normal frame
    } else {
        return frameScore
    }
}
 
function scoreNormal(frame) {
    return frameScore
}
