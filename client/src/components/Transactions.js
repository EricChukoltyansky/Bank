import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import api from "../api/Api";

const Transactions = () => {
  const [userData, setUserData] = useState([]);
  const [userBankAccount, setUserBankAccount] = useState([]);

  const params = useParams();
  const [amount, setAmount] = useState(0);

  const depositRef = useRef(null);
  const witdrawRef = useRef(null);
  const creditRef = useRef(null);
  const transferRef = useRef(null);
  const transferEmailRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.get(`/user/${params.id}`);
      console.log(data);
      setUserData(data.data[0]);
      setUserBankAccount(data.data[1]);
    };
    fetchData();
  }, [amount, params.id]);

  const depositHandle = async () => {
    try {
      await api.put(`/deposit/${params.id}`, {
        amount: amount,
      });
    } catch (e) {
      console.log(e);
    }
    console.log(depositRef.current.value);
    depositRef.current.value = "";

    setAmount(0);
  };
  const witdrawHandle = async () => {
    try {
      await api.put(`/withdraw/${params.id}`, {
        amount: amount,
      });
    } catch (e) {
      console.log(e);
    }
    witdrawRef.current.value = "";
    setAmount(0);
  };
  const creditHandle = async () => {
    try {
      await api.put(`/credit/${params.id}`, {
        amount: amount,
      });
    } catch (e) {
      console.log(e);
    }
    creditRef.current.value = "";
    setAmount(0);
  };

  const transferHandle = async () => {
    try {
      await api.put(`/transferMoney/${params.id}`, {
        email: transferEmailRef.current.value,
        amount: amount,
      });
    } catch (e) {
      console.log(e);
    }
    transferRef.current.value = "";
    setAmount(0);
  };

  return (
    <>
    {console.log(amount)}
      <h1>Hello {userData.name}</h1>
      <div className="user-data">
        <h3>
          {userData.name} {userData.mobile} {userData.email}
        </h3>
        <h4>
          cash:{userBankAccount.cash}$ credit:{userBankAccount.credit}$
        </h4>
      </div>
      <input
        type="number"
        min="0"
        onChange={(e) => setAmount(e.target.value)}
        ref={depositRef}
      />
      <button onClick={depositHandle}>Deposit</button>
      <input
        type="number"
        min="0"
        onChange={(e) => setAmount(e.target.value)}
        ref={witdrawRef}
      />
      <button onClick={witdrawHandle}>Withdraw</button>
      <input
        type="number"
        min="0"
        onChange={(e) => setAmount(e.target.value)}
        ref={creditRef}
      />
      <button onClick={creditHandle}>Add credit</button>
      <div>
        <input type="text" placeholder="Receiver" ref={transferEmailRef} />
        <input
          type="number"
          min="0"
          onChange={(e) => setAmount(e.target.value)}
          ref={transferRef}
          placeholder="Amount"
        />
        <button onClick={transferHandle}>Transfer Money</button>
      </div>
    </>
  );
};

export default Transactions;
