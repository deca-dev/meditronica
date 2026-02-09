import styles from './Pagination.module.css';

function getPaginationItems(page: number, totalPages: number, maxVisible = 7): Array<number | '…'> {
  if (totalPages <= maxVisible) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const items: Array<number | '…'> = [];
  const showLeft = Math.max(2, page - 1);
  const showRight = Math.min(totalPages - 1, page + 1);

  items.push(1);

  if (showLeft > 2) items.push('…');

  for (let p = showLeft; p <= showRight; p++) items.push(p);

  if (showRight < totalPages - 1) items.push('…');

  items.push(totalPages);
  return items;
}

export default function Pagination(props: {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
}) {
  const { page, totalPages, onChange } = props;
  const items = getPaginationItems(page, totalPages);

  return (
    <nav className={styles.nav} aria-label="Pagination">
      <button
        className={styles.ctrl}
        type="button"
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
      >
        ←
      </button>

      {items.map((it, idx) =>
        it === '…' ? (
          <span key={`ellipsis-${idx}`} className={styles.ellipsis}>…</span>
        ) : (
          <button
            key={it}
            type="button"
            className={`${styles.pageBtn} ${it === page ? styles.active : ''}`}
            onClick={() => onChange(it)}
          >
            {it}
          </button>
        )
      )}

      <button
        className={styles.ctrl}
        type="button"
        disabled={page >= totalPages}
        onClick={() => onChange(page + 1)}
      >
        →
      </button>
    </nav>
  );
}
