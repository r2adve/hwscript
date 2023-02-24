
document.addEventListener('DOMContentLoaded', (event) => {

    var dragSrcEl = null;
    
    function handleDragStart(e) {
      this.style.opacity = '0.4';
      
      dragSrcEl = this;
  
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    }
      
    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
  
      e.dataTransfer.dropEffect = 'move';
      
      return false;
    }
  
    function handleDragEnter(e) {
      this.classList.add('over');
    }
  
    function handleDragLeave(e) {
      this.classList.remove('over');
    }
  
    function handleDrop(e) {
      if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
      }
      
      if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
      }
      
      return false;
    }
  
    function handleDragEnd(e) {
      this.style.opacity = '1';
      
      items.forEach(function (item) {
        item.classList.remove('over');
      });
    }
    
    
    let items = document.querySelectorAll('.container .box');
    items.forEach(function(item) {
      item.addEventListener('dragstart', handleDragStart, false);
      item.addEventListener('dragenter', handleDragEnter, false);
      item.addEventListener('dragover', handleDragOver, false);
      item.addEventListener('dragleave', handleDragLeave, false);
      item.addEventListener('drop', handleDrop, false);
      item.addEventListener('dragend', handleDragEnd, false);
    });
  });


  document.addEventListener("click", function(){
    document.getElementById("target").innerHTML = "Hello World";
  });

//------------------------------------------------------------------------------------------------------------------
// button event 처리
//------------------------------------------------------------------------------------------------------------------
  var bt_build_mode = document.getElementById("btid_build");
  var bt_structure_mode = document.getElementById("btid_structure");

  bt_build_mode.addEventListener("click", function() {
    bt_build_mode.style.backgroundColor='#ff96e2a0';
    bt_structure_mode.style.backgroundColor='#2396e2a0';
    View_build_mode_Layer();
  })

  bt_structure_mode.addEventListener("click", function() {
    bt_build_mode.style.backgroundColor='#2396e2a0';
    bt_structure_mode.style.backgroundColor='#ff96e2a0';

})



function View_build_mode_Layer(){
    //만일 Pop라는 녀석이 닫혀있다면??
    if(document.getElementById("pop_build").style.display=="none"){
       //열어주어라
       document.getElementById("pop_build").style.display='inline'
    //그렇지 않은 모든 경우라면??
    }else{
       //닫아주어라
       document.getElementById("pop_build").style.display='none'
    }
 }


/*
bt_build_mode.addEventListener("mouseover", onMouseOver);
bt_structure_mode.addEventListener("mouseout", onMouseOut);

  function onMouseOver() {
      document.getElementById("btid_build").innerText = "마우스가 올라갔어요"
  }

  function onMouseOut() {
      document.getElementById("btid_structure").innerText = "마우스가 빠져나갔어요"
  }
*/

