import Categories from '../components/product-list/Categories';
import Heading from '../components/product-list/Heading';
import ProductList from './ProductList';

const ProductListPage = () => {
  return (
    <>
      <Heading />
      <Categories />
      <ProductList />
    </>
  );
};

export default ProductListPage;
