/* eslint-disable import/prefer-default-export */
export const getFilteredAnimals = (state) => {
  const { name } = state.filters.animals;
  return state.animals.data.filter((animal) => animal.name.toLowerCase().includes(name));
};
