import React from 'react';

function AlertInfo() {
  const handleClick = () => alert('Alert przeglądarki');
  return (
    <button onClick={handleClick}>
      Alert
    </button>
  )
}

export default AlertInfo;