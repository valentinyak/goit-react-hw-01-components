import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function genereteRandomColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + randomColor;
}

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title !== '' && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(stat => {
          return (
            <li
              className={s.item}
              key={stat.id}
              style={{ backgroundColor: genereteRandomColor() }}
            >
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
