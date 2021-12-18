import React from 'react'

const MyBtn = ({children, resClass, math, num, res, }) => {


	function calc() {

		switch (math) {
      case 'plus':
        res.setRes(+num.num1 + +num.num2);
        break;
      case 'minus':
        res.setRes(+num.num1 - +num.num2);
        break;
      case 'multiply':
        res.setRes(+num.num1 * +num.num2);
        break;
      case 'divide':
        res.setRes(+num.num1 / +num.num2);
        break;

      default: res.setRes(0);
        break;
    }
	}
	
	return (
    <div className={`btn ${resClass && 'res'} ${math ? 'math' : ''}`}>
      <button onClick={calc}>{children}</button>
    </div>
  );
}

export default MyBtn
