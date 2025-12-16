import { userRouter, adminUserRouter } from './user.js';
import { postRouter, adminPostRouter } from './post.js';
import auth from './auth.js';

export default {
  user: userRouter,
  userAdmin: adminUserRouter,
  post: postRouter,
  postAdmin: adminPostRouter,
  auth,
};
