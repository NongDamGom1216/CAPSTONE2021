import React, { useState } from 'react';

function Simul() {
  const [inputs, setInputs] = useState({
    price: ' ',
    month: ' ',
    deposit: ' ',
    fee: '0',
    amount: '0',
    deposit_: '0',
    retooling: '0'
  });

  const { price, month, deposit, fee, amount, deposit_, retooling } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs(prev => ({
       ...prev,
      [name]: value 
    }));
  };

  const handleClick = () => {
    if(deposit === '10'){
      setInputs(prev => ({
        ...prev, 
        fee : (prev.price*(0.1/12)*((1+(0.1/12))**prev.month))/(((1+(0.1/12))**prev.month)-1)
      }));
    }
    if(deposit === '20'){
      setInputs(prev => ({
        ...prev, 
        fee : (prev.price*(0.075/12)*((1+(0.075/12))**prev.month))/(((1+(0.075/12))**prev.month)-1)
      }));
    }
    if(deposit === '30'){
      setInputs(prev => ({
        ...prev, 
        fee : (prev.price*(0.05/12)*((1+(0.05/12))**prev.month))/(((1+(0.05/12))**prev.month)-1)
      }));
    }
    setInputs(prev => ({
      ...prev, 
      amount: prev.fee * prev.month,
      deposit_: prev.price * prev.deposit / 100,
      retooling: (prev.price * 0.3) * 0.7,
    }));
  }


  return (
    <div>
      <input type="number" name="price" placeholder="금액" value={price} onChange={onChange} /><br />
      <input type="radio" name="month" value="12" onChange={onChange} /> 12개월
      <input type="radio" name="month" value="24" onChange={onChange} /> 24개월
      <input type="radio" name="month" value="36" onChange={onChange} /> 36개월
      <input type="radio" name="month" value="48" onChange={onChange} /> 48개월
      <input type="radio" name="month" value="60" onChange={onChange} /> 60개월<br />
      <input type="radio" name="deposit" value="10" onChange={onChange} /> 10%
      <input type="radio" name="deposit" value="20" onChange={onChange} /> 20%
      <input type="radio" name="deposit" value="30" onChange={onChange} /> 30%<br />
      <button onClick={handleClick}> 계산</button>
      
      <div>
      <p> 렌탈비 : ₩{Math.floor(fee).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      <p> 총 납입금액 : ₩{Math.floor(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      <p> 보증금 : ₩{Math.floor(deposit_).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      <p> 첫 리툴링 : ₩{Math.floor(retooling).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      </div>
    </div>
  );
  
}

export default Simul;