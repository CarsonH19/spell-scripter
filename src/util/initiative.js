// export function roll20(bonus = 0) {
//   return Math.floor(Math.random() * 21) + bonus;
// }

// export function setInitiative(heroes, enemies, player) {
//   const all = [...heroes, ...enemies, player];

//   const charactersWithInitiative = all.map(character => ({
//     character,
//     initiative:  Math.floor(Math.random() * 21) + character.stats.agility; 
//   }));

//   charactersWithInitiative.sort((a, b) => b.initiative - a.initiative);

//   const initiativeOrder = charactersWithInitiative.map(character => character.character);

//   console.log(initiativeOrder);

//   return initiativeOrder;
// }

