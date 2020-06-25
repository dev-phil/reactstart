import React, { useState } from 'react';
import styled from 'styled-components';



function App() {
  const [list,setList] = useState([]);
  const [text,setText] = useState('');
  const submit = () => {
    setList([...list,text]);
    setText('');
  };

  const removeItem = (index) => {
    const resultArray = list.filter((item,idx)=> {
      if(idx === index) { 
        return false
      }
        return true;
    });
      setList(resultArray);
  };

  return (
    <StyledApp className="App">
      <div className='list'>
      </div>

      <div>
        <div>
          {list.map((item, idx)=>{
            return <div>
              <div>
                {item}
              </div>
              <button onClick={()=>removeItem(idx)}>
                Delete
              </button>
            </div>
          })}
        </div>


        <input value={text} onChange={(e)=> {
          setText(e.target.value);
        }}/>
        <button onClick={submit}> Add </button>
      </div>


    </StyledApp>
  );
}

const StyledApp  = styled.div`
  background-color : skyblue;
`;

export default App;
