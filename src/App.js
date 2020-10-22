import React, { useState } from 'react';
import TodoList  from './TodoList'; 


const App = () =>
{
    const [inputItem, setItem] = useState('');

    const [inputArr, setArr]   = useState([]); 

    const inputText=(event)=>
    {
        setItem(event.target.value);
    }

    const addItem=()=>
    {
        setArr((oldArr)=>{
            return [...oldArr, inputItem];
        });
        setItem('');
    }

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>Enter items to list</h1>
                    <input type="text" placeholder="Enter item to add"
                        onChange={inputText}
                        value={inputItem} >
                    </input>
                    <button onClick={addItem}> + </button>
                    <ol>
                        {/* <li>{inputItem}</li> */}
                        {
                            inputArr.map((item, key)=>
                            {
                               return <TodoList key={key} text={item}/>
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    );
}   

export default App;
