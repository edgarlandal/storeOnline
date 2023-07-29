import Products from '../components/products';
import './catalog.css';

function Catalog() {
  return (
    <div className='catalog'>
        <h1>Check out our amazing catalog</h1>
        <Products/>
        <Products/>
        <Products/>
        <Products/>
        <Products/>
    </div>
  )
}

export default Catalog;