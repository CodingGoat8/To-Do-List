

const Button = document.querySelector(".button");
const wArea = document.querySelector("#wArea");
const lists = document.querySelector(".lists");


function AddTask() {
    if(wArea.value === ''){
        alert("You Have To Write Aynthing Over Here...")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = wArea.value;
        lists.appendChild(li);
        // li.style.backgroundColor = "yellow";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    wArea.value = "";
    saveData();
}


Button.addEventListener( 'click',AddTask);


lists.addEventListener('click', function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
                        

}, false)


function saveData(){
    localStorage.setItem("data", lists.innerHTML);

}

function showTask(){
    lists.innerHTML = localStorage.getItem("data");
}

showTask();

