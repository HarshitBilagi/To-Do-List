function StrikeThrough() {

  var checkbox = document.getElementById("todo-checkbox");
  var textarea = document.getElementById("input-box");
  
  if(checkbox.checked === true)
    textarea.style.textDecoration = "line-through";
  else
    textarea.style.textDecoration = "none";
}

function NewItem() {
    var lst = document.getElementById("uo-list");
    var checkbox = document.getElementById("new-item-text");
    var checkbox_value = checkbox.value;
    if(checkbox.value.length !== 0) {
        var container = document.createElement("div");
        container.classList.add("new-item-main");
        container.innerHTML = `<div class="todo-item">
            <input type="checkbox" id="todo-checkbox" name="display" onclick="StrikeThrough();" />
            <textarea type="text" rows="1" class="todo-text" name="display" value="" id="input-box">${checkbox_value}</textarea>
        </div>
        <img src="delete_svg.svg" id="delete_item" height="50px" width="50px" margin="5px 5px" onclick="document.getElementById('delete_item').addEventListener('click', remove_item());">`;
        checkbox.value = "";
        lst.appendChild(container);
    }
};

function remove_item() {
  lst.removeChild(container);
}

