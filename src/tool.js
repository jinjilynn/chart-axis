export function getNum(num, fixed) {
    return Number(num.toFixed(fixed === undefined ? 6 : fixed));
}

export function getDigit(num) {
    let _digit = 1;
    if (Math.abs(num) >= 1) {
        while (Math.abs(num / _digit) >= 10) {
            _digit = _digit * 10;
        }
        return _digit;
    } else {
        while (Math.abs(num / _digit) <= 1) {
            _digit = _digit / 10;
        }
        return _digit;
    }

}

export function getTopByMax(maxnumber) {
    const max_digit = getDigit(maxnumber);
    const bigger_num = (Math.floor(maxnumber / max_digit) + 1) * max_digit;
    if (maxnumber > (bigger_num - max_digit / 2)) {
        return bigger_num;
    } else {
        return bigger_num - max_digit / 2
    }
}

export function getBottomByMin(minnumber) {
    const mindigit = getDigit(minnumber);
    const min = minnumber < 0 ? -mindigit * 10 : mindigit === 1 ? 0 : mindigit;
    return min;
}

export function generateYvalueByStepAndMax(array, max_num, step) {
    let _max_digit = getDigit(max_num);
    const values = [];
    const minValue = array.reduce(((s) => {
        if (getDigit(s) === _max_digit && (_max_digit / 10) * step > 1) {
            _max_digit = _max_digit / 10;
        }
        values.push(s);
        s = s - _max_digit * step;
        return s;
    }), max_num);
    return [
        minValue,
        values
    ]
}