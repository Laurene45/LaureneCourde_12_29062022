import React from 'react';
import Account from '../../components/Account/index';
import { accountData } from '../../datas/dataAccounts';
import { useSelector } from 'react-redux';


import './Profile.scss';

//import UpdateForm from '../../components/UpdateForm/index';

const Profile = () => {
  const { firstName, lastName } = useSelector((state) => state.user);
  
  return (
    <main className="bg-dark">
      <section className="header">
        <h1>
          Welcome back
          <br /> {firstName} {lastName}!
        </h1>

        
      </section>

      

      <section className="transaction">
        {accountData.map((account, index) => (
          <Account
            key={index}
            title={account.title}
            amount={account.amount}
            description={account.description}
          />
        ))}
      </section>
    </main>
  );
};
export default Profile;
