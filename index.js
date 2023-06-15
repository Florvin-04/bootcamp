import { name, age, personDetails, LocationData } from "./person.js";



const extractObjectKeys = (object) => {
  let objectKeys = [];

  Object.keys(object).forEach((objectKey) => {
    const value = object[objectKey];

    // console.log("sad", value);

    if (typeof value !== "object") {
      objectKeys.push(objectKey);
    } else {
      // console.log("value", extractObjectKeys(value));
      objectKeys = [...objectKeys, ...extractObjectKeys(value)];
    }
  });
  return objectKeys;
};

// const extractObjectKeys = (object) => {
//   let objectKeys = [];

//   Object.keys(object).forEach((objectKey) => {
//     const value = object[objectKey];

//     console.log(`Processing key: ${objectKey}`);

//     if (typeof value !== "object") {
//       objectKeys.push(objectKey);
//       console.log(`Pushed key: ${objectKey}`);
//     } else {
//       console.log(`Recursing into key: ${objectKey}`);
//       objectKeys = [...objectKeys, ...extractObjectKeys(value)];
//       console.log(`Returned keys from recursion: ${objectKeys}`);
//     }
//   });
//   return objectKeys;
// };

const locationObj = {
  location: {
    street: {
      number: 4750,
      name: "Queenstown Road",
      // fullName: { fName: "vin", lName: "Ba", mName: { Suffix: "Jr" } },
    },
    city: "Taupo",
    state: "Northland",
    country: "New Zealand",
    postcode: 46063,
    coordinates: {
      latitude: "49.7024",
      longitude: "-114.2732",
    },
  },
};

const keys = extractObjectKeys(locationObj);
console.log(keys);

// const a = {
//   number: 4750,
//   name: "Queenstown Road",
// };

// Object.keys(a).forEach((objectKey) => {
//   const value = a[objectKey];

//   console.log("Val", value);
// });
