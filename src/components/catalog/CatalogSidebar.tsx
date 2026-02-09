import styles from './CatalogSidebar.module.css';

type Category = { id: string; name: string };

type AreaKey = 'all' | 'uci' | 'ucin' | 'urgencias';

export default function CatalogSidebar(props: {
  search: string;
  onSearch: (v: string) => void;

  // ✅ NUEVO: Área clínica
  area: AreaKey;
  onAreaChange: (v: AreaKey) => void;

  categories: Category[];
  selectedCategoryId: string;
  onSelectCategory: (id: string) => void;

  availableBrands: string[];
  brand: string;
  onBrandChange: (v: string) => void;

  availableAccessories: string[];
  selectedAccessories: string[];
  onToggleAccessory: (acc: string) => void;

  onClear: () => void;
}) {
  const {
    search,
    onSearch,

    area,
    onAreaChange,

    categories,
    selectedCategoryId,
    onSelectCategory,
    availableBrands,
    brand,
    onBrandChange,
    availableAccessories,
    selectedAccessories,
    onToggleAccessory,
    onClear
  } = props;

  return (
    <div className={styles.card}>
      <div className={styles.block}>
        <div className={styles.blockTitle}>Buscar</div>
        <input
          className={styles.input}
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Nombre, SKU, marca o modelo"
        />
      </div>

      {/* ✅ NUEVO BLOQUE: Área */}
      <div className={styles.block}>
        <div className={styles.blockTitle}>Área</div>

        <div className={styles.catList}>
          {([
            { id: 'all', label: 'Todas' },
            { id: 'uci', label: 'UCI' },
            { id: 'ucin', label: 'UCIN' },
            { id: 'urgencias', label: 'Urgencias' }
          ] as const).map((opt) => (
            <button
              key={opt.id}
              className={`${styles.cat} ${area === opt.id ? styles.active : ''}`}
              type="button"
              onClick={() => onAreaChange(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.block}>
        <div className={styles.blockTitle}>Categorías</div>

        <button
          className={`${styles.cat} ${selectedCategoryId === 'all' ? styles.active : ''}`}
          type="button"
          onClick={() => onSelectCategory('all')}
        >
          Todas
        </button>

        <div className={styles.catList}>
          {categories.map((c) => (
            <button
              key={c.id}
              className={`${styles.cat} ${selectedCategoryId === c.id ? styles.active : ''}`}
              type="button"
              onClick={() => onSelectCategory(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.block}>
        <div className={styles.blockTitle}>Marca</div>
        <select className={styles.select} value={brand} onChange={(e) => onBrandChange(e.target.value)}>
          <option value="all">Todas</option>
          {availableBrands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.block}>
        <div className={styles.blockTitle}>Accesorios</div>
        <div className={styles.accList}>
          {availableAccessories.length === 0 ? (
            <div className={styles.muted}>No hay accesorios para esta selección.</div>
          ) : (
            availableAccessories.map((acc) => {
              const checked = selectedAccessories.includes(acc);
              return (
                <label key={acc} className={styles.accItem}>
                  <input type="checkbox" checked={checked} onChange={() => onToggleAccessory(acc)} />
                  <span>{acc}</span>
                </label>
              );
            })
          )}
        </div>
      </div>

      <button className={styles.clear} type="button" onClick={onClear}>
        Limpiar filtros
      </button>
    </div>
  );
}
