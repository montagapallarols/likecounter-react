import React from "react";

function AwesomeAnimals() {
  const animals = [
    "Chicken",
    "Sloth",
    "Porcupine",
    "Killer whale",
    "Velociraptor",
  ];

  return (
    <div>
      <ul>
        {animals.map(function (animal, index) {
          return (
            <li key={index}>
              Awesomeness level {index + 1}: {animal}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AwesomeAnimals;
