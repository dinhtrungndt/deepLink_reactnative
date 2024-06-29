/* eslint-disable prettier/prettier */
const config = {
  screens: {
    home: {
      path: 'home',
    },
    detail: {
      path: 'detail/:id',
      parse: {
        id: id => `${id}`,
      },
    },
  },
};

const linking = {
  prefixes: ['demo://app'],
  config,
};

export default linking;
