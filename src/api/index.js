import axios from 'axios';

const url = 'https://mern-memo.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (new_Post) => axios.post(url, new_Post);
export const updatePost = (id, updatePost) => axios.patch(`${url}/${id}`, updatePost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);



