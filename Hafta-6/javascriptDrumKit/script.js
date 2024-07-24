// Select all drum buttons
const drums = document.querySelectorAll('.drum');

// Add click event listener to each drum button
drums.forEach(drum => {
    drum.addEventListener('click', () => {
        playSound(drum);  // Play the sound and start the animation for the clicked button
    });
});

// Add event listener for keyboard keydown events
document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();  // Convert the pressed key to uppercase
    const drum = document.querySelector(`.drum[data-sound="${key}"]`);  // Select the drum button related to the pressed key
    if (drum) playSound(drum);  // If the button exists, play its sound and start the animation
});

// Function to play sound and start animation
function playSound(drum) {
    const sound = drum.getAttribute('data-sound');  // Get the 'data-sound' attribute of the button
    const audio = new Audio(`sounds/${sound}.wav`);  // Load the corresponding sound file
    audio.play();  // Play the sound
    
    drum.classList.add('playing');  // Add the 'playing' class to the button to start the animation
    setTimeout(() => {
        drum.classList.remove('playing');  // Remove the 'playing' class after a short duration
    }, 200);  // The animation ends after 200 milliseconds
}
