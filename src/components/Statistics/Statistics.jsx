import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : null}

      <ul className={css.statList}>
        {stats.map(item => (
          <li
            key={item.id}
            className={css.item}
            style={{ backgroundColor: randomizeBg() }}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function randomizeBg() {
  const color = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 20 + 70); // 30-70% насыщенности
  const lightness = Math.floor(Math.random() * 20 + 20);
  return `hsl(${color}, ${saturation}%, ${lightness}%)`;
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};
