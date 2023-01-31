import React from 'react'
import {useTypewriter , Cursor} from 'react-simple-typewriter'

const App = () => {

const {text} = useTypewriter({
   words: ['Developer', 'Designer'],
   loop: {},
   typeSpeed:120 ,
   deleteSpeed:80,
});

  return (
    <div>
      <h1 style={{margin : '50px'}}>
        Im a {''}
        <span style={{fontWeight : 'bold' , color: 'green'}} >
        {text}
        </span>
        <span style={{color:'red'}}>
        <Cursor cursorStyle='<' />
        </span>
        
      </h1>
    </div>
  )
}

export default App
