const { pets } = require("./pet_store");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/pets", (req, res) => {
  res.send(pets);
});

app.get("/api/pets/species/:species", (req, res) => {
  const species = req.params.species;
  const filteredPets = pets.filter(
    (pet) => pet.species.toLocaleLowerCase() == species.toLocaleLowerCase()
  );

  res.send(filteredPets);
});

app.put("/api/pets/:id", (req, res) => {
  const petId = Number(req.params.id);

  const petIndex = pets.findIndex((pet) => pet.id === petId);

  if (petIndex !== -1) {
    const newData = (pets[petIndex] = {
      ...pets[petIndex],
      ...req.body,
    });
    res.send(newData);
  }

  //   let newdata;
  //   pets.map((pet) => {
  //     if (pet.id === petId) {
  //       pet.species = req.body.species;
  //       pet.breed = req.body.breed;
  //       pet.name = req.body.name;
  //     }
  //     newdata = pet;
  //   });

  //   res.send(newdata);

  //   pets.map((pet) =>
  //     pet.id === petId
  //       ? { ...pet, species: req.body.species, breed: req.body.breed, name: req.body.name }
  //       : pet
  //   );
  //   res.send(pet);
});

// app.put("/api/pets/:id", (req, res) => {
//   let book = false;
//   for (let i = 0; i < pets.length; i++) {
//     if (pets[i].id == Number(req.params.id)) {
//       book = pets[i];
//       break;
//     }
//   }

//   console.log(book);

//   if (book) {
//     console.log(req.body);
//     book.name = req.body.name;
//     book.species = req.body.species;
//     book.breed = req.body.breed;
//     res.send(book);
//   } else {
//     res.status(404);
//     res.send("Book not found!");
//   }
// });

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
