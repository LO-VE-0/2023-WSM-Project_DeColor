var arr = new Array(); //필터 내용을 저장하는 배열

//필터 내용을 저장하는 function
function makeFilter(target) {

    var value = target.value; //check value
    var confirmCheck = target.checked; //check여부 확인

    if (confirmCheck == true) {
        arr.push(value); // check value filter 배열에 입력

    } else {
        arr.splice(arr.indexOf(value), 1); // check value filter 배열내용 삭제       
        
    }

}