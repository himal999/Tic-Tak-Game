//change player name

var p1 = "PLAYER1";
var p2 = "PLAYER2"

function changeName(){
    p1 = prompt("Name of the player who choose 'x' !!")
    p2 = prompt("Name of the player who choose 'o' !!")

    var str1 = p1+" : X ";
    var str2 = p2+" : O ";

    document.getElementById("result").innerHTML = str1+"<br>"+str2;
}

var flag = true;
var t = 0 ;

function game(){
    if(flag==true){
        document.activeElement.innerHTML = "X";
        document.activeElement.removeAttribute('onclick')
        document.activeElement.style.backgroundColor="#2a74f0"

        t++;
        flag=false;
        var final = checkresult();

        if(final == 'stop'){
            document.getElementsById("result").innerHTML = p1+"WINS !!"
            document.getElementsById("result").style.fontSize = "45px";
            document.getElementsById("result").style.color = "antiquewhite";
            document.getElementsById("result").style.paddingTop = "30px"
            removeATT()
        } else if(t==9){
            document.getElementsById("result").innerHTML ="MATCH DRWA !!"
        }
    }else{
        document.activeElement.innerHTML = "O"
        document.activeElement.style.backgroundColor="hotpink"
        document.activeElement.removeAttribute('onclick')
    }
}