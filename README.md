# Gym Helper PWA

A fully static, offline-capable Progressive Web App for tracking gym workouts.

## Features

- 📱 Landscape-first design optimized for horizontal viewing
- 🔄 Automatic day detection - shows today's workout on load
- 💪 Exercise cards with thumbnails and GIF demonstrations
- ✅ Set tracker to mark completed sets
- 🌐 100% offline capable with service worker caching
- 🎨 Dark theme with orange accents

## Setup

1. Create the `assets` folder structure:
   ```
   assets/
   ├── images/     (place exercise thumbnail JPGs here)
   ├── gifs/       (place exercise demonstration GIFs here)
   └── icons/      (place PWA icons here)
   ```

2. Add your exercise images and GIFs matching the filenames in `data.js`

3. Create PWA icons:
   - `assets/icons/icon-192.png` (192x192px)
   - `assets/icons/icon-512.png` (512x512px)

4. Serve the app using a local web server:
   ```
   npx serve .
   ```
   Or use Python:
   ```
   python -m http.server 8000
   ```

5. Open in browser and install as PWA (look for install prompt)

## Customization

Edit `data.js` to customize:
- `DAYS` array: Define your training schedule
- `EXERCISES` array: Add/modify exercises and assign them to days

## File Structure

- `index.html` - Main HTML structure
- `styles.css` - Dark theme styling with landscape layout
- `app.js` - Core application logic
- `data.js` - Workout data (days and exercises)
- `service-worker.js` - Offline caching
- `manifest.json` - PWA configuration
# gym
