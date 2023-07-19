// import "./styles.css";

// タスク追加
const onClickAdd = () => {
    // 入力された値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // 未完了TODO → 完了したTODOへ
    createIncompleteList(inputText);
};
    

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
};



// 未完了リストに追加する関数
const createIncompleteList = (text) => {

    // classを付与したdiv生成 (HTMLのDOM作成)
    const div = document.createElement("div");
    div.className = "list-row";

    // 取得した値をli生成してタグを追加
    const li = document.createElement("li");
    li.innerText = text;

    // 完了ボタンを生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    // 完了ボタンを押したら
    completeButton.addEventListener("click", () => {
        // 押された完了ボタンの親タグ(div)を未完了リストから削除
        deleteFromIncompleteList(completeButton.parentNode);

        // 完了リストに追加する要素
        const addTarget = completeButton.parentNode;

        // TODO内容リストを取得
        const text = addTarget.firstElementChild.innerText;

        // div以下を初期化
        addTarget.textContent = null;

        // liタグを生成
        const li = document.createElement("li");
        li.innerText = text;

        // 戻すボタンを生成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click", () => {
            // 押された戻すボタンの親タグを完了リストから削除
            const deleteTarget = backButton.parentNode;
            document.getElementById("complete-list").removeChild(deleteTarget);

            // テキストを取得
            const text = backButton.parentNode.firstElementChild.innerText;

            // 完了したTODO → 未完了のTODO 
            createIncompleteList(text);
        });

        // divタグの子要素に各要素を設定
        addTarget.appendChild(li);
        addTarget.appendChild(backButton);

        // // 完了したTODOリストに追加
        document.getElementById("complete-list").appendChild(addTarget);
        
    });

    // 削除ボタンを生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親タグ(div)を削除
        deleteFromIncompleteList(deleteButton.parentNode);
    });

    // divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    // 未完了のTODOリストに追加
    document.getElementById("incomplete-list").appendChild(div);
}


// 追加をクリックでonClickAdd関数発生
document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());




























/**
 * const let 等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);


// letは再宣言不可
// let val2 = "let変数";
// console.log(val2);


// // constは中身の変更は可能
// const val4 = {
//     name: "じゃけぇ",
//     age: 28,
// };
// val4.name = "りゅうき";
// val4.address = "FUKUOKA";
// console.log(val4);

// constは配列の中身の変更は可能
// const val5 = ['dog' , 'cat'];
// val5.push('monkey');
// console.log(val5);


/**
 * テンプレート文字列
*/
// const name = "Ryuki";
// const age = "24";
// //「 私の名前はりゅうきです。年齢は24歳です」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です・";

// // テンプレート文字列を用いると
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);



/**
 * アロー関数 =>
 */
// 従来の関数
// function func1(str) {
//     return str;
// }
// const func1 = function(str) {
//     return str;
// }

// // アロー関数
// const func2 = (str) => {
//     return  str;
// }
// console.log(func2("func2です"));

// // 省略可能
// const func3 = str => str;
// console.log(func3("func3です"));

// // 足し算
// const func4 = (num1, num2) => num1 + num2;

// console.log(func4(10,20));



/**
 * 分割代入 ` `
 */
// const myProfile = {
//     name: "Ryuki",
//     age: 24,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// 連想配列の場合
// const myProfile = ['Ryuki', 24];
// const { name, age } = myProfile;
// const message1 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message1);


// 配列の場合 
// const myProfile = ['Ryuki', 24];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);



/**
 * デフォルト値 (name = "ゲスト")
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん。`);
// sayHello();


/**
 * スプレッド構文 ...がついていると順番に処理される
 */
// 配列の展開
// const arr1 = [1, 2];
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2, ...arr3] = arr2;
// console.log(num1);
// console.log(arr3);

// 配列のコピー,結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr5];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);



/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "Ryuki"];

// for (let index = 0; index < nameArr.length; index++) {
//     console.log(`${index+1}番目は${nameArr[index]}さんです`);
// }

// returnされた値によって配列を作り直す例
// const nameArr2 = nameArr.map((name)=>{
//     return name;
// })
// console.log(nameArr2);

// 配列の中身をループ処理するだけの例
// nameArr.map((name, index) => console.log(`${index+1}番目は${name}です`));


// filter 条件式の抽出
// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 === 0;
// });
// console.log(newNumArr);

// mapと条件文
// const newNameArr = nameArr.map((name) => {
//     if (name === "Ryuki") {
//         return name;
//     } else {
//         return `${name}さん`
//     }
// })
// console.log(newNameArr);


/**
 * 三項演算子 ?
 * ある条件 ? 条件がtrueの時 : 条件がfalseの時
 * if else を一文で使える
 */
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString()); // 数値をカンマ区切りする関数

// const formatNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力して下さい。' ;
// console.log(formatNum);

// const checkSum = (num1, num2) => {
//     return num1 + num2 > 100 ? '100を超えています' : '100以下です';
// }
// console.log(checkSum(30,60));


/**
 * 論理演算子の本当の意味を知ろう
 */







