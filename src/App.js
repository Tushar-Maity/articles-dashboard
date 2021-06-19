import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Dashboard from './components/Dashboard'

const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`https://api.first.org/data/v1/news`)
  
      console.log(result.data.data)
      console.log(result)
      setData(result.data.data)
    }
  
    fetchItems()
  }, [])

  return (
    <div>
       <Dashboard data={data}/>
    </div>
  );
}

export default App;
