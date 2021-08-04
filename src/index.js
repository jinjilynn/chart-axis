import { getNum, getDigit, getTopByMax, getBottomByMin, generateYvalueByStepAndMax } from './tool';

export function getIntervalRange({ data = [], intervals = 5, steps = [3], max, forceInt }) {
    if (!Array.isArray(data) || (Array.isArray(data) && data.length === 0)) return [];
    if (!window.isFinite(intervals) || intervals <= 0) { intervals = 5 };
    let maxY = -Infinity;
    let minY = Infinity;
    Object.values(data).forEach(value => {
        if (isFinite(value)) {
            value < minY && (minY = value);
            value > maxY && (maxY = value);
        }
    })

    const array = [];
    for (let i = 1; i <= intervals + 1; i += 1) {
        array.push(i);
    }

    const min_num = getBottomByMin(minY);
    let max_num = getTopByMax(maxY);
    if (typeof max === 'number' && window.isFinite(max) && max > min_num) {
        max_num = max;
    }

    let _limits = [];
    if (Array.isArray(steps)) {
        for (let i = 0; i < steps.length; i += 1) {
            if (window.isFinite(steps[i])) {
                let step_floor = Math.floor(steps[i]);
                if (step_floor > 10) step_floor = 10;
                _limits.push({ limit: step_floor * intervals, step: step_floor });
            } else {
                continue;
            }
        }
    }
    let _results_by_step = [];
    _limits.forEach(it => {
        if (max_num >= getTopByMax(it.limit)) {
            let [_min, _result_array] = generateYvalueByStepAndMax(array, max_num, it.step);
            _results_by_step.push({ min: _min, results: _result_array });
        }
    });
    let output = [];
    let _results;
    if (_results_by_step.length > 0) {
        let _available_results = [];
        let _result_temp = {};
        _results_by_step.forEach((it, index) => {
            if (it.min <= min_num) {
                _available_results.push(it);
            }
            if (index === 0) {
                _result_temp = it;
            } else {
                if (it.min > _result_temp.min) {
                    _result_temp = it;
                }
            }
        });

        _result_temp.results.pop();
        _result_temp.results.push(min_num);

        _available_results.forEach((it, index) => {
            if (index === 0 && Math.abs(it.min - min_num) < Math.abs(_result_temp.min - min_num)) {
                _result_temp = it
            } else {
                if (Math.abs(it.min - min_num) < Math.abs(_result_temp.min - min_num)) {
                    _result_temp = it;
                }
            }
        });
        _results = _result_temp;
    }
    if (_results) {
        if (!_results.results.some(it => it === 0)) {
            const _index = _results.results.findIndex(it => it < 0);
            if (_index === -1) {
                _results.results.push(0);
            } else {
                _results.results.splice(_index, 0, 0);
            }
        }
        output = _results.results.reverse();
    } else {
        const span = ((max_num - min_num) / intervals);
        let fixed = 1;
        if (Math.abs(max_num) >= 0 && Math.abs(max_num < 1)) {
            const _s = data.reduce((sum, value) => {
                if (!window.isFinite(value)) return sum;
                const _digit_cur = getDigit(value);
                let _decimal_p = _digit_cur === 0 ? 0 : _digit_cur.toString().split('.')[1].length;
                sum += _decimal_p;
                return sum;
            }, 0)
            fixed = Math.ceil(_s / data.length);
        }
        _results = array.reduce((last_r, it, index) => {
            const temp_num = getNum(max_num - span * (index), fixed);
            const r = temp_num;
            last_r.push(r);
            return last_r;
        }, []);
        _results.pop();
        _results.push(min_num);
        if (min_num < 0 && !_results.includes(0)) {
            const _index = _results.findIndex(it => it < 0);
            _results.splice(_index < 0 ? 0 : _index, 0, 0);
        }
        min_num > 0 && _results.push(0);
        output = _results.reverse();
    }
    if (forceInt) {
        let _temp_output = output.map(it => Math.ceil(it));
        output = Array.from(new Set(_temp_output));
    }
    return output;
}

export function getCoordByValue({ type = "reverse", minCoord, maxCoord, range }) {
    if (!window.isFinite(minCoord) || !window.isFinite(maxCoord)) {
        console.error('mminCoordin、maxCoord must be number');
        return;
    }
    if (maxCoord <= minCoord) {
        console.error('maxCoord must bigger than min');
        return;
    }
    if (!Array.isArray(range)) {
        console.error('range must be an array');
        return;
    }
    if (range.length < 2) {
        console.error('range at least has two element');
        return;
    }
    if (type !== 'reverse' && type !== 'normal') {
        type = 'reverse';
    }
    const _span = (maxCoord - minCoord) / (range.length - 1);
    return (value) => {
        if (!window.isFinite(value)) return;
        if (value > range[range.length - 1]) {
            console.error('value can not be bigger than the range maxmun');
            return;
        }
        if (value < range[0]) {
            console.error('value can not be smaller than the range minimum');
            return;
        }
        let y;
        let _position = 0;
        for (let i = 0; i < range.length; i += 1) {
            if (value <= range[i]) {
                _position = i;
                break;
            }
        }
        if (_position <= 1) {
            const y_step_0 = _span / (range[1] - range[0]);
            (type === "reverse") && (y = maxCoord - (value - range[0]) * y_step_0);
            (type === "normal") && (y = minCoord + (value - range[0]) * y_step_0);
        } else {
            const min_level = _position - 1;
            const y_step_i = _span / (range[_position] - range[min_level]);
            (type === "reverse") && (y = maxCoord - _span * (min_level) - (value - range[min_level]) * y_step_i);
            (type === "normal") && (y = minCoord + _span * (min_level) + (value - range[min_level]) * y_step_i);
        }
        return y;
    }

}