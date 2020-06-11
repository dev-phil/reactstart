import React, { useState } from 'react';


function App() {
  const [hello,setHello] = useState('Hello React World');
  const onCick = () => {
    setHello('Have changed characters')
  }
  return (
    <div className="App">
      {hello}
      <button onClick={onCick}>Changing Characters</button>
    </div>
  );
}

export default App;
