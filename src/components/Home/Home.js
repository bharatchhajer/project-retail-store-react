import './Home.css'
import React, { useState } from 'react'
import Menu from '../Menu/Menu';
import Welcome from '../../components_class/Welcome/Welcome';

function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
        <Menu />
        { /*<p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
                Increase Counter
        </button>
        <Welcome name="Rajkumar" /> */ }
    </div>
  )
}

export default Home