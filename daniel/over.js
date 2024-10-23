const video = document.getElementById('background-video');
const videos = [
    'videos/The Passsing.mp4',
    'videos/Left 4 Dead 2 Batter Up', // Ensure this matches the renamed file if you did so
'videos/Left 4 Dead 2 - Official The Last Stand Update Trailer.mp4'
];
let currentvideo = 0;

video.src = videos[currentvideo];

// Play the video
video.play().catch(error => {
    console.error('Error trying to play the video:', error);
});

video.addEventListener('ended', () => {
    currentvideo = (currentvideo + 1) % videos.length;
    video.src = videos[currentvideo];
    video.play().catch(error => {
        console.error('Error trying to play the next video:', error);
    });
});

