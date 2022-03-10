const HOST_NAME = 'http://localhost:5033';

const API_PATH = {
  SignUp: '/user/signup',
  SignIn:'/user/signin',
  SignOut: '/user/signout',
  TokenLogin: '/user/token-login',
  Product: '/product',
  GetCategories: '/category',
  GetCategoryPath: '/category/get-cate-path',
  Cart: '/cart',
  Order: '/order',
};

const API = (key) => {
  return `${HOST_NAME}${API_PATH[key]}`;
}

export default API;