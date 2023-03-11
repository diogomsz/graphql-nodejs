const posts = () => {
  return [
    {
      id: '1',
      title: 'Post Title 1',
    },
    {
      id: '2',
      title: 'Post Title 2',
    },
    {
      id: '3',
      title: 'Post Title 3',
    },
  ];
};

const post = () => {
  return {
    id: '1',
    title: 'Post Title 1',
  };
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
