import { useEffect, useMemo, useState } from 'react';
import Container from '../components/layout/Container';
import styles from './Catalog.module.css';

import catalogData from '../data/catalog.json';
import CatalogHero from '../components/catalog/CatalogHero';
import CatalogSidebar from '../components/catalog/CatalogSidebar';
import ProductCard from '../components/catalog/ProductCard';
import Pagination from '../components/catalog/Pagination';

type Category = {
  id: string;
  name: string;
  hero: {
    title: string;
    description: string;
    backgroundImage: string;
    kicker?: string;
  };
};

type Product = {
  id: string;
  name: string;
  sku: string;
  categoryId: string; // tipo de equipo
  brand: string;
  model: string;
  price: number | null;
  image: string;
  accessories: string[];
  description?: string;

  // ✅ NUEVO: áreas clínicas (ids)
  // ejemplo: ["uci", "urgencias"]
  areas?: Array<'uci' | 'ucin' | 'urgencias'>;
};

type CatalogJson = {
  meta: { currency: string; pageSize: number };
  categories: Category[];
  products: Product[];
};

const DATA = catalogData as unknown as CatalogJson;

type SortKey = 'default' | 'nameAsc' | 'nameDesc' | 'brandAsc';
type AreaKey = 'all' | 'uci' | 'ucin' | 'urgencias';

/** Normaliza para búsquedas intuitivas: "Dräger" => "drager" */
function normalizeText(input: string) {
  return (input ?? '')
    .toString()
    .normalize('NFD') // separa diacríticos
    .replace(/[\u0300-\u036f]/g, '') // quita diacríticos
    .toLowerCase()
    .trim();
}

