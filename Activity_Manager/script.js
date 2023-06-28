const inputBox =document.getElementById("input-box");
const listContainer =document.getElementById("list-container");
let items = JSON.parse(localStorage.getItem('todos')) || [];
function addTask(){
    if(inputBox.value===''){
        alert("You must write something");
    }
    else{
        let li =document.createElement("li");
        let value= inputBox.value;
        items.push(value);
        localStorage.setItem("todos",JSON.stringify(items));
        li.innerHTML=value;
        li.setAttribute("class","list-item")
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);

    }
    inputBox.value="";
    document.querySelectorAll('.list-item').forEach((item)=>{
        item.addEventListener("click",(e)=>{
            e.target.classList.toggle("checked");
        })
        item.children[0].addEventListener("click",(e)=>{
            item.remove();
        })
    })

}


items.forEach((item)=>{
    let li =document.createElement("li");
    li.innerHTML = item;
    console.log(item);
    li.setAttribute("class","list-item")
    listContainer.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7"
    li.appendChild(span);
})
document.querySelectorAll('.list-item').forEach((item)=>{
    item.addEventListener("click",(e)=>{
        e.target.classList.toggle("checked");
    })
    item.children[0].addEventListener("click",(e)=>{
        item.remove();
    })
})

