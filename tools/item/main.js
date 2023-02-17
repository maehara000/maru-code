

(function() {
  let ls = localStorage;
  let taskObj = [];
  let stringToJson;
  let jsonToString;

  const addTaskInput = document.getElementById('addTaskInput');
  const addTaskCountInput = document.getElementById('addTaskCountInput');
  const taskList = document.getElementById('taskList');

  const deleteButtons = document.getElementsByClassName('js-delete');
  const doneCheckboxes = document.getElementsByClassName('js-checkbox');
  const taskTexts = document.getElementsByClassName('js-text');
  const taskCounts = document.getElementsByClassName('js-count');



  /* strのタスクをJsonに変換し、LocalStrageに保存する関数 */
  function saveToLocalStrage() {
    stringToJson = JSON.stringify(taskObj);
    ls.setItem('lsTask', stringToJson);
  }
  

  /* LocalStrageのタスク（Json）をstrに変換し、taskObjに代入する関数 */
  function LsToStr() {
    jsonToString = JSON.parse(ls.getItem('lsTask'));
    taskObj = jsonToString;
  }

  /* ユニークなIDを生成 */
  function getUniqueStr(myString){
    let strong = 1000;
    if (myString) strong = myString;
    return new Date().getTime().toString(16)  + Math.floor(strong*Math.random()).toString(16)
  }
  let uuid = getUniqueStr();



  /* ページ読み込み時に現在のタスク状況を整理する関数 */
  function taskIni(){
    if(ls.getItem('lsTask') === null) {
      // localStrageが空だったら、
  
      taskObj = [{
        id: uuid,
        contents: '追加したアイテムがここに表示されます。',
        count: 0,
        done: false,
      }];
      saveToLocalStrage();
      // console.log('まだオリジナルタスクは未登録です');

    } else {
      // localStrageが既に値を持っていたら
      LsToStr();
    }
  }
  taskIni();


  /* 最初のDOM生成 */
  function domIni() {
    taskObj.forEach(function(e){

      let checked = '';
      if(e.done === true) {
        checked = 'checked';
      }

      let createTask = `
      <li id="${e.id}">
        <input type="checkbox" class="js-checkbox" data-id="${e.id}" ${checked}> <span class="text js-text" data-id="${e.id}" contenteditable="true">${e.contents}</span> × 
        <input type="number" class="count js-count" value="${e.count}" data-id="${e.id}">
        <input class="delete button button--delete js-delete" data-id="${e.id}" type="button" value="" tabindex="-1"></input>
      </li>
      `;
      taskList.innerHTML += createTask;
    });
  }
  domIni();


  // タスクを追加した時の処理
  document.getElementById('addTaskSubmit').addEventListener('click', function(){

    if(document.getElementById('addTaskInput').value !== '') {
      uuid = getUniqueStr();

      taskObj.push({
        id: uuid,
        contents: addTaskInput.value,
        count: addTaskCountInput.value,
        done: false,
      })
      saveToLocalStrage();
      location.reload();
    }
  });
  


  /* 全削除ボタンの処理 */
  document.getElementById('DeleteAllTaskSubmit').addEventListener('click', function(){
    ls.removeItem('lsTask');
    location.reload();
  });

  /* 各タスクの削除ボタンの処理 */
  for(let deleteButton of deleteButtons) {
    deleteButton.addEventListener('click', function() {
      document.getElementById(deleteButton.dataset.id).remove();
      
      let target = taskObj.find((item) => item.id === deleteButton.dataset.id);

      let index = taskObj.indexOf(target);
      taskObj.splice(index, 1);
      saveToLocalStrage();

      console.log('削除ボタンクリック');

    })
  }

  /* 各タスクのチェックボックスの処理 */
  for(let checkbox of doneCheckboxes) {
    checkbox.addEventListener('click', function() {
      let target = taskObj.find((item) => item.id === checkbox.dataset.id);

      target.done = !target.done;
      console.log(target.done);
      saveToLocalStrage();
    })
  }

  /* 既存タスク書き換え時の処理 */
  for(let taskText of taskTexts) {
    taskText.addEventListener('input', function() {
      let target = taskObj.find((item) => item.id === taskText.dataset.id);

      target.contents = taskText.textContent;
      console.log(target.contents);
      saveToLocalStrage();
    })
  }


    /* 既存タスクカウント変更時の処理 */
    for(let taskCount of taskCounts) {
      taskCount.addEventListener('input', function() {
        let target = taskObj.find((item) => item.id === taskCount.dataset.id);
  
        target.count = taskCount.value;
        console.log(target.value);
        saveToLocalStrage();
      })
    }

  

})();