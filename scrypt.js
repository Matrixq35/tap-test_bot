let balance = 0; // Баланс пользователя
let tapValue = 1; // Сколько очков добавляет один тап

const scoreDisplay = document.getElementById("scoreBalance");
const buttonTap = document.getElementById("tapButton");
const upgradeTabButton = document.getElementById("upgradeTabButton");
const upgradeTab = document.getElementById("upgradeTab");
const upgrade1 = document.getElementById("upgrade1");
const upgrade2 = document.getElementById("upgrade2");
const upgrade3 = document.getElementById("upgrade3")
const backToGame = document.getElementById("backToGame");

// Функция для добавления очков
function addScore() {
    balance += tapValue; // Увеличиваем баланс на значение тапов
    updateDisplay(); // Обновляем отображение баланса
    saveProgress(); // Сохраняем прогресс
}

// Функция для обновления отображения баланса
function updateDisplay() {
    scoreDisplay.textContent = "Баланс: " + balance; // Показываем новый баланс
}

// Функция для сохранения прогресса
function saveProgress() {
    localStorage.setItem("tapGameBalance", balance); // Сохраняем баланс в браузере
    localStorage.setItem("tapGameTapValue", tapValue); // Сохраняем значение тапов
}

// Функция для загрузки прогресса
function loadProgress() {
    const savedBalance = localStorage.getItem("tapGameBalance"); // Загружаем баланс
    const savedTapValue = localStorage.getItem("tapGameTapValue"); // Загружаем значение тапов

    if (savedBalance !== null) balance = parseInt(savedBalance); // Если есть сохраненный баланс, применяем его
    if (savedTapValue !== null) tapValue = parseInt(savedTapValue); // Если есть сохраненное значение тапов, применяем его

    updateDisplay(); // Обновляем экран
}

// Переключение на вкладку улучшений
function showUpgradeTab() {
    document.getElementById("container").classList.add("hidden"); // Скрываем основной блок
    upgradeTab.classList.remove("hidden"); // Показываем вкладку улучшений
}

// Возврат на вкладку игры
function backToGameTab() {
    document.getElementById("container").classList.remove("hidden"); // Показываем основной блок
    upgradeTab.classList.add("hidden"); // Скрываем вкладку улучшений
}

// Покупка улучшения 1
function buyUpgrade1() {
    if (balance >= 10) { // Если хватает баланса
        balance -= 10; // Списываем 10 поинтов
        tapValue += 1; // Увеличиваем тап на 1
        updateDisplay(); // Обновляем экран
        saveProgress(); // Сохраняем прогресс
    } else {
        alert("Недостаточно поинтов!"); // Если поинтов не хватает
    }
}

// Покупка улучшения 2
function buyUpgrade2() {
    if (balance >= 50) { // Если хватает баланса
        balance -= 50; // Списываем 50 поинтов
        tapValue += 2; // Увеличиваем тап на 2
        updateDisplay(); // Обновляем экран
        saveProgress(); // Сохраняем прогресс
    } else {
        alert("Недостаточно поинтов!"); // Если поинтов не хватает
    }
}
// Покупка улучшения 3
function buyUpgrade3() {
    if (balance >= 10000) {
        balance -=10000;
        tapValue += 1000;
        updateDisplay();
        saveProgress();
    } else {
        alert ("Недостаточно поинтов!");
    }
}

// Привязка событий
buttonTap.addEventListener("click", addScore); // По клику увеличиваем баланс
upgradeTabButton.addEventListener("click", showUpgradeTab); // Переход в улучшения
backToGame.addEventListener("click", backToGameTab); // Возврат в игру
upgrade1.addEventListener("click", buyUpgrade1); // Покупка улучшения 1
upgrade2.addEventListener("click", buyUpgrade2); // Покупка улучшения 2
upgrade3.addEventListener("click", buyUpgrade3)  // Покупка улучшения 3

// Загрузка прогресса при старте игры
loadProgress();

// === Блокировка прокрутки для Telegram Mini Apps ===

// Полностью блокируем свайпы и прокрутку
document.addEventListener("touchmove", (e) => {
    e.preventDefault();
}, { passive: false });

document.addEventListener("gesturestart", (e) => {
    e.preventDefault();
});

// Отключение масштабирования
document.addEventListener("dblclick", (e) => {
    e.preventDefault();
});
