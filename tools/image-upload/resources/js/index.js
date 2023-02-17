
/*
* アップロードファイルを選択した時の処理
* 補足：onchange="fileChangeText()"で使用
*/
function fileChangeText() {
  // 各要素を変数にする
  const input = document.getElementById('inputFiles');
  const resultArea = document.getElementById('fileChangeText');
  const fileLists = document.getElementById('fileLists');
  const submitBtn = document.getElementById('submitBtn');
  const fileNum = document.getElementById('jsNum');

  // fileリスト格納用の配列
  let fileNameArray = [];

  // 選択されたファイルを取得し変数filesに代入
  let files = input.files;

  // ファイル選択後にclass付与
  resultArea.classList.add('display');
  submitBtn.classList.add('fileSelect');

  // 選択されたファイルがfilesに入っているので、そこからファイル名だけを取得し、変数fileNameArrayに配列として入れる
  for (file of files) {
    fileNameArray.push(file.name)
  }


  // ファイルを選択しなおした時の処理。
  // ファイル選択しなおす度に一旦リストを空にする
  fileLists.innerHTML = '';

  // 枚数表示
  fileNum.innerHTML = '（' + fileNameArray.length + '枚）';

  
console.log(fileNameArray);
  for (filename of fileNameArray) {
    fileLists.innerHTML += `
      <li>${filename}</li>
    `;
  }
}