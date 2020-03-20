import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/purchase'
});

const list = async () => {
  const result = await instance.get('/list');
  const purchases = result.data.purchases;
  return purchases;
};

const create = async id => {
  await instance.post('/create', { products: id });
};



const addToCart = async id => {
  await instance.post('/cart', { products: id });

};
export default addToCart


export { list, create };