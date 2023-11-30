import mockData from '../data/mockData.json';
import ProductCard from './ProductCard';
function ProductGrid() {
    return (
        <div className="product-grid">
            {mockData.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductGrid;