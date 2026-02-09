import styles from './ProductCard.module.css';

type Product = {
  name: string;
  sku: string;
  brand: string;
  model: string;
  image: string;
  accessories: string[];
  description?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img className={styles.image} src={product.image} alt={product.name} loading="lazy" />
      </div>

      <div className={styles.body}>
        <div className={styles.sku}>{product.sku}</div>
        <h3 className={styles.name}>{product.name}</h3>

        <div className={styles.meta}>
          <span><strong>Marca:</strong> {product.brand}</span>
          <span><strong>Modelo:</strong> {product.model}</span>
        </div>

        {product.accessories?.length ? (
          <div className={styles.acc}>
            <strong>Accesorios:</strong> {product.accessories.join(', ')}
          </div>
        ) : null}

        {product.description ? <p className={styles.desc}>{product.description}</p> : null}

        <button className={styles.btn} type="button">
          Ver más información
        </button>
      </div>
    </article>
  );
}
