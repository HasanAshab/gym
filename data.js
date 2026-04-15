const DAYS = [
    { name: "Saturday", targets: "Chest" },
    { name: "Sunday", targets: "Back" },
    { name: "Monday", targets: "Legs" },
    { name: "Tuesday", targets: "Shoulders" },
    { name: "Wednesday", targets: "Arms" },
    { name: "Thursday", targets: "Core" },
    { name: "Friday", targets: "Rest" }
];

const EXERCISES = [
    {
        name: "Incline Push Ups",
        sets: 3,
        thumbnail: "assets/images/incline-push-ups.jpg",
        gif: "assets/gifs/incline-push-ups.gif",
        days: [0]
    },
    {
        name: "Bench Press",
        sets: 4,
        thumbnail: "assets/images/bench-press.jpg",
        gif: "assets/gifs/bench-press.gif",
        days: [0]
    },
    {
        name: "Chest Fly",
        sets: 3,
        thumbnail: "assets/images/chest-fly.jpg",
        gif: "assets/gifs/chest-fly.gif",
        days: [0]
    },
    {
        name: "Pull Ups",
        sets: 3,
        thumbnail: "assets/images/pull-ups.jpg",
        gif: "assets/gifs/pull-ups.gif",
        days: [1]
    },
    {
        name: "Bent Over Row",
        sets: 4,
        thumbnail: "assets/images/bent-over-row.jpg",
        gif: "assets/gifs/bent-over-row.gif",
        days: [1]
    },
    {
        name: "Deadlift",
        sets: 3,
        thumbnail: "assets/images/deadlift.jpg",
        gif: "assets/gifs/deadlift.gif",
        days: [1, 2]
    },
    {
        name: "Squats",
        sets: 4,
        thumbnail: "assets/images/squats.jpg",
        gif: "assets/gifs/squats.gif",
        days: [2]
    },
    {
        name: "Lunges",
        sets: 3,
        thumbnail: "assets/images/lunges.jpg",
        gif: "assets/gifs/lunges.gif",
        days: [2]
    },
    {
        name: "Leg Press",
        sets: 4,
        thumbnail: "assets/images/leg-press.jpg",
        gif: "assets/gifs/leg-press.gif",
        days: [2]
    },
    {
        name: "Shoulder Press",
        sets: 4,
        thumbnail: "assets/images/shoulder-press.jpg",
        gif: "assets/gifs/shoulder-press.gif",
        days: [3]
    },
    {
        name: "Lateral Raises",
        sets: 3,
        thumbnail: "assets/images/lateral-raises.jpg",
        gif: "assets/gifs/lateral-raises.gif",
        days: [3]
    },
    {
        name: "Front Raises",
        sets: 3,
        thumbnail: "assets/images/front-raises.jpg",
        gif: "assets/gifs/front-raises.gif",
        days: [3]
    },
    {
        name: "Bicep Curls",
        sets: 3,
        thumbnail: "assets/images/bicep-curls.jpg",
        gif: "assets/gifs/bicep-curls.gif",
        days: [4]
    },
    {
        name: "Tricep Dips",
        sets: 3,
        thumbnail: "assets/images/tricep-dips.jpg",
        gif: "assets/gifs/tricep-dips.gif",
        days: [4]
    },
    {
        name: "Hammer Curls",
        sets: 3,
        thumbnail: "assets/images/hammer-curls.jpg",
        gif: "assets/gifs/hammer-curls.gif",
        days: [4]
    },
    {
        name: "Plank",
        sets: 3,
        thumbnail: "assets/images/plank.jpg",
        gif: "assets/gifs/plank.gif",
        days: [5]
    },
    {
        name: "Russian Twists",
        sets: 3,
        thumbnail: "assets/images/russian-twists.jpg",
        gif: "assets/gifs/russian-twists.gif",
        days: [5]
    },
    {
        name: "Leg Raises",
        sets: 3,
        thumbnail: "assets/images/leg-raises.jpg",
        gif: "assets/gifs/leg-raises.gif",
        days: [5]
    }
];
