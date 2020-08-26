const users = [
  {
    id: 0,
    name: 'abe',
    email: 'abe@gmail.com',
    username: 'admin',
    password: 'admin',
    created: null,
    deleted: null,
    roles: [],
  },
  {
    id: 1,
    name: 'carl',
    email: 'carl@gmail.com',
    username: 'admin',
    password: 'admin',
    created: null,
    deleted: null,
    roles: [],
  },
];

module.exports = {
  path: '/users/:id',
  template: (params) => users.filter((user) => user.id === Number(params.id)),
};
