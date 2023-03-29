import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import { api } from './services/api';
import { GlobalStyle } from './styles/global';
import { StyledSection } from './styles/section';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/products');

        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const total = currentSale.reduce((acc, cur) => acc + cur.price, 0);
    setCartTotal(total);
  }, [currentSale]);

  return (
    <div className='App'>
      <Header
        search={search}
        setSearch={setSearch}
        products={products}
        setFilteredProducts={setFilteredProducts}
      />

      <StyledSection>
        <ProductsList
          products={products}
          search={search}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
        />
        <Cart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          cartTotal={cartTotal}
        />
      </StyledSection>

      <ToastContainer autoClose={2000} position={toast.POSITION.BOTTOM_RIGHT} />
      <GlobalStyle />
    </div>
  );
}

export default App;
