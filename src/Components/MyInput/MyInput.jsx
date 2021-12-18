import React, {useState} from 'react'

const MyInput = ({num,state}) => {
	
	return (
    <div className='inp-wrapper'>
      <input onChange={(e) => state(e.target.value)} className='inp' type='number' name='calc' value={num} id='1' />
    </div>
  );
}

export default MyInput
