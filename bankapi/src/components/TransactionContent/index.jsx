import { useState } from 'react';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';
import './TransactionContent.scss';

const TransactionContent = ({
  date,
  descr,
  amount,
  balance,
  transType,
  category,
}) => {
  const [isUp, setIsUp] = useState(false);

  /**
   * dropdown details
   */
  const openClose = () => {
    if (!isUp) {
      setIsUp(true);
    } else {
      setIsUp(false);
    }
  };

  /**
   * alert message when we want to modify the category of the transaction.
   */
  const selectCategory = () => {
    alert('Choisir une catégorie');
  };

  /**
   *  show an alert message when we want to modify the note of the transaction.
   */
  const addNotes = () => {
    alert('Ajouter des notes');
  };

  return (
    <div>
      <div className="dataLine">
        <div id="arrow" onClick={openClose}>
          {isUp ? (
            <i className="fa fa-angle-up" aria-hidden="true">
              <FontAwesomeIcon icon={faAngleUp} />
            </i>
          ) : (
            <i className="fa fa-angle-down" aria-hidden="true">
              <FontAwesomeIcon icon={faAngleDown} />
            </i>
          )}
        </div>
        <div id="date">{date}</div>
        <div id="descr">{descr}</div>
        <div id="amount">{amount}</div>
        <div id="balance">{balance}</div>
      </div>
      {isUp && (
        <div className="moreInfo">
          <div className="info">
            <p>Transaction Type: {transType}</p>
            <p>
              Category: {category}{' '}
              <i
                className="fa fa-pencil"
                aria-hidden="true"
                onClick={selectCategory}
              >
                <FontAwesomeIcon icon={faPencil} />
              </i>
            </p>
            <p>
              Notes:{' '}
              <i className="fa fa-pencil" aria-hidden="true" onClick={addNotes}>
                <FontAwesomeIcon icon={faPencil} />
              </i>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

TransactionContent.propTypes = {
  date: PropTypes.string,
  amount: PropTypes.string,
  descr: PropTypes.string,
  balance: PropTypes.string,
  transType: PropTypes.string,
  category: PropTypes.string,
};

export default TransactionContent;
