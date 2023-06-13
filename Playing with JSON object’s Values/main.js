const fs = require('fs');

const data = JSON.parse(fs.readFileSync("./problem1.json", "utf8"));

console.log("Old name:" + data.name);


data.name = 'Fluffyy';
data.height = "20cm";
data.weight = "10kg";

console.log("updated name: " + data.name + "\n Height: " + data.height +"\n Weight: " + data.weight);

data.catFriends.forEach(cat => {
    console.log(cat.name + "'s activities: " + cat.activities);
});


data.catFriends.forEach(cat => {
    console.log(cat.name);
});

let totalWeight = 0;
data.catFriends.forEach(cat => {
    totalWeight += cat.weight;
});


console.log("Total weight of catFriends: " + totalWeight);

const activitie = () =>{
    let totalActivities = data.activities.length;
data.catFriends.forEach(cat => {
    totalActivities += cat.activities.length;
});
return totalActivities
} 

console.log("Total activities of all cats: " + activitie());

data.catFriends[0].activities.push("incessant meowing");
data.catFriends[0].activities.push("Scratching furniture");
data.catFriends[1].activities.push("zooming around the house");
data.catFriends[1].activities.push("sinisterly staring at humans");

console.log("New total activities of all cats: " + activitie());


data.catFriends.forEach(cat => {
    console.log(cat.name + "'s updated activities: " + cat.activities);
});


data.catFriends[0].furcolor = "green!";

console.log("Bar's fur color: " + data.catFriends[0].furcolor);