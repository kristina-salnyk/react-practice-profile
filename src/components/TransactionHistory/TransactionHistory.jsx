import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.header}>
        <tr>
          <th className={css.columnName}>Type</th>
          <th className={css.columnName}>Amount</th>
          <th className={css.columnName}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(item => (
          <tr key={item.id} className={css.row}>
            <td className={css.cell}>
              {item.type[0].toUpperCase() + item.type.slice(1)}
            </td>
            <td className={css.cell}>{item.amount}</td>
            <td className={css.cell}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
