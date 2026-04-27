const DAYS = [
    { name: "Saturday", targets: "chest" },
    { name: "Sunday", targets: "back" },
    { name: "Monday", targets: "Arms" },
    { name: "Tuesday", targets: "ABS + Forearms" },
    { name: "Wednesday", targets: "Shoulders" },
    { name: "Thursday", targets: "leg" },
    { name: "Friday", targets: "rest" },
];

const EXERCISES = [
        {
        name: "Floor dumbell press",
        sets: 3,
        thumbnail: "assets/images/floor-dumbell-press.png",
        video: "assets/videos/floor-dumbell-press.mp4",
        days: [0]
    },
    {
        name: "Decline Push Ups",
        sets: 3,
        thumbnail: "assets/images/decline-push-ups.png",
        video: "assets/videos/decline-push-ups.mp4",
        days: [0]
    },  
      {
        name: "Incline Push Ups",
        sets: 3,
        thumbnail: "assets/images/incline-push-ups.png",
        video: "assets/videos/incline-push-ups.mp4",
        days: [0]
    },
    {
        name: "Standing dumbell scoop",
        sets: 3,
        thumbnail: "assets/images/standing-dumbell-scoop.png",
        video: "assets/videos/standing-dumbell-scoop.mp4",
        days: [0]
    },
   {
    name: "Dumbell squeze bench press",
    sets: 3,
    thumbnail: "assets/images/dumbell-squeeze-bench-press.png",
    video: "assets/videos/dumbell-squeeze-bench-press.mp4",
    days: [0]
   },
 { 
    name: "One arm dumbell row",
    sets: 3,
    thumbnail: "assets/images/one-arm-dumbell-row.png",
    video: "assets/videos/one-arm-dumbell-row.mp4",
    days: [1]
 },
 {
    name:"Dumbell pull over",
    sets: 3,
    thumbnail: "assets/images/dumbell-pull-over.png",
    video: "assets/videos/dumbell-pull-over.mp4",
    days: [1]
 },
 {
    name:"Reverse grip dumbell bend over row",
    sets: 3,
    thumbnail: "assets/images/reverse-grip-dumbell-bend-over-row.png",
    video: "assets/videos/reverse-grip-dumbell-bend-over-row.mp4",
    days: [1]
 },
 {
     name: "Dumble Romanian deadlift",
     sets: 3,
     thumbnail: "assets/images/dumbell-romanian-deadlift.png",
     video: "assets/videos/dumbell-romanian-deadlift.mp4",
     days: [1]
 },
 {
     name: "Medium grip pull ups",
     sets: 3,
     thumbnail: "assets/images/medium-grip-pull-ups.png",
     video: "assets/videos/medium-grip-pull-ups.mp4",
     days: [1]
 },
{
    name: "Alternating dumbell curl",
    sets: 3,
    thumbnail: "assets/images/alternating-dumbell-curl.png",
    video: "assets/videos/alternating-dumbell-curl.mp4",
    days: [2]
} ,
{
    name: "dumbell conertation curls",
    sets: 3,
    thumbnail: "assets/images/dumbell-concentration-curls.png",
    video: "assets/videos/dumbell-concentration-curls.mp4",
    days: [2]
},
{
    name: "Dumbell hammer curls",
    sets: 3,
    thumbnail: "assets/images/dumbell-hammer-curls.png",
    video: "assets/videos/dumbell-hammer-curls.mp4",
    days: [2]
},
{ 
    name: "Seated dumbell triceps extension",
    sets: 3,
    thumbnail: "assets/images/seated-dumbell-triceps-extension.png",
    video: "assets/videos/seated-dumbell-triceps-extension.mp4",
    days: [2]
},
{ 
    name: "Floor dumbell skull crusher",
    sets: 3,
    thumbnail: "assets/images/floor-dumbell-skull-crusher.png",
    video: "assets/videos/floor-dumbell-skull-crusher.mp4",
    days: [2]
},
{
    name: "Bench dips",
    sets: 3,
    thumbnail: "assets/images/bench-dips.png",
    video: "assets/videos/bench-dips.mp4",
    days: [2]
},
{
    name: "Crunches",
    sets: 3,
    thumbnail: "assets/images/crunches.png",
    video: "assets/videos/crunches.mp4",
    days: [3]
},
{
    name: "Lying leg raises",
    sets: 3,
    thumbnail: "assets/images/lying-leg-raises.png",
    video: "assets/videos/lying-leg-raises.mp4",
    days: [3]
},
{
    name: "Alternating heel touches",
    sets: 3,
    thumbnail: "assets/images/alternating-heel-touches.png",
    video: "assets/videos/alternating-heel-touches.mp4",
    days: [3]
},
{
    name: "Plank",
    sets: 3,
    thumbnail: "assets/images/plank.png",
    video: "assets/videos/plank.mp4",
    days: [3]
},
{
    name: "Dumbell reverse wrist curls",
    sets: 3,
    thumbnail: "assets/images/dumbell-reverse-wrist-curls.png",
    video: "assets/videos/dumbell-reverse-wrist-curls.mp4",
    days: [3]
},
{
    name: "Dumbell wrist curls",
    sets: 3,
    thumbnail: "assets/images/dumbell-wrist-curls.png",
    video: "assets/videos/dumbell-wrist-curls.mp4",
    days: [3]
},
{
    name: "Seated Dumbell Shoulder Press",
    sets: 3,
    thumbnail: "assets/images/seated-dumbell-shoulder-press.png",
    video: "assets/videos/seated-dumbell-shoulder-press.mp4",
    days: [4]
},
{
    name: "Soulder lateral raises",
    sets: 3,
    thumbnail: "assets/images/shoulder-lateral-raises.png",
    video: "assets/videos/shoulder-lateral-raises.mp4",
    days: [4]
},
{
    name: "alternating dumbell front raises",
    sets: 3,
    thumbnail: "assets/images/alternating-dumbell-front-raises.png",
    video: "assets/videos/alternating-dumbell-front-raises.mp4",
    days: [4]
},
{
    name: "dumbell rear lateral raises",
    sets: 3,
    thumbnail: "assets/images/dumbell-rear-lateral-raises.png",
    video: "assets/videos/dumbell-rear-lateral-raises.mp4",
    days: [4]
},
{
    name: "shrug",
    sets: 3,
    thumbnail: "assets/images/shrug.png",
    video: "assets/videos/shrug.mp4",
    days: [4]
},
{
    name: "dumbell goblet squats",
    sets: 3,
    thumbnail: "assets/images/dumbell-goblet-squats.png",
    video: "assets/videos/dumbell-goblet-squats.mp4",
    days: [5]
},
{
    name: "dumbell split squats",
    sets: 3,
    thumbnail: "assets/images/dumbell-split-squats.png",
    video: "assets/videos/dumbell-split-squats.mp4",
    days: [5]
},
{
    name: "dumbell lying hamstring curl",
    sets: 3,
    thumbnail: "assets/images/dumbell-lying-hamstring-curl.png",
    video: "assets/videos/dumbell-lying-hamstring-curl.mp4",
    days: [5]
},
{
    name: "dumbell stiff leg deadlift",
    sets: 3,
    thumbnail: "assets/images/dumbell-stiff-leg-deadlift.png",
    video: "assets/videos/dumbell-stiff-leg-deadlift.mp4",
    days: [5]
},
{
    name: "chair supported calf raise",
    sets: 3,
    thumbnail: "assets/images/chair-supported-calf-raise.png",
    video: "assets/videos/chair-supported-calf-raise.mp4",
    days: [5]
},
];
