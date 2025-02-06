// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;
tg.expand(); // Развернуть приложение на весь экран

// Функция для загрузки YouTube видео
function loadYouTubeVideo(videoUrl) {
    const videoId = extractVideoId(videoUrl);
    if (!videoId) {
        alert("Некорректная ссылка на YouTube!");
        return;
    }

    const playerDiv = document.getElementById('player');
    playerDiv.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
}

// Функция для извлечения ID видео из ссылки
function extractVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// Обработка нажатия кнопки
document.getElementById('play-button').addEventListener('click', () => {
    const youtubeUrl = document.getElementById('youtube-url').value;
    loadYouTubeVideo(youtubeUrl);
});
