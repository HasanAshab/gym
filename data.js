const DAYS = [
    { name: "Saturday", targets: "leg" },
    { name: "Sunday", targets: "rest" },
    { name: "Monday", targets: "chest" },
    { name: "Tuesday", targets: "back" },
    { name: "Wednesday", targets: "Arms" },
    { name: "Thursday", targets: "ABS + Forearms" },
    { name: "Friday", targets: "Shoulders" }
];

const EXERCISES = [
        {
        name: "Floor dumbell press",
        sets: 3,
        thumbnail: "assets/images/floor-dumbell-press.jpg",
        video: "assets/videos/floor-dumbell-press.mp4",
        days: [2]
    },  

    {
        name: "Decline Push Ups",
        sets: 3,
        thumbnail: "assets/images/decline-push-ups.jpg",
        video: "assets/videos/decline-push-ups.mp4",
        days: [2]
    },  
      {
        name: "Incline Push Ups",
        sets: 3,
        thumbnail: "assets/images/incline-push-ups.jpg",
        video: "assets/videos/incline-push-ups.mp4",
        days: [2]
    },
    {
        name: "Standing dumbell scoop",
        sets: 3,
        thumbnail: "assets/images/standing-dumbell-scoop.jpg",
        video: "assets/videos/standing-dumbell-scoop.mp4",
        days: [2]
    },
   {
    name: "Dumbell squeze bench press",
    sets: 3,
    thumbnail: "assets/images/dumbell-squeeze-bench-press.jpg",
    video: "assets/videos/dumbell-squeeze-bench-press.mp4",
    days: [2]
   },
 { 
    name: "One arm dumbell row",
    sets: 3,
    thumbnail: "assets/images/one-arm-dumbell-row.jpg",
    video: "assets/videos/one-arm-dumbell-row.mp4",
    days: [3]
 },
 {
    name:"Dumbell pull over",
    sets: 3,
    thumbnail: "assets/images/dumbell-pull-over.jpg",
    video: "assets/videos/dumbell-pull-over.mp4",
    days: [3]
 },
 {
    name:"Reverse grip dumbell bend over row",
    sets: 3,
    thumbnail: "assets/images/reverse-grip-dumbell-bend-over-row.jpg",
    video: "assets/videos/reverse-grip-dumbell-bend-over-row.mp4",
    days: [3]
 },
 {
     name: "Dumble Romanian deadlift",
     sets: 3,
     thumbnail: "assets/images/dumbell-romanian-deadlift.jpg",
     video: "assets/videos/dumbell-romanian-deadlift.mp4",
     days: [3]
 },
 {
     name: "Medium grip pull ups",
     sets: 3,
     thumbnail: "assets/images/medium-grip-pull-ups.jpg",
     video: "assets/videos/medium-grip-pull-ups.mp4",
     days: [3]
 },
{
    name: "Alternating dumbell curl",
    sets: 3,
    thumbnail: "assets/images/alternating-dumbell-curl.jpg",
    video: "assets/videos/alternating-dumbell-curl.mp4",
    days: [4]
} ,
{
    name: "dumbell conertation curls",
    sets: 3,
    thumbnail: "assets/images/dumbell-concentration-curls.jpg",
    video: "assets/videos/dumbell-concentration-curls.mp4",
    days: [4]
},
{
    name: " Dumbell hammer curls",
    sets: 3,
    thumbnail: "assets/images/dumbell-hammer-curls.jpg",
    video: "assets/videos/dumbell-hammer-curls.mp4",
    days: [4]
},
{ 
    name: "Seated dumbell triceps extension",
    sets: 3,
    thumbnail: "assets/images/seated-dumbell-triceps-extension.jpg",
    video: "assets/videos/seated-dumbell-triceps-extension.mp4",
    days: [4]
},
{ 
    name: "Floor dumbell skull crusher",
    sets: 3,
    thumbnail: "assets/images/floor-dumbell-skull-crusher.jpg",
    video: "assets/videos/floor-dumbell-skull-crusher.mp4",
    days: [4]
},
{
    name: "Bench dips",
    sets: 3,
    thumbnail: "assets/images/bench-dips.jpg",
    video: "assets/videos/bench-dips.mp4",
    days: [4]
},
{
    name: "Crunches",
    sets: 3,
    thumbnail: "assets/images/crunches.jpg",
    video: "assets/videos/crunches.mp4",
    days: [5]
},
{
    name: "Lying leg raises",
    sets: 3,
    thumbnail: "assets/images/lying-leg-raises.jpg",
    video: "assets/videos/lying-leg-raises.mp4",
    days: [5]
},
{
    name: "Alternating heel touches",
    sets: 3,
    thumbnail: "assets/images/alternating-heel-touches.jpg",
    video: "assets/videos/alternating-heel-touches.mp4",
    days: [5]
},
{
    name: "Plank",
    sets: 3,
    thumbnail: "assets/images/plank.jpg",
    video: "assets/videos/plank.mp4",
    days: [5]
},
{
    name: "Dumbell reverse wrist curls",
    sets: 3,
    thumbnail: "assets/images/dumbell-reverse-wrist-curls.jpg",
    video: "assets/videos/dumbell-reverse-wrist-curls.mp4",
    days: [5]
},
{
    name: "Dumbell wrist curls",
    sets: 3,
    thumbnail: "assets/images/dumbell-wrist-curls.jpg",
    video: "assets/videos/dumbell-wrist-curls.mp4",
    days: [5]
},
{
    name: "Seated Dumbell Shoulder Press",
    sets: 3,
    thumbnail: "assets/images/seated-dumbell-shoulder-press.jpg",
    video: "assets/videos/seated-dumbell-shoulder-press.mp4",
    days: [6]
},
{
    name: "Soulder lateral raises",
    sets: 3,
    thumbnail: "assets/images/shoulder-lateral-raises.jpg",
    video: "assets/videos/shoulder-lateral-raises.mp4",
    days: [6]
},
{
    name: "alternating dumbell front raises",
    sets: 3,
    thumbnail: "assets/images/alternating-dumbell-front-raises.jpg",
    video: "assets/videos/alternating-dumbell-front-raises.mp4",
    days: [6]
},
{
    name: "dumbell rear lateral raises",
    sets: 3,
    thumbnail: "assets/images/dumbell-rear-lateral-raises.jpg",
    video: "assets/videos/dumbell-rear-lateral-raises.mp4",
    days: [6]
},
{
    name: "shrug",
    sets: 3,
    thumbnail: "assets/images/shrug.jpg",
    video: "assets/videos/shrug.mp4",
    days: [6]
},
{
    name: "dumbell goblet squats",
    sets: 3,
    thumbnail: "assets/images/dumbell-goblet-squats.jpg",
    video: "assets/videos/dumbell-goblet-squats.mp4",
    days: [0]
},
{
    name: "dumbell split squats",
    sets: 3,
    thumbnail: "assets/images/dumbell-split-squats.jpg",
    video: "assets/videos/dumbell-split-squats.mp4",
    days: [0]
},
{
    name: "dumbell lying hamstring curl",
    sets: 3,
    thumbnail: "assets/images/dumbell-lying-hamstring-curl.jpg",
    video: "assets/videos/dumbell-lying-hamstring-curl.mp4",
    days: [0]
},
{
    name: "dumbell stiff leg deadlift",
    sets: 3,
    thumbnail: "assets/images/dumbell-stiff-leg-deadlift.jpg",
    video: "assets/videos/dumbell-stiff-leg-deadlift.mp4",
    days: [0]
},
{
    name: "chair supported calf raise",
    sets: 3,
    thumbnail: "assets/images/chair-supported-calf-raise.jpg",
    video: "assets/videos/chair-supported-calf-raise.mp4",
    days: [0]
},
];
