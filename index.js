const gkm = require('gkm');
const fs = require('fs');
const moment = require('moment');

function log(data) {
    console.log(data);
    fs.appendFile('log.txt', `${moment().format('YYYY-MM-DD HH:mm:ss')} ${data}\n`, (err) => {
        if (err) throw err;
    });
}

gkm.events.on('mouse.*', data => {
    const btn = data[0];
    switch (btn) {
        case "1":
            log('Left click');
            break;
        case "2":
            log('Right click');
            break;
        case "3":
            log('Middle click');
            break;
        case "4":
            log('Scroll up');
            break;
        case "5":
            log('Scroll down');
            break;
        default:
            log(btn);
    }
})
