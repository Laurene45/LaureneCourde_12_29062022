import React from 'react';
import Account from '../../components/Account/index';
import { accountData } from '../../datas/dataAccounts';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/userSlice';
import { useState } from 'react';
import { api } from '../../services/axiosApi';

import './Profile.scss';

const Profile = () => {
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector((state) => state.user);
  const [isEdit, setIsEdit] = useState(false);

  const [newFirstname, setNewFirstname] = useState(firstName);
  const [newLastname, setNewLastname] = useState(lastName);

  const save = async () => {
    if (firstName.trim() === '' && lastName.trim() === '') {
      return;
    }

    const response = await api.updateProfile(newFirstname, newLastname);
    dispatch(userActions.setUserInfos(response.body));
    setIsEdit(false);
  };

  return (
    <main className="bg-dark">
      {isEdit ? (
        <section className="header">
          <h1>
            Welcome back
            <br /> {firstName} {lastName}!
          </h1>

          <div className="editor">
            <input
              type="text"
              className="firstNameInput"
              defaultValue={firstName}
              onChange={(e) => setNewFirstname(e.target.value)}
            />
            <input
              type="text"
              className="lastNameInput"
              defaultValue={lastName}
              onChange={(e) => setNewLastname(e.target.value)}
            />
          </div>
          <div className="editor">
            <button className="editor-button" onClick={save}>
              Save
            </button>
            <button className="editor-button" onClick={() => setIsEdit(false)}>
              Cancel
            </button>
          </div>
        </section>
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName + ' ' + lastName} !
          </h1>
          <button className="edit-button" onClick={() => setIsEdit(true)}>
            Edit Name
          </button>
        </div>
      )}

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
