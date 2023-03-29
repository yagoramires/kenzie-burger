import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import { api } from './services/api';
import { GlobalStyle } from './styles/global';
import { StyledSection } from './styles/section';

function App() {
  const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);
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

  return (
    <div className='App'>
      <GlobalStyle />
      <Header />

      <StyledSection>
        <ProductsList
          products={products}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
        />
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </StyledSection>
    </div>
  );
}

export default App;
