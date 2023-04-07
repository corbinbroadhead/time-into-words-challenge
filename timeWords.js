const timeWords = (time) => {
    let timeArr = time.split('');
    let solutionArr = [];
    if (+timeArr[0] === 0 && +timeArr[1] === 0 && +timeArr[3] === 0 && +timeArr[4] === 0) {
        return console.log('midnight');
    } else if (+timeArr[0] === 1 && +timeArr[1] === 2 && +timeArr[3] === 0 && +timeArr[4] === 0) {
        return console.log('noon');
    } else {
        if (+timeArr[1] === 1 && +timeArr[0] === 0 || +timeArr[1] === 3 && +timeArr[0] === 1) {
            solutionArr.push('one')
        } else if (+timeArr[1] === 2 && +timeArr[0] === 0 || +timeArr[1] === 4 && +timeArr[0] === 1) {
            solutionArr.push('two')
        } else if (+timeArr[1] === 3 && +timeArr[0] === 0 || +timeArr[1] === 5 && +timeArr[0] === 1) {
            solutionArr.push('three')
        } else if (+timeArr[1] === 4 && +timeArr[0] === 0 || +timeArr[1] === 6 && +timeArr[0] === 1) {
            solutionArr.push('four')
        } else if (+timeArr[1] === 5 && +timeArr[0] === 0 || +timeArr[1] === 7 && +timeArr[0] === 1) {
            solutionArr.push('five')
        } else if (+timeArr[1] === 6 && +timeArr[0] === 0 || +timeArr[1] === 8 && +timeArr[0] === 1) {
            solutionArr.push('six')
        } else if (+timeArr[1] === 7 && +timeArr[0] === 0 || +timeArr[1] === 9 && +timeArr[0] === 1) {
            solutionArr.push('seven')
        } else if (+timeArr[1] === 8 && +timeArr[0] === 0 || +timeArr[1] === 0 && +timeArr[0] === 2) {
            solutionArr.push('eight')
        } else if (+timeArr[1] === 9 && +timeArr[0] === 0 || +timeArr[1] === 1 && +timeArr[0] === 2) {
            solutionArr.push('nine')
        } else if (+timeArr[1] === 0 && +timeArr[0] === 1 || +timeArr[1] === 2 && +timeArr[0] === 2) {
            solutionArr.push('ten')
        } else if (+timeArr[1] === 1 && +timeArr[0] === 1 || +timeArr[1] === 3 && +timeArr[0] === 2) {
            solutionArr.push('eleven')
        } else if (+timeArr[1] === 2 && +timeArr[0] === 1 || +timeArr[1] === 0 && +timeArr[0] === 0) {
            solutionArr.push('twelve')
        }
        if (+timeArr[3] === 0) {
            solutionArr.push(' oh')
        } else if (+timeArr[3] === 2) {
            solutionArr.push(' twenty')
        } else if (+timeArr[3] === 3) {
            solutionArr.push(' thirty')
        } else if (+timeArr[3] === 4) {
            solutionArr.push(' forty')
        } else if (+timeArr[3] === 5) {
            solutionArr.push(' fifty')
        }
        if (+timeArr[3] === 0 && +timeArr[4] === 0) {
            solutionArr.push(" o'clock")
        } else if (+timeArr[3] === 1 && +timeArr[4] === 0) {
            solutionArr.push(' ten');
        } else if (+timeArr[3] === 1 && +timeArr[4] === 1) {
            solutionArr.push(' eleven');
        } else if (+timeArr[3] === 1 && +timeArr[4] === 2) {
            solutionArr.push(' twelve');
        } else if (+timeArr[3] === 1 && +timeArr[4] === 3) {
            solutionArr.push(' thirteen');
        } else if (+timeArr[3] === 1 && +timeArr[4] === 4) {
            solutionArr.push(' fourteen');
        } else if (+timeArr[3] === 1 && +timeArr[4] === 5) {
            solutionArr.push(' fifteen');
        } else if (+timeArr[3] === 1 && +timeArr[4] === 6) {
            solutionArr.push(' sixteen');
        } else if (+timeArr[3] === 1 && +timeArr[4] === 7) {
            solutionArr.push(' seventeen');
        } else if (+timeArr[3] === 1 && +timeArr[4] === 8) {
            solutionArr.push(' eighteen');
        } else if (+timeArr[3] === 1 && +timeArr[4] === 9) {
            solutionArr.push(' nineteen');
        } else if (+timeArr[4] === 1) {
            solutionArr.push(' one')
        } else if (+timeArr[4] === 2) {
            solutionArr.push(' two')
        } else if (+timeArr[4] === 3) {
            solutionArr.push(' three')
        } else if (+timeArr[4] === 4) {
            solutionArr.push(' four')
        } else if (+timeArr[4] === 5) {
            solutionArr.push(' five')
        } else if (+timeArr[4] === 6) {
            solutionArr.push(' six')
        } else if (+timeArr[4] === 7) {
            solutionArr.push(' seven')
        } else if (+timeArr[4] === 8) {
            solutionArr.push(' eight')
        } else if (+timeArr[4] === 9) {
            solutionArr.push(' nine')
        } 
        if (+timeArr[0] > 0 && +timeArr[1] > 1) {
            solutionArr.push(' pm')
        } else if (+timeArr[0] === 2) {
            solutionArr.push(' pm');
        } else {
            solutionArr.push(' am');
        }
        return console.log(solutionArr.join(''));
}
}

timeWords('18:33');
timeWords('05:12');
timeWords('00:08');
timeWords('20:00');
timeWords('00:00');
timeWords('12:00');