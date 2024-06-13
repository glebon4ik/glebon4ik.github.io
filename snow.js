function createSnowFlake() {
    const snowFlake = document.createElement('div');
    snowFlake.classList.add('snowflake');
    snowFlake.innerHTML = '&#10052;'; // Символ снежинки из Unicode
    snowFlake.style.left = `${Math.random() * window.innerWidth}px`;
    snowFlake.style.animationDuration = `${Math.random() * 5 + 3}s`;
    snowFlake.style.opacity = Math.random();
    snowFlake.style.fontSize = `${Math.random() * 10 + 10}px`;

    snowFlake.style.position = 'fixed'; // Изменено с 'absolute' на 'fixed'
    snowFlake.style.top = '0'; // Добавлено

    document.body.appendChild(snowFlake);

    setTimeout(() => {
        snowFlake.remove();
    }, parseFloat(snowFlake.style.animationDuration) * 1000);
}

function initSnowEffect() {
    setInterval(createSnowFlake, 500); // Увеличена частота создания снежинок
}

document.addEventListener('DOMContentLoaded', initSnowEffect);
