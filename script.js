function NewItem() {
    // document.write("<div class='todo-item'><input type='checkbox' id='todo-checkbox' name='todo-item1' onclick='StrikeThrough()'> <label for='todo-item' id='todo-item1'>item one</label>");
  }

  function StrikeThrough() {
    var checkbox = document.getElementById("todo-checkbox");
    var textarea = document.getElementById("input-box");

    if(checkbox.checked === true)
      textarea.style.textDecoration = "line-through";
    else
      textarea.style.textDecoration = 'none';
  }