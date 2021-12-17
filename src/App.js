import { useState } from 'react';
import './App.scss';
import MyBtn from './Components/MyBtn/MyBtn';
import MyInput from './Components/MyInput/MyInput';

function App() {
  const [num1, setNum1] = useState('0');
  const [num2, setNum2] = useState('0');
  const [res, setRes] = useState('0');

  return (
    <div className='wrapper'>
      <div className='App'>
        <h1 className='title'>Calc on React</h1>
        <div className='form'>
          <div className='num'>
            <h3>Num 1</h3>
            <MyInput num={num1} state={setNum1} />
            <h3>Num 2</h3>
            <MyInput num={num2} state={setNum2} />
            <h3 className='res'>{`Result: ${Math.trunc(res)}`}</h3>
          </div>
          <div className='math'>
            <MyBtn res={{ res, setRes }} num={{ num1, num2 }} math='plus'>
              +
            </MyBtn>
            <MyBtn res={{ res, setRes }} num={{ num1, num2 }} math='minus'>
              -
            </MyBtn>
            <MyBtn
              res={{ res, setRes }}
              num={{ num1, num2 }}
              math='multiply'
            >
              *
            </MyBtn>
            <MyBtn res={{ res, setRes }} num={{ num1, num2 }} math='divide'>
              /
            </MyBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
