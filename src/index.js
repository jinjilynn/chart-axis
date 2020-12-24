import { getNum, getDigit, getTopByMax, getBottomByMin, generateYvalueByStepAndMax } from './tool';

export function getIntervalRange({ data = [], intervals = 5, steps = [3] }) {
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
    const max_num = getTopByMax(maxY);
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
            if (index === 0) {
                _result_temp = it
            } else {
                if (it.min < _result_temp.min) {
                    _result_temp = it;
                }
            }
        });
        _results = _result_temp;
    }
    if (_results) {
        min_num < 0 && _results.results.splice(_results.results.length - 2, 1, 0);
        // min_num > 0 && _results.results.push(0);
        min_num > 0 && _results.results.splice(_results.results.length - 1, 1, 0);
        return _results.results.reverse();
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
        return _results.reverse()
    }
}