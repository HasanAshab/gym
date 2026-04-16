// State
let currentDayIndex = 0;
const setStates = {};

// DOM Elements
const daySelector = document.getElementById('daySelector');
const exerciseGrid = document.getElementById('exerciseGrid');
const gifOverlay = document.getElementById('gifOverlay');
const gifImage = document.getElementById('gifImage');
const closeBtn = document.getElementById('closeBtn');
const videoElement = document.getElementById('videoElement');

// Initialize app
function init() {
    // Get current day
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = dayNames[new Date().getDay()];
    
    // Find matching day index
    currentDayIndex = DAYS.findIndex(day => day.name === today);
    if (currentDayIndex === -1) currentDayIndex = 0;
    
    renderDaySelector();
    renderExercises(currentDayIndex);
    setupEventListeners();
    registerServiceWorker();
}

// Render day selector tabs
function renderDaySelector() {
    daySelector.innerHTML = DAYS.map((day, index) => `
        <div class="day-tab ${index === currentDayIndex ? 'active' : ''}" data-index="${index}">
            <div class="day-name">${day.name}</div>
            <div class="day-target">${day.targets}</div>
        </div>
    `).join('');
}

// Render exercises for selected day
function renderExercises(dayIndex) {
    const dayExercises = EXERCISES.filter(ex => ex.days.includes(dayIndex));
    const dayTarget = DAYS[dayIndex].targets;
    
    if (dayExercises.length === 0) {
        exerciseGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999;">No exercises scheduled for this day</p>';
        return;
    }
    
    exerciseGrid.innerHTML = dayExercises.map((exercise, idx) => {
        const exerciseId = `${dayIndex}-${idx}`;
        if (!setStates[exerciseId]) {
            setStates[exerciseId] = Array(exercise.sets).fill(false);
        }
        
        return `
            <div class="exercise-card">
                <div class="card-thumbnail">
                    <img src="${exercise.thumbnail}" alt="${exercise.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22280%22 height=%22180%22%3E%3Crect fill=%22%231a1a1a%22 width=%22280%22 height=%22180%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23666%22 font-family=%22sans-serif%22%3ENo Image%3C/text%3E%3C/svg%3E'">
                    <button class="play-btn" data-video="${exercise.video}">▶</button>
                </div>
                <div class="card-content">
                    <div class="exercise-name">${exercise.name}</div>
                    <div class="exercise-target">${dayTarget}</div>
                    <div class="sets-info">${exercise.sets} sets</div>
                    <div class="set-tracker">
                        ${Array(exercise.sets).fill(0).map((_, setIdx) => `
                            <button class="set-indicator ${setStates[exerciseId][setIdx] ? 'done' : ''}" 
                                    data-exercise="${exerciseId}" 
                                    data-set="${setIdx}">
                                ${setIdx + 1}
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Day selector
    daySelector.addEventListener('click', (e) => {
        const tab = e.target.closest('.day-tab');
        if (!tab) return;
        
        currentDayIndex = parseInt(tab.dataset.index);
        
        document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        renderExercises(currentDayIndex);
    });
    
    // Exercise grid (play buttons and set trackers)
    exerciseGrid.addEventListener('click', (e) => {
        // Play button
        const playBtn = e.target.closest('.play-btn');
        if (playBtn) {
            const videoSrc = playBtn.dataset.video;
            showVideo(videoSrc);
            return;
        }
        
        // Set indicator
        const setIndicator = e.target.closest('.set-indicator');
        if (setIndicator) {
            const exerciseId = setIndicator.dataset.exercise;
            const setIdx = parseInt(setIndicator.dataset.set);
            
            setStates[exerciseId][setIdx] = !setStates[exerciseId][setIdx];
            setIndicator.classList.toggle('done');
        }
    });
    
    // Close video overlay
    closeBtn.addEventListener('click', hideVideo);
    gifOverlay.addEventListener('click', (e) => {
        if (e.target === gifOverlay) hideVideo();
    });
    
    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && gifOverlay.classList.contains('show')) {
            hideVideo();
        }
    });
}

// Show video overlay
function showVideo(src) {
    if (videoElement) {
        videoElement.src = src;
        videoElement.style.display = 'block';
        gifImage.style.display = 'none';
        videoElement.play();
    } else {
        // Fallback to image if video element doesn't exist
        gifImage.src = src;
        gifImage.style.display = 'block';
    }
    gifOverlay.classList.add('show');
}

// Hide video overlay
function hideVideo() {
    gifOverlay.classList.remove('show');
    setTimeout(() => {
        if (videoElement) {
            videoElement.pause();
            videoElement.src = '';
        }
        gifImage.src = '';
    }, 300);
}

// Register service worker
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed:', err));
    }
}

// Start app
init();
