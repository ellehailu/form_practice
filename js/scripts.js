window.onload = function(){
    let form = document.querySelector('form');
    form.onsubmit = function(event){
        const userWord = document.getElementById("input1").value;
        document.querySelector("span#yourWord").innerText = userWord.toUpperCase();
        event.preventDefault();
    }
}