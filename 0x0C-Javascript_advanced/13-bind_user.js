let user = {
  hobby: 'Calligraphy',
  favoriteSport: 'Hockey',
  astrologicalSign: 'Aries',
  firstName: 'Buillaume',
  lastName: 'Ialva',
  location: 'Telaviv',
  occupation: 'Engineer',
};

let boundGetArea = roomDimensions.getArea.bind(roomDimensions);
boundGetArea();
