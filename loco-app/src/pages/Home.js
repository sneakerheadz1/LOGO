import React from 'react'
import { useState} from 'react';
import Display from '../components/Display'
import DisplayList from '../components/DisplayList'


function Home() {
    // const {onChange} = props;

    const [schools, setSchools] = useState([])

    const schoolSearch = () =>{
        fetch("https://api.schooldigger.com/v1.2/schools?st=CA&appID=20b17e1b&appKey=16a4cbfd56c81912a829fed9abb8bd56")
            .then(response => response.json())
            .then(school => setSchools(school.schoolList))
    }
    
    const schoolData = schools.map((item) => {
       
        return (
        <DisplayList key={item.schoolid} skool={item}  />
        // console.log(item)
        )
    }) 
   console.log(schools)

    return (
        <div className = " container search-school">
            <h2>Search for Mentor opportunities near you</h2>
                {/* <img src="" alt="" /> */}
            <div className="search">
                <input  className='input' type="text"  placeholder="Search Schools..." />
             <button onClick={() => schoolSearch()}>Search</button>
             </div>
            { schoolData} 
           

            
               
                  
        </div>
    )
}

export default Home
