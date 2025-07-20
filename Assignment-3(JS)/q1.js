const states = ["Uttar Pradesh", "Odisha", "Maharashtra", "Andhra Pradesh", "Gujarat", "Rajasthan", "Assam"];
const filteredStates = states.filter(state => !/^[AEIOUaeiou]/.test(state));
console.log(filteredStates);
