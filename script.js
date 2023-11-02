function NewItem() {
    // document.write("<div class='todo-item'><input type='checkbox' id='todo-checkbox' name='todo-item1' onclick='StrikeThrough()'> <label for='todo-item' id='todo-item1'>item one</label>");
  }

  function StrikeThrough() {
    var input_box = document.getElementById("input-box");
    var str = value.strike();
    document.getElementById("input-box").value = str;
  }