const  houses = [
  'Serpentard',
  'Griffondor',
  'Serdaigle',
  'Pouffsoufle',
];

const reducer = (state, action) => {
  switch(action.type) {
    case "UPDATE_CHOICE_WITH_MY_INDEX" :
      return  {
        houses,
        selectedHouses : houses[Math.floor(Math.random()  *  4)]}
    default :
      return state
  }
}

export default reducer;

