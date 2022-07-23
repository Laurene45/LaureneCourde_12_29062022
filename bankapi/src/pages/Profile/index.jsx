import React from 'react';
import Account from '../../components/Account/index';
import {accountData} from '../../datas/dataAccounts';

const Profile = () => {
  return (
    <main className="bg-dark">
      {accountData.map((account, index) => (
        <Account
          key={index}
          title={account.title}
          amount={account.amount}
          description={account.description}
        />
      ))}
    </main>
  );
};
export default Profile;
