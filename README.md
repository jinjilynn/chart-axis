# chart-axis

Library to generate a continuous range by some interval, and get the coordinate position according to the specified value

## Install

```javascript
npm install geolib

yarn add geolib
```

## Usage

``` javascript
import { getIntervalRange, getCoordByValue } from 'chart-axis'

const { getIntervalRange, getCoordByValue } = require('chart-axis');
```

```javascript
<script src="lib/chart_axis.js"></script>

<script>
  const { getIntervalRange, getCoordByValue } = chart_axis;
</script>
```

## Functions

### getIntervalRange({ data, intervals = 5, forceInt=false, max=null, steps = [3] })

This function takes up to 3 arguments. First one argument is required. 

It returns an incremental array represents the range

```javascript
const reange1 = getIntervalRange({data:[2343,1234,5434,7435], intervals:5, steps:[3]});
// range1 is [0, 1000, 6300, 6600, 6900, 7200, 7500]

const reange2 = getIntervalRange({data:[2343,1234,5434,7435], intervals:5, steps:[5]})
// range2 is [0, 1000, 5500, 6000, 6500, 7000, 7500]

const reange3 = getIntervalRange({data:[2343,1234,5434,7435], intervals:4, steps:[10]})
// range3 is [0, 1000, 4500, 5500, 6500, 7500]

const reange4 = getIntervalRange({data:[2343,1234,5434,7435], intervals:5, steps:[2,4,6]});
// range4 is [0, 1000, 6700, 6900, 7100, 7300, 7500]
```

#### data

Param 'data' must be an value array, most times it is your data list, it is required

#### intervals

Param 'intervals'  determies how many intervals there are in the value range. It's equal to the number of intervals after the range array removes 0;

#### steps

Param steps is an array type,  the inner elements can be valued from 1 to 10. it determines how to decrease in the range returned

### getCoordByValue({ type = "reverse", minCoord, maxCoord, range })

This function return another function that reutrns the coordinate according to a specified value which is within the given range

#### type

Param type can only be valued at 'reverse' and 'normal',it determines whether the start point for coordinate of specified value is minCoord or maxCoord.

#### minCoord

If you have a coordinate system in your page, no matter whether it is svg or canvas or just a div,  you should specify which interval of the continuous value range should be distributed in the coordinate system.

minCoord is the minimum coordinate in the coordinate interval

#### maxCoord

maxCoord is the maxmum coordinate in the coordinate interval

#### range

an array returned by getIntervalRange

```javascript
const getCoord = getCoordByValue({minCoord:0,maxCoord:300,range:[0, 1000, 6700, 6900, 7100, 7300, 7500]});
getCoord(7500)
// 0
getCoord(0)
//300
getCoord(6900)
//150

const getCoord = getCoordByValue({type:'normal', minCoord:0,maxCoord:300,range:[0, 1000, 6700, 6900, 7100, 7300, 7500]});
getCoord(7500)
// 300
getCoord(0)
//0
getCoord(6900)
//150

```



