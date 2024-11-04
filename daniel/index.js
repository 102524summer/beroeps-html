const video = document.getElementById('background-video');
const videos = [
    'videos/Left 4 Dead 2 Menu Background.mp4',
    'videos/Left 4 Dead 2 - Swamp Fever.mp4', // Ensure this matches the renamed file if you did so
'videos/Left 4 Dead 2 - Dark Carnival.mp4'
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

