const users = () => {
  return [
    {
      id: '1',
      userName: 'Diogo',
    },
    {
      id: '2',
      userName: 'Lucas',
    },
    {
      id: '3',
      userName: 'Miguel',
    },
    {
      id: '4',
      userName: 'Caio',
    },
  ];
};

const user = () => {
  return {
    id: '1',
    userName: 'Diogo',
  };
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
