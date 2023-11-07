let cnt = 0;

class Task {
  
  constructor(text, flag) {
    this.text = text;
    this.flag = flag;
  }

  NewItem() {
    var lst = document.getElementById("uo-list");
    var checkbox = document.getElementById("new-item-text");
    var checkbox_value = checkbox.value;
    if(checkbox.value.length !== 0) {
        var container = document.createElement("div");
        container.classList.add(`new-item-main`);
        container.classList.add(`new-item-main${++cnt}`);
        container.innerHTML = `<div class="todo-item" id="item${cnt}">
            <input type="checkbox" id="todo-checkbox${cnt}" name="display" onclick="Strike('todo-checkbox${cnt}', 'todo-inputbox${cnt}');" />
            <textarea type="text" rows="1" class="todo-text" name="display" value="" id="todo-inputbox${cnt}">${checkbox_value}</textarea>
        </div>
        <img src="images/delete_svg.svg" id="todo-deleteitem${cnt}" height="50px" width="50px" margin="5px 5px" onclick="document.getElementById('todo-deleteitem${cnt}').addEventListener('click', removeItem('.new-item-main${cnt}'));">`;
        checkbox.value = "";
        lst.appendChild(container);
    }
  }

  StrikeThrough(chk, id) {
    var checkbox = document.getElementById(`${chk}`);
    var textarea = document.getElementById(`${id}`);
    
    if(checkbox.checked === true)
      textarea.style.textDecoration = "line-through";
    else
      textarea.style.textDecoration = "none";
  }

  remove(cls){
    var listItem = document.querySelector(`${cls}`);
    var parentList = document.getElementById("uo-list");
    parentList.removeChild(listItem);
  }

};


function newItem(){
  let nI = new Task();
  nI.NewItem();
}

function Strike(chk, id){
  let sT = new Task();
  sT.StrikeThrough(chk, id);
}

function removeItem(cls){
  let rI = new Task();
  rI.remove(cls);
}