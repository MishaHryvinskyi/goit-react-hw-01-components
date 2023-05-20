import PropTypes from 'prop-types';
import { TableHistory, Thead, Td, Th, Tr } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
    return (
      <TableHistory>
        <Thead>
          <tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </tr>
        </Thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <Tr key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </Tr>
          ))}
        </tbody>
      </TableHistory>
    );
  };

  TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };