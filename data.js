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
        gif: "assets/gifs/floor-dumbell-press.gif",
        days: [2]
    },  

    {
        name: "Decline Push Ups",
        sets: 3,
        thumbnail: "assets/images/decline-push-ups.jpg",
        gif: "assets/gifs/decline-push-ups.gif",
        days: [2]
    },  
      {
        name: "Incline Push Ups",
        sets: 3,
        thumbnail: "assets/images/incline-push-ups.jpg",
        gif: "assets/gifs/incline-push-ups.gif",
        days: [2]
    },
    {
        name: "Standing dumbell scoop",
        sets: 3,
        thumbnail: "assets/images/standing-dumbell-scoop.jpg",
        gif: "assets/gifs/standing-dumbell-scoop.gif",
        days: [2]
    },
   {
    name: "Dumbell squeze bench press",
    sets: 3,
    thumbnail: "assets/images/dumbell-squeeze-bench-press.jpg",
    gif: "assets/gifs/dumbell-squeeze-bench-press.gif",
    days: [2]
   },
 { 
    name: "One arm dumbell row",
    sets: 3,
    thumbnail: "assets/images/one-arm-dumbell-row.jpg",
    gif: "assets/gifs/one-arm-dumbell-row.gif",
    days: [3]
 },
 {
    name:"Dumbell pull over",
    sets: 3,
    thumbnail: "assets/images/dumbell-pull-over.jpg",
    gif: "assets/gifs/dumbell-pull-over.gif",
    days: [3]
 },
 {
    name:"Reverse grip dumbell bend over row",
    sets: 3,
    thumbnail: "assets/images/reverse-grip-dumbell-bend-over-row.jpg",
    gif: "assets/gifs/reverse-grip-dumbell-bend-over-row.gif",
    days: [3]
 },
 {
     name: "Dumble Romanian deadlift",
     sets: 3,
     thumbnail: "assets/images/dumbell-romanian-deadlift.jpg",
     gif: "assets/gifs/dumbell-romanian-deadlift.gif",
     days: [3]
 },
 {
     name: "Medium grip pull ups",
     sets: 3,
     thumbnail: "assets/images/medium-grip-pull-ups.jpg",
     gif: "assets/gifs/medium-grip-pull-ups.gif",
     days: [3]
 },
{
    name: "Alternating dumbell curl",
    sets: 3,
    thumbnail: "assets/images/alternating-dumbell-curl.jpg",
    gif: "assets/gifs/alternating-dumbell-curl.gif",
    days: [4]
} ,
{
    name: "dumbell conertation curls",
    sets: 3,
    thumbnail: "assets/images/dumbell-concentration-curls.jpg",
    gif: "assets/gifs/dumbell-concentration-curls.gif",
    days: [4]
},
{
    name: " Dumbell hammer curls",
    sets: 3,
    thumbnail: "assets/images/dumbell-hammer-curls.jpg",
    gif: "assets/gifs/dumbell-hammer-curls.gif",
    days: [4]
},
{ 
    name: "Seated dumbell triceps extension",
    sets: 3,
    thumbnail: "assets/images/seated-dumbell-triceps-extension.jpg",
    gif: "assets/gifs/seated-dumbell-triceps-extension.gif",
    days: [4]
},
{ 
    name: "Floor dumbell skull crusher",
    sets: 3,
    thumbnail: "assets/images/floor-dumbell-skull-crusher.jpg",
    gif: "assets/gifs/floor-dumbell-skull-crusher.gif",
    days: [4]
},
{
    name: "Bench dips",
    sets: 3,
    thumbnail: "assets/images/bench-dips.jpg",
    gif: "assets/gifs/bench-dips.gif",
    days: [4]
},
{
    name: "Crunches",
    sets: 3,
    thumbnail: "assets/images/crunches.jpg",
    gif: "assets/gifs/crunches.gif",
    days: [5]
},
{
    name: "Lying leg raises",
    sets: 3,
    thumbnail: "assets/images/lying-leg-raises.jpg",
    gif: "assets/gifs/lying-leg-raises.gif",
    days: [5]
},
{
    name: "Alternating heel touches",
    sets: 3,
    thumbnail: "assets/images/alternating-heel-touches.jpg",
    gif: "assets/gifs/alternating-heel-touches.gif",
    days: [5]
},
{
    name: "Plank",
    sets: 3,
    thumbnail: "assets/images/plank.jpg",
    gif: "assets/gifs/plank.gif",
    days: [5]
},
{
    name: "Dumbell reverse wrist curls",
    sets: 3,
    thumbnail: "assets/images/dumbell-reverse-wrist-curls.jpg",
    gif: "assets/gifs/dumbell-reverse-wrist-curls.gif",
    days: [5]
},
{
    name: "Dumbell wrist curls",
    sets: 3,
    thumbnail: "assets/images/dumbell-wrist-curls.jpg",
    gif: "assets/gifs/dumbell-wrist-curls.gif",
    days: [5]
},
{
    name: "Seated Dumbell Shoulder Press",
    sets: 3,
    thumbnail: "assets/images/seated-dumbell-shoulder-press.jpg",
    gif: "assets/gifs/seated-dumbell-shoulder-press.gif",
    days: [6]
},
{
    name: "Soulder lateral raises",
    sets: 3,
    thumbnail: "assets/images/shoulder-lateral-raises.jpg",
    gif: "assets/gifs/shoulder-lateral-raises.gif",
    days: [6]
},
{
    name: "alternating dumbell front raises",
    sets: 3,
    thumbnail: "assets/images/alternating-dumbell-front-raises.jpg",
    gif: "assets/gifs/alternating-dumbell-front-raises.gif",
    days: [6]
},
{
    name: "dumbell rear lateral raises",
    sets: 3,
    thumbnail: "assets/images/dumbell-rear-lateral-raises.jpg",
    gif: "assets/gifs/dumbell-rear-lateral-raises.gif",
    days: [6]
},
{
    name: "shrug",
    sets: 3,
    thumbnail: "assets/images/shrug.jpg",
    gif: "assets/gifs/shrug.gif",
    days: [6]
},
{
    name: "dumbell goblet squats",
    sets: 3,
    thumbnail: "assets/images/dumbell-goblet-squats.jpg",
    gif: "assets/gifs/dumbell-goblet-squats.gif",
    days: [0]
},
{
    name: "dumbell split squats",
    sets: 3,
    thumbnail: "assets/images/dumbell-split-squats.jpg",
    gif: "assets/gifs/dumbell-split-squats.gif",
    days: [0]
},
{
    name: "dumbell lying hamstring curl",
    sets: 3,
    thumbnail: "assets/images/dumbell-lying-hamstring-curl.jpg",
    gif: "assets/gifs/dumbell-lying-hamstring-curl.gif",
    days: [0]
},
{
    name: "dumbell stiff leg deadlift",
    sets: 3,
    thumbnail: "assets/images/dumbell-stiff-leg-deadlift.jpg",
    gif: "assets/gifs/dumbell-stiff-leg-deadlift.gif",
    days: [0]
},
{
    name: "chair supported calf raise",
    sets: 3,
    thumbnail: "assets/images/chair-supported-calf-raise.jpg",
    gif: "assets/gifs/chair-supported-calf-raise.gif",
    days: [0]
},
];
