document.addEventListener('DOMContentLoaded', () => {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const numberOfSnowflakes = 100;

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('i');
        snowflake.classList.add('fa-regular', 'fa-snowflake','snowflake');
        
        const size = Math.random() * 20 + 10 + 'px';
        snowflake.style.fontSize = size;
        
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.opacity = Math.random() * 1 ;
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.animationDelay = Math.random() * 20 + 's';
        
        snowflakesContainer.appendChild(snowflake);
    }
});
