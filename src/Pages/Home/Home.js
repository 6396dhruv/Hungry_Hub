import React, { useState } from 'react'
import './Home.css'
import Header from '../../Component/Header/Header'
import Menu from '../../Component/Menu/Menu'
import Food from '../../Component/Fooddisplay/Food'
import Download from '../../Component/Download/Download'

const Home = () => {

  const [category, setCategory] = useState("All");
  
  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <Food category= {category} />
      <Download />
    </div>
  )
}

export default Home;
