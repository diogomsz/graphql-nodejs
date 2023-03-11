const posts = () => {
  return [
    {
      id: '1',
      title: 'Post title 1',
    },
    {
      id: '2',
      title: 'Post title 2',
    },
    {
      id: '3',
      title: 'Post title 3',
    },
  ];
};

const post = () => {
  return {
    id: '1',
    title: 'Post title 1',
  };
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
