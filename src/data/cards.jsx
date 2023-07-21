export async function getImage(pokemon) {
  try {
    let search = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
    let response = await fetch(search, {
      mode: "cors",
    });
    const data = await response.json();
    console.log(data.sprites.back_default);
    return data.sprites.back_default;
  } catch (error) {
    console.log("fetch unsuccessful");
  }
}

const cardsData = [
  {
    name: "ditto",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
    hasClicked: false,
    isActive: false,
    id: 0,
  },
  {
    name: "snorlax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/143.png",
    hasClicked: false,
    isActive: false,
    id: 1,
  },
  {
    name: "pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
    hasClicked: false,
    isActive: false,
    id: 2,
  },
  {
    name: "charizard",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
    hasClicked: false,
    isActive: false,
    id: 3,
  },
  {
    name: "lucario",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/448.png",
    hasClicked: false,
    isActive: false,
    id: 4,
  },
  {
    name: "mewtwo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/150.png",
    hasClicked: false,
    isActive: false,
    id: 5,
  },
  {
    name: "garchomp",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/445.png",
    hasClicked: false,
    isActive: false,
    id: 6,
  },
  {
    name: "blastoise",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
    hasClicked: false,
    isActive: false,
    id: 7,
  },
  {
    name: "arcanine",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/59.png",
    hasClicked: false,
    isActive: false,
    id: 8,
  },
  {
    name: "gengar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/94.png",
    hasClicked: false,
    isActive: false,
    id: 9,
  },
  {
    name: "lapras",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/131.png",
    hasClicked: false,
    isActive: false,
    id: 10,
  },
  {
    name: "dragonite",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/149.png",
    hasClicked: false,
    isActive: false,
    id: 11,
  },
  {
    name: "entei",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/244.png",
    hasClicked: false,
    isActive: false,
    id: 12,
  },
];

// export async function populateData() {
//   const promises = [
//     getImage("ditto"),
//     getImage("snorlax"),
//     getImage("pikachu"),
//     getImage("charizard"),
//     getImage("lucario"),
//     getImage("mewtwo"),
//     getImage("garchomp"),
//   ];

//   const imageUrls = await Promise.all(promises);

//   const cardsData = [
//     {
//       name: "img1",
//       image: imageUrls[0],
//       hasClicked: false,
//       isActive: false,
//       id: 0,
//     },
//     {
//       name: "img2",
//       image: imageUrls[1],
//       hasClicked: false,
//       isActive: false,
//       id: 1,
//     },
//     {
//       name: "img3",
//       image: imageUrls[2],
//       hasClicked: false,
//       isActive: false,
//       id: 2,
//     },
//     {
//       name: "img4",
//       image: imageUrls[3],
//       hasClicked: false,
//       isActive: false,
//       id: 3,
//     },
//     {
//       name: "img5",
//       image: imageUrls[4],
//       hasClicked: false,
//       isActive: false,
//       id: 4,
//     },
//     {
//       name: "img6",
//       image: imageUrls[5],
//       hasClicked: false,
//       isActive: false,
//       id: 5,
//     },
//     {
//       name: "img7",
//       image: imageUrls[6],
//       hasClicked: false,
//       isActive: false,
//       id: 6,
//     },
//   ];

//   return cardsData;
// }

export default cardsData;