export default function Catalog() {
  const pageSize = DATA.meta.pageSize ?? 12;

  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all'); // tipo de equipo
  const [area, setArea] = useState<AreaKey>('all'); // ✅ nuevo
  const [search, setSearch] = useState<string>('');
  const [brand, setBrand] = useState<string>('all');
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  const [sort, setSort] = useState<SortKey>('default');
  const [page, setPage] = useState<number>(1);

  const categories = DATA.categories;
  const products = DATA.products;

  const activeCategory = useMemo(() => {
    return categories.find((c) => c.id === selectedCategoryId) ?? categories[0];
  }, [categories, selectedCategoryId]);

  /** Filtro único con soporte "exclude" para facetas (brand/accessories/etc) */
  const filterProducts = useMemo(() => {
    return (exclude?: 'brand' | 'accessories' | 'category' | 'area' | 'search') => {
      const q = normalizeText(search);

      return products.filter((p) => {
        // Category (tipo equipo)
        const categoryOk =
          exclude === 'category'
            ? true
            : selectedCategoryId === 'all'
              ? true
              : p.categoryId === selectedCategoryId;

        // Area (UCI/UCIN/Urgencias)
        const areaOk =
          exclude === 'area'
            ? true
            : area === 'all'
              ? true
              : (p.areas ?? []).includes(area);

        // Search (name, sku, brand, model) - con normalización
        const searchOk =
          exclude === 'search'
            ? true
            : q.length === 0
              ? true
              : [p.name, p.sku, p.brand, p.model].some((v) => normalizeText(v).includes(q));

        // Brand
        const brandOk =
          exclude === 'brand'
            ? true
            : brand === 'all'
              ? true
              : p.brand === brand;

        // Accessories (require ALL selected) - match exact strings
        const accessoriesOk =
          exclude === 'accessories'
            ? true
            : selectedAccessories.length === 0
              ? true
              : selectedAccessories.every((a) => (p.accessories ?? []).includes(a));

        return categoryOk && areaOk && searchOk && brandOk && accessoriesOk;
      });
    };
  }, [products, selectedCategoryId, area, search, brand, selectedAccessories]);

  /** RESULTADOS (aplica TODO) */
  const derived = useMemo(() => {
    const filtered = filterProducts();

    // Sorting
    const sorted = [...filtered].sort((a, b) => {
      if (sort === 'nameAsc') return a.name.localeCompare(b.name);
      if (sort === 'nameDesc') return b.name.localeCompare(a.name);
      if (sort === 'brandAsc') return a.brand.localeCompare(b.brand);
      return 0;
    });

    // Pagination
    const total = sorted.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const safePage = Math.min(Math.max(1, page), totalPages);
    const start = (safePage - 1) * pageSize;
    const end = start + pageSize;

    return {
      items: sorted.slice(start, end),
      total,
      totalPages,
      page: safePage
    };
  }, [filterProducts, sort, page, pageSize]);

  /**
   * FACETAS:
   * - Brands: basadas en los filtros actuales EXCEPTO "brand" (para que puedas cambiar de marca)
   * - Accessories: basadas en los filtros actuales EXCEPTO "accessories"
   */
  const availableBrands = useMemo(() => {
    const scope = filterProducts('brand');
    return Array.from(new Set(scope.map((p) => p.brand))).sort((a, b) => a.localeCompare(b));
  }, [filterProducts]);

  const availableAccessories = useMemo(() => {
    const scope = filterProducts('accessories');
    const all = scope.flatMap((p) => p.accessories ?? []);
    return Array.from(new Set(all)).sort((a, b) => a.localeCompare(b));
  }, [filterProducts]);

  /** Limpia accesorios seleccionados si ya no existen después de otros filtros */
  useEffect(() => {
    if (selectedAccessories.length === 0) return;
    const allowed = new Set(availableAccessories);
    const next = selectedAccessories.filter((a) => allowed.has(a));
    if (next.length !== selectedAccessories.length) {
      setSelectedAccessories(next);
      setPage(1);
    }
  }, [availableAccessories, selectedAccessories]);

  const handleSelectCategory = (id: string) => {
    setSelectedCategoryId(id);
    setPage(1);
    setBrand('all');
    setSelectedAccessories([]);
  };

  const handleArea = (value: AreaKey) => {
    setArea(value);
    setPage(1);
    setBrand('all');
    setSelectedAccessories([]);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleBrand = (value: string) => {
    setBrand(value);
    setPage(1);
  };

  const toggleAccessory = (acc: string) => {
    setSelectedAccessories((prev) => {
      const next = prev.includes(acc) ? prev.filter((x) => x !== acc) : [...prev, acc];
      return next;
    });
    setPage(1);
  };

  return (
    <>
      <CatalogHero
        kicker={activeCategory.hero.kicker ?? 'MEDITRONICA'}
        title={activeCategory.hero.title}
        description={activeCategory.hero.description}
        backgroundImage={activeCategory.hero.backgroundImage}
      />

      <section className={styles.section}>
        <Container>
          <div className={styles.layout}>
            <aside className={styles.sidebar}>
              <CatalogSidebar
                // search
                search={search}
                onSearch={handleSearch}

                // ✅ area
                area={area}
                onAreaChange={handleArea}

                // categorías por tipo de equipo
                categories={categories.filter((c) => c.id !== 'all')}
                selectedCategoryId={selectedCategoryId}
                onSelectCategory={handleSelectCategory}

                // marcas facetadas
                availableBrands={availableBrands}
                brand={brand}
                onBrandChange={handleBrand}

                // accesorios facetados
                availableAccessories={availableAccessories}
                selectedAccessories={selectedAccessories}
                onToggleAccessory={toggleAccessory}

                onClear={() => {
                  setSelectedCategoryId('all');
                  setArea('all');
                  setSearch('');
                  setBrand('all');
                  setSelectedAccessories([]);
                  setSort('default');
                  setPage(1);
                }}
              />
            </aside>

            <div className={styles.main}>
              <div className={styles.headerRow}>
                <div>
                  <h1 className={styles.h1}>Catálogo de Productos</h1>
                  <p className={styles.intro}>
                    Filtra por área (UCI/UCIN/Urgencias), tipo de equipo, marca y accesorios. Búsqueda flexible (ej. Dräger = Drager).
                  </p>
                </div>

                <div className={styles.sortBox}>
                  <label className={styles.sortLabel} htmlFor="sort">Ordenar</label>
                  <select
                    id="sort"
                    className={styles.select}
                    value={sort}
                    onChange={(e) => {
                      setSort(e.target.value as SortKey);
                      setPage(1);
                    }}
                  >
                    <option value="default">Orden por defecto</option>
                    <option value="nameAsc">Nombre A–Z</option>
                    <option value="nameDesc">Nombre Z–A</option>
                    <option value="brandAsc">Marca A–Z</option>
                  </select>
                </div>
              </div>

              <div className={styles.resultsLine}>
                Mostrando <strong>{derived.items.length}</strong> de <strong>{derived.total}</strong> resultados
              </div>

              <div className={styles.grid}>
                {derived.items.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>

              <div className={styles.paginationWrap}>
                <Pagination
                  page={derived.page}
                  totalPages={derived.totalPages}
                  onChange={(next) => setPage(next)}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
