const posts = [
  {
    id: 1,
    post: "Post 1",
  },
  {
    id: 2,
    post: "Post 2",
  },
  {
    id: 3,
    post: "Post 3",
  },
  {
    id: 4,
    post: "Post 4",
  },
];

const listPost = () => {
  posts.map((post) => {
    console.log(post.post);
  });
};

const addPost = (newPost) => {
  const promise1 = new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve(posts);
  });
  return promise1;
};

async function showPosts() {
  try {
    await addPost({ id: 5, post: "Post 5" });
    listPost();
  } catch (error) {
    console.log(error);
  }
}
showPosts();
