const pets = [
  { id: 0, species: "Dog", breed: "Golden Retriever", name: "Max" },
  { id: 1, species: "Cat", breed: "Siamese", name: "Luna" },
  { id: 2, species: "Rabbit", breed: "Dutch", name: "Bella" },
];

module.exports = { pets };

// let petIndex = pets.find((pet) => pet.id === 1);

// petIndex = {
//   ...petIndex,
//   id: "12",
// };

// console.log(petIndex);

// Function to edit a pet's breed or name
// function editPet(petId, newBreed, newName) {
//   pets.map((pet) => {
//     if (pet.id === petId) {
//       pet.breed = newBreed;
//       pet.name = newName;
//     }
//     return pet;
//   });
// }

// // Example usage: Editing the breed and name of the pet with id 1
// console.log(pets);
// editPet(1, "New Coon", "New");

// console.log(pets);

//   In this updated code, the editPet function uses the map method to iterate over each pet object in the pets array. If the id of a pet matches the given petId, it updates the breed and name properties directly on the pet object. The return statement within the map callback is not necessary since we are modifying the original pets array in place.

//   In the example usage, we edit the breed and name of the pet with ID 1 to "Maine Coon" and "Leo" respectively. The pets array will be updated with the modified pet information, and you can verify the changes by logging the pets array to the console.

// function filterBySpecies(species) {
//   const filteredPest = pets.filter((pet) => pet.species.toLowerCase() == species.toLowerCase());
//   console.log(filteredPest);
// }

// filterBySpecies("rabbiT");

// function editPetInfoById(id) {
//   const updatePetInfo = pets.map((pet) =>
//     pet.id === id ? { ...pet, breed: "NewBreed", name: "NewName" } : pet
//   );

//   return updatePetInfo;
// }

// function editPetInfoById(id) {
//   const updatePetInfo = pets.map((pet) =>
//     pet.id === id ? { ...pet, breed: "NewBreed", name: "NewName" } : pet
//   );

//   return updatePetInfo;
// }

// console.log(editPetInfoById(1));

// console.log(pets);
