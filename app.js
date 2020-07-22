
var list =document.getElementById("list");

function addtodo(){
    // Li Task With text Node
    var todo_item = document.getElementById("todo-item")
    var li=document.createElement('li')
    var liText=document.createTextNode(todo_item.value)
    li.appendChild(liText)
    
    // editButton 
    var editbtn=document.createElement('button')
    var editTxt=document.createTextNode("Edit")
    editbtn.appendChild(editTxt)
    editbtn.setAttribute("class","btnedit")
    editbtn.setAttribute("onclick", "editItem(this)")
    li.appendChild(editbtn)
    
        // deleteButton 
    var delbtn=document.createElement('button')
    var deltext=document.createTextNode("Delete")
    delbtn.setAttribute("class","btndel")
    delbtn.setAttribute("onclick", "deleteItem(this)")
    delbtn.appendChild(deltext)

    li.appendChild(delbtn)



    list.appendChild(li)
    todo_item.value=""


}

function delall(){
    list.innerHTML=""
}
function deleteItem(j) {
    j.parentNode.remove()    
    console.log(j.parentNode)    
}
function editItem(e){
    var a=e.parentNode.firstChild.nodeValue;
    var edtValue=prompt("Enter Edit Value",a)
    console.log(e.parentNode.firstChild)

    e.parentNode.firstChild.nodeValue = edtValue
}