import React from 'react';
import { transactionsTitleData } from '../../datas/dataTransactionsTitle';
import { transactionsData } from '../../datas/dataTransactions';
import TransactionTitle from '../../components/TransactionTitle/index';
import TransactionContent from '../../components/TransactionContent/index';
import './Transactions.scss';

const Transactions = () => {
  return (
    <div>
      {transactionsTitleData.map((account, index) => (
        <TransactionTitle
          key={index}
          title={account.title}
          amount={account.amount}
          amountDescr={account.amountDescr}
        />
      ))}

      <main className="main bg-dark transac">
        <div className="dataHead">
          <div id="arrow" className="dataLineItem"></div>
          <div id="date" className="dataLineItem">
            DATE
          </div>
          <div id="descr" className="dataLineItem">
            DESCRIPTION
          </div>
          <div id="amount" className="dataLineItem">
            AMOUNT
          </div>
          <div id="balance" className="dataLineItem">
            BALANCE
          </div>
        </div>

        {transactionsData.map((account, index) => (
          <TransactionContent
            key={index}
            date={account.date}
            descr={account.description}
            amount={account.amount}
            balance={account.balance}
            transType={account.transType}
            category={account.category}
          />
        ))}
      </main>
    </div>
  );
};

export default Transactions;
