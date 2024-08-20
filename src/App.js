import logo from './logo.svg';
import './App.css';
import ProductCard from './ProductCard';
function App() {
  
  function generateImagePaths(prefix, totalImages) {
    const images = [];
    for (let i = totalImages; i > 0; i--) {
      const fileNumber = i.toString().padStart(2, '0');
      images.push(`${prefix}/Filename_${fileNumber}.jpg`);
    }
    return images;
  }

    const pinkshoes = {
      name: '360° Rotating pink Shoes',
      description: 'A comfortable Shoes.',
      price: '199.99',
      images:generateImagePaths('./pinkshoes',36)
    };

    const greenshoes = {
      name: '360° Rotating pink Shoes',
      description: 'A comfortable Shoes.',
      price: '199.99',
      images:generateImagePaths('./greenshoes',36)
    };

    return (
      <div className="App">
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
        <ProductCard product={pinkshoes} />
        <ProductCard product={greenshoes} />
      </div>
    );
}

export default App;
