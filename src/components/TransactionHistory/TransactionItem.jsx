import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

export default function TransactionItem({ type, amount, currency }) {
  return (
    <tr>
      <td className={css.type}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};