const sharp = require('sharp');

const red = { r: 255, g: 0, b: 0, alpha: 0.5 };
const green = { r: 0, g: 255, b: 0, alpha: 0.5 };
const blue = { r: 0, g: 0, b: 255, alpha: 0.5 };

const redRect = {
    create: {
        width: 80,
        height: 60,
        channels: 4,
        background: red
    }
};
    
const greenRect = {
    create: {
        width: 40,
        height: 40,
        channels: 4,
        background: green
    }
};

const blueRect = {
    create: {
        width: 60,
        height: 40,
        channels: 4,
        background: blue
    }
};

sharp(redRect)
    .composite([{
        input: blueRect,
        gravity: 'northeast'
    }, {
        input: greenRect,
        gravity: 'southwest'
    }])
    .toFile('test.png');