import React from 'react'

const MyBtn = ({children, resClass, math, num, res, }) => {


	function calc() {
		if (math === 'plus') {
     	res.setRes(+num.num1 + +num.num2)
    }  else if(math === 'minus') {
		 res.setRes(+num.num1 - +num.num2)
	 } else if (math === 'multiply') {
		 res.setRes(+num.num1 * +num.num2)
	 } else if (math === 'divide') {
		 res.setRes(+num.num1 / +num.num2)
	 }
	}
	
	return (
    <div className={`btn ${resClass ? 'res' : ''} ${math ? 'math' : ''}`}>
      <button onClick={calc}>{children}</button>
    </div>
  );
}

export default MyBtn
