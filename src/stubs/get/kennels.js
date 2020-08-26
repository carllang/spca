const kennels = require('./kennelsData');

module.exports = [
  {
    path: '/kennels',
    template: kennels,
  },
  {
    path: '/kennels/:id',
    template: (params) => kennels.filter((kennel) => kennel.id === Number(params.id)),
  },
];
