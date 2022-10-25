//fist homework
function app(str) {
    let arr = str.split('');
    let obj = {}
    for(let i = 0; i < arr.length; i++){
        obj[arr[i]]=''
    }
    console.log(Object.keys(obj).join(''));
}
app('assaalloommuuu');


//second homework
function App(str) {
    let arr = str.split('');
    let newArr = arr.sort().join('')
    if(newArr.includes('oo') == true && newArr.includes('xx') == true){
        console.log(true);
    }else{
        console.log(false);
    }
}
App('ooxx');