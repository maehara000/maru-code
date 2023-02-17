let ls = localStorage;
let stringToJson;
let jsonToString;


const app = new Vue({
  el: '#app',
  data() {
    return {
      taskArr: [],
      taskText: '',
      taskCount: '',
      inputValue: 0,
      addTaskInput: document.getElementById('addTaskInput'),
      addTaskCountInput: document.getElementById('addTaskCountInput'),
      taskList: document.getElementById('taskList'),
      isDisabled: true,
    }
  },

  mounted() {
    window.addEventListener('load', () => {
      this.taskIni()
      this.LsToStr()
    })
  },

  methods: {
    taskIni() { // タスクの初期化
      if(ls.getItem('lsTask') === null) {
        // localStrageが空だったら
        this.setLs();
      } else {
        // localStrageが既に値を持っていたら
        this.LsToStr();
      }
    },
  

    getUid(myString) { // 現在の日時からユニークなIDを作成
      let strong = 100;
      if (myString) strong = myString;
      return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
    },

    setLs() { // LocalStrageにセット(JSONに変換）
      stringToJson = JSON.stringify(this.taskArr)
      ls.setItem('lsTask', stringToJson)
    },

    LsToStr() { // LocalStrageから取得（Objectに変換）
      jsonToString = JSON.parse(ls.getItem('lsTask'));
      this.taskArr = jsonToString;
    },
    
    createNewTask() { // 新しいタスクを追加
      this.taskArr.push({
        id: this.getUid(),
        contents: addTaskInput.value,
        count: addTaskCountInput.value ? addTaskCountInput.value : 0,
        checked: false,
      })
      this.setLs()
      this.taskText = ''
      this.taskCount = ''
    },

    deleteAllTasks() {
      let allDeleteConfirm = window.confirm('アイテムを全て削除しますか？');
      if(allDeleteConfirm) {
        ls.removeItem('lsTask')
        this.taskArr = [];
      }
    },

    deleteSingleTask(e) {
      let target = this.taskArr.find((item) => item.id === e.target.dataset.id)
      let index = this.taskArr.indexOf(target)
      this.taskArr.splice(index, 1)
      this.setLs()
    },

    taskContentsUpdate(e) {
      let target = this.taskArr.find((item) => item.id === e.target.dataset.id)
      target.contents = e.target.value
      this.setLs()
    },

    taskCountUpdate(e) {
      let target = this.taskArr.find((item) => item.id === e.target.dataset.id)
      target.count = e.target.value
      this.setLs()
    },

    taskCheckUpdate(e) {
      let target = this.taskArr.find((item) => item.id === e.target.dataset.id)
      target.checked = e.target.checked
      this.setLs()
    },
  },

  watch: {
    taskText: function(newK, oldK) {
      if(this.taskText === '') {
        this.isDisabled = true
      } else {
        this.isDisabled = false
      }
    }
  }
});