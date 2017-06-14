/**
 * Created by HUY on 6/13/2017.
 */

export function checkLastIsOperator(data) {
    let res = false;
    if(data && data.length){
        let last = data.charAt(data.length - 1);
        if(last === '+' || last === '-' || last === '*' || last === '/'){
            res = true;
        }
    }
    return res;
}

export function setMPlus(data) {
    data = '' + data;
    if(!data || !data.length){
        return 0;
    }
    let separators = ['\\+', '-', '\\*', '/'];
    let splitData = data.split(new RegExp(separators.join('|'), 'g'));
    if(splitData && splitData.length){
        if(checkLastIsOperator(data)){
            splitData = splitData[splitData.length - 2];
        }else{
            splitData = splitData[splitData.length - 1];
        }
    }
    let res = parseInt(splitData);
    return res;
}

export function setMR(data, memory) {
    if(!data.length || !data){
        data = memory;
    }else {
        if(checkLastIsOperator(data)){
            data += memory;
        }else {
            let idx = getIndexLastOperator(data);
            if(memory){
                data = data.substring(0, idx + 1) + memory;
            }
        }
    }
    return data;
}

export function getIndexLastOperator(data) {
    let index = '';
    if(data && data.length){
        for(let i = 0; i< data.length; i ++){
            if(data[i] === '+' || data[i] === '-' || data[i] === '*' || data[i] === '/'){
                index = i;
            }
        }
    }
    return index;
}

export function checkDotInNumber(data) {
    let res = false;
    let separators = ['\\+', '-', '\\*', '/'];
    let splitData = data.split(new RegExp(separators.join('|'), 'g'));
    if(splitData && splitData.length){
        let num = parseFloat(splitData[splitData.length-1]);
        if(num % 1 !== 0){
            res = true;
        }
    }
    return res;
}
