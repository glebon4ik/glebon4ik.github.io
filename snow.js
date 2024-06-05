function createSnowFlake() {
    const snowFlake = document.createElement('div');
    snowFlake.classList.add('snowflake');
    snowFlake.innerHTML = '&#10052;'; // Символ снежинки из Unicode
    snowFlake.style.left = Math.random() * window.innerWidth + 'px';
    snowFlake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowFlake.style.opacity = Math.random();
    snowFlake.style.fontSize = Math.random() * 10 + 10 + 'px';

    console.log("Creating snowflake at: ", snowFlake.style.left, snowFlake.style.animationDuration); // Отладочное сообщение

    document.body.appendChild(snowFlake);

    setTimeout(() => {
        snowFlake.remove();
    }, 5000);
}

setInterval(createSnowFlake, 50);
console.log("Snow effect initialized"); // Отладочное сообщение
