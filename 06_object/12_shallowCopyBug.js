const original = { name: "Kunal", scores: [95, 87, 92] };

const copy = structuredClone(original);
copy.scores.push(100);
console.log(original.scores);