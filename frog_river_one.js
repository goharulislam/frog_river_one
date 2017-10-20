let min = 0, max = 20, i = 0, reply = 0;
let a = [0];
let btn1 = document.getElementsByTagName("button")[0];

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function solution(a,x){

    for(i=0; i<a.length; i++){
        if(a[i] === x){
            return i;
            break;
        }
    }
    return -1;
}

btn1.addEventListener('click', function( event ){

    for(i=0; i<max; i++){
        a[i] = getRandomInt(min, max);
        //a[i] = parseInt(a[i]);
    }

    x = getRandomInt(min, max);

    document.getElementsByTagName("p")[0].innerHTML = "A (Array) = "+ a + " and X = "+ x;
    reply = solution(a,x);

    if(reply === -1){
        document.getElementsByTagName("p")[1].innerHTML = "Frog can't jump. "+ reply;
    }
    else{
        document.getElementsByTagName("p")[1].innerHTML = "Frog can jump at this earliest time = "+ reply;
    }
    
});