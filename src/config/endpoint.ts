const RESOURCES = {
  users: 'users',
  posts: 'posts',
  signatures:  'signatures'
};

export const ENDPOINT = {
  users: {
    index: `${RESOURCES.users}`,
    register: `${RESOURCES.users}/register`,
    login: `${RESOURCES.users}/login`,
    logout: `${RESOURCES.users}/logout`
  },
  posts: {
    index: `${RESOURCES.posts}`,
    public: `${RESOURCES.posts}/public`,
    recommend: `${RESOURCES.posts}/recommend`
  },
  signatures: {
    index: `${RESOURCES.signatures}`
  }
};
