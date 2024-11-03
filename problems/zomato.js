async function getLion(){
    return "🦁";
}

const lion = await getLion();

console.log(lion === "🦁");  // This will log true

