// モンスターデータを管理する配列
const monsters = [
    { id: 1, name: "スライム", hp: 10, attack: 3 },
    { id: 2, name: "ドラキー", hp: 15, attack: 5 },
    { id: 3, name: "モモンガ", hp: 20, attack: 8 },
    { id: 4, name: "ゴリラ", hp: 50, attack: 15 }
];

let capturedCount = 0; // 捕獲したモンスターの数
let capturedMonsters = []; // 捕獲したモンスターの配列

// モンスターを表示する関数
function displayMonsters() {
    const container = document.getElementById('monster-container');
    container.innerHTML = ''; // モンスターをクリア

    monsters.forEach(monster => {
        const monsterElement = document.createElement('div');
        monsterElement.textContent = `${monster.name} - HP: ${monster.hp}`;
        container.appendChild(monsterElement);
    });
}

// 捕獲ボタンがクリックされたときの処理
document.getElementById('capture-button').addEventListener('click', function () {
    if (capturedCount >= 10) {
        alert("10匹のモンスターを捕獲済みです！");
        return;
    }

    // ランダムにモンスターを捕獲する処理を実装
    const randomIndex = Math.floor(Math.random() * monsters.length);
    const capturedMonster = monsters[randomIndex];
    const successRate = 1 - capturedMonster.hp / 100; // 成功率を設定 (HPが高いほど低い確率で成功する)

    if (Math.random() < successRate) {
        capturedCount++; // 捕獲したモンスターの数を増やす
        document.getElementById('count').textContent = capturedCount;

        // 捕獲したモンスターを捕獲済みリストに追加する
        capturedMonsters.push(capturedMonster);
        updateCapturedList(); // 捕獲済みリストを更新する
        document.getElementById('capture-result').textContent = `${capturedMonster.name} を捕獲しました！`;
    } else {
        document.getElementById('capture-result').textContent = `${capturedMonster.name} を捕獲できませんでした...`;
    }
});

// 捕獲済みリストを更新する関数
function updateCapturedList() {
    const capturedList = document.getElementById('captured-list');
    capturedList.innerHTML = ''; // リストをクリア

    capturedMonsters.forEach(monster => {
        const capturedItem = document.createElement('li');
        capturedItem.textContent = monster.name;
        capturedList.appendChild(capturedItem);
    });
}

// 初期化
displayMonsters();
