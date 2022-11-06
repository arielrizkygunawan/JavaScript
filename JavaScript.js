function  sec(nomre){
    reqem = document.getElementById("kalkulatorTotal").innerHTML;
    reqem = reqem + nomre;
    document.getElementById("kalkulatorTotal").innerHTML = reqem;
}

function menfi(){
    reqem = document.getElementById("kalkulatorTotal").innerHTML;
    reqem = "-" + reqem;
    document.getElementById("kalkulatorTotal").innerHTML = reqem;
}

function persen(){
    reqem = document.getElementById("kalkulatorTotal").innerHTML;
    reqem = reqem *1/100;
    document.getElementById("kalkulatorTotal").innerHTML = reqem;
}

function koma(){
    reqem = document.getElementById("kalkulatorTotal").innerHTML;
    reqem = reqem +"."
    document.getElementById("kalkulatorTotal").innerHTML = reqem;
}

function resetKalkulator(){
    reqem = document.getElementById("kalkulatorTotal").innerHTML;
    reqem ="";
    document.getElementById("kalkulatorTotal").innerHTML = reqem;
}

function azaltReqemi(){
    reqem = document.getElementById("kalkulatorTotal").innerHTML;
    document.getElementById("kalkulatorTotal").innerHTML = reqem.substring(0, reqem.length - 1);
}

function perkalian(){
    reqem = document.getElementById("kalkulatorTotal").innerHTML;
    reqem = reqem + "*"
    document.getElementById("kalkulatorTotal").innerHTML = reqem;
}

function pembagian(){
    reqem = document.getElementById("kalkulatorTotal").innerHTML;
    reqem = reqem + "/"
    document.getElementById("kalkulatorTotal").innerHTML = reqem;
}

function pengurangan(){
    reqem = document.getElementById("kalkulatorTotal").innerHTML;
    reqem = reqem + "-"
    document.getElementById("kalkulatorTotal").innerHTML = reqem;
}

function pertambahan(){
    reqem = document.getElementById("kalkulatorTotal").innerHTML;
    reqem = reqem + "+"
    document.getElementById("kalkulatorTotal").innerHTML = reqem;
}

function yoxlama(){
    if(isNaN(eval(neticemiz)) !== false){
        alert("sohflik var")
    }
}

function neticeKalkulator(){
    neticemiz = document.getElementById("kalkulatorTotal").innerHTML
    yoxlama();
    document.getElementById("kalkulatorTotal").innerHTML = eval(neticemiz)
}