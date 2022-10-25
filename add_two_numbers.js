function doSomething(){
    let a = document.getElementById('inputA').value;
    let b = document.getElementById('inputB').value;
    document.getElementById("valueA").innerHTML = a;
    document.getElementById("valueB").innerHTml = b;
    document.getElementById("valueC").innerHTML = Number(a) + Number(b);
}