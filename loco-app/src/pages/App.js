// import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer'

// pages
import Home from './Home'
import About from './About'
import Form from './Form'


function App() {

  //  static data
  // const [schoolSearch] = useState({

  //   schools: [
  //     {
  //       "name": "J.K. Mullen High School",
  //       "website": "http://www.mullenhigh.com",
  //       "levels": [
  //         "High School"
  //       ],
  //       "format": "In School",
  //       "format_description": "Daily programming course",
  //       "gender": "Both",
  //       "description": "Introduction to Java Programming",
  //       "languages": [
  //         "Alice",
  //         "Java"
  //       ],
  //       "money_needed": true,
  //       "online_only": false,
  //       "number_of_students": null,
  //       "contact_name": "Mullen High School",
  //       "contact_number": "3037611764",
  //       "contact_email": "mcguire@mullenhigh.com",
  //       "latitude": 39.6515,
  //       "longitude": -105.035,
  //       "street": "3602 S. Lowell Blvd",
  //       "city": "Denver",
  //       "state": "CO",
  //       "zip": "50236",
  //       "published": 1,
  //       "updated_at": "2013-02-26T13:31:23Z",
  //       "country": "United States",
  //       "source": "user"
  //     },
  //     {
  //       "name": "Lynn Classical High School",
  //       "website": "http://www.lynnclassical.org",
  //       "levels": [
  //         "High School"
  //       ],
  //       "format": "In School",
  //       "format_description": "Daily programming course",
  //       "gender": "Both",
  //       "description": "Honors Level Computer Programming with Java and C++",
  //       "languages": [
  //         "C++",
  //         "Java"
  //       ],
  //       "money_needed": false,
  //       "online_only": false,
  //       "number_of_students": null,
  //       "contact_name": "Stephen Brass",
  //       "contact_number": "781-477-7404",
  //       "contact_email": "brasss@lynnschools.org",
  //       "latitude": 42.4656,
  //       "longitude": -70.9848,
  //       "street": "235 O'Callaghan Way",
  //       "city": "Lynn",
  //       "state": "MA",
  //       "zip": "01905",
  //       "published": 1,
  //       "updated_at": "2013-02-26T13:31:27Z",
  //       "country": "United States",
  //       "source": "user"
  //     },
  //     {
  //       "name": "South Anchorage HS",
  //       "website": "http://www.asdk12.org/schools/south/pages/",
  //       "levels": [
  //         "High School"
  //       ],
  //       "format": "In School",
  //       "format_description": "Daily programming class",
  //       "gender": "Both",
  //       "description": "",
  //       "languages": [
  
  //       ],
  //       "money_needed": false,
  //       "online_only": false,
  //       "number_of_students": null,
  //       "contact_name": "",
  //       "contact_number": "907-742-6200",
  //       "contact_email": "",
  //       "latitude": 61.1,
  //       "longitude": -149.804,
  //       "street": "13400 Elmore Rd",
  //       "city": "Anchorage",
  //       "state": "AK",
  //       "zip": "99516",
  //       "published": 1,
  //       "updated_at": "2013-01-18T21:07:53Z",
  //       "country": "United States",
  //       "source": "user"
  //     },
  //     {
  //       "name": "Wasilla High School",
  //       "website": "http://www.matsuk12.us/Domain/3108",
  //       "levels": [
  //         "High School"
  //       ],
  //       "format": "In School",
  //       "format_description": "Daily programming class",
  //       "gender": "Both",
  //       "description": null,
  //       "languages": [
  
  //       ],
  //       "money_needed": false,
  //       "online_only": false,
  //       "number_of_students": null,
  //       "contact_name": null,
  //       "contact_number": "907-352-8200",
  //       "contact_email": null,
  //       "latitude": 61.5868,
  //       "longitude": -149.432,
  //       "street": "701 E Bogard Rd",
  //       "city": "Wasilla",
  //       "state": "AK",
  //       "zip": "99654",
  //       "published": 1,
  //       "updated_at": "2013-01-11T01:59:08Z",
  //       "country": "United States",
  //       "source": "csta"
  //     },
  //     {
  //       "name": "Alabama School of Fine Arts",
  //       "website": "http://www.asfa.k12.al.us/",
  //       "levels": [
  //         "High School"
  //       ],
  //       "format": "In School",
  //       "format_description": "Daily programming class",
  //       "gender": "Both",
  //       "description": null,
  //       "languages": [
  
  //       ],
  //       "money_needed": true,
  //       "online_only": false,
  //       "number_of_students": null,
  //       "contact_name": null,
  //       "contact_number": "205-252-9241",
  //       "contact_email": null,
  //       "latitude": 33.5204,
  //       "longitude": -86.8133,
  //       "street": "1800 Rev Abraham Woods Jr Blvd",
  //       "city": "Birmingham",
  //       "state": "AL",
  //       "zip": "35203",
  //       "published": 1,
  //       "updated_at": "2013-01-11T01:59:08Z",
  //       "country": "United States",
  //       "source": "csta"
  //     },
  //     {
  //       "name": "Alabama School of Mathematics and Science",
  //       "website": "http://www.asms.net/",
  //       "levels": [
  //         "High School"
  //       ],
  //       "format": "In School",
  //       "format_description": "Daily programming class",
  //       "gender": "Both",
  //       "description": null,
  //       "languages": [
  
  //       ],
  //       "money_needed": false,
  //       "online_only": false,
  //       "number_of_students": null,
  //       "contact_name": null,
  //       "contact_number": "251-441-2100",
  //       "contact_email": null,
  //       "latitude": 30.6873,
  //       "longitude": -88.0645,
  //       "street": "1255 Dauphin St",
  //       "city": "Mobile",
  //       "state": "AL",
  //       "zip": "36604",
  //       "published": 1,
  //       "updated_at": "2013-01-11T01:59:08Z",
  //       "country": "United States",
  //       "source": "csta"
  //     },
  //     {
  //       "name": "Alma Bryant High School",
  //       "website": "http://bryant.mcs.schoolinsites.com/",
  //       "levels": [
  //         "High School"
  //       ],
  //       "format": "In School",
  //       "format_description": "Daily programming class",
  //       "gender": "Both",
  //       "description": null,
  //       "languages": [
  
  //       ],
  //       "money_needed": false,
  //       "online_only": false,
  //       "number_of_students": null,
  //       "contact_name": null,
  //       "contact_number": "251-824-3213",
  //       "contact_email": null,
  //       "latitude": 30.4429,
  //       "longitude": -88.2806,
  //       "street": "14001 Hurricane Blvd",
  //       "city": "Bayou La Batre",
  //       "state": "AL",
  //       "zip": "36544",
  //       "published": 1,
  //       "updated_at": "2013-01-11T01:59:08Z",
  //       "country": "United States",
  //       "source": "csta"
  //     },
  //     {
  //       "name": "American Christian Academy",
  //       "website": "http://www.acacademy.com/",
  //       "levels": [
  //         "High School"
  //       ],
  //       "format": "In School",
  //       "format_description": "Daily programming class",
  //       "gender": "Both",
  //       "description": null,
  //       "languages": [
  
  //       ],
  //       "money_needed": true,
  //       "online_only": false,
  //       "number_of_students": null,
  //       "contact_name": null,
  //       "contact_number": "205-553-5963",
  //       "contact_email": null,
  //       "latitude": 33.1977,
  //       "longitude": -87.5082,
  //       "street": "2300 Veterans Memorial Pkwy",
  //       "city": "Tuscaloosa",
  //       "state": "AL",
  //       "zip": "35404",
  //       "published": 1,
  //       "updated_at": "2013-01-11T01:59:08Z",
  //       "country": "United States",
  //       "source": "csta"
  //     },
  //     {
  //       "name": "Bessemer Center for Technology",
  //       "website": "http://bessemer.bcst.schoolinsites.com/",
  //       "levels": [
  //         "High School"
  //       ],
  //       "format": "In School",
  //       "format_description": "Daily programming class",
  //       "gender": "Both",
  //       "description": null,
  //       "languages": [
  
  //       ],
  //       "money_needed": false,
  //       "online_only": false,
  //       "number_of_students": null,
  //       "contact_name": null,
  //       "contact_number": "205-432-3778",
  //       "contact_email": null,
  //       "latitude": 33.37,
  //       "longitude": -87.0028,
  //       "street": "4950 Premere Parkway",
  //       "city": "Bessemer",
  //       "state": "AL",
  //       "zip": "35404",
  //       "published": 1,
  //       "updated_at": "2013-01-11T01:59:08Z",
  //       "country": "United States",
  //       "source": "csta"
  //     },
  //     {
  //       "name": "Bob Jones High School",
  //       "website": "http://bjhs.madisoncity.k12.al.us/",
  //       "levels": [
  //         "High School"
  //       ],
  //       "format": "In School",
  //       "format_description": "Daily programming class",
  //       "gender": "Both",
  //       "description": null,
  //       "languages": [
  
  //       ],
  //       "money_needed": false,
  //       "online_only": false,
  //       "number_of_students": null,
  //       "contact_name": null,
  //       "contact_number": "(256) 772-2547",
  //       "contact_email": null,
  //       "latitude": 34.72,
  //       "longitude": -86.7418,
  //       "street": "650 Hughes Road",
  //       "city": "Madison",
  //       "state": "AL",
  //       "zip": "35758",
  //       "published": 1,
  //       "updated_at": "2013-01-11T01:59:08Z",
  //       "country": "United States",
  //       "source": "csta"
  //     },
  //     {
  //       "name": "Dadeville High School",
  //       "website": "http://www.tallapoosak12.org/dhs",
  //       "levels": [
  //         "High School"
  //       ],
  //       "format": "In School",
  //       "format_description": "Daily programming class",
  //       "gender": "Both",
  //       "description": null,
  //       "languages": [
  
  //       ],
  //       "money_needed": false,
  //       "online_only": false,
  //       "number_of_students": null,
  //       "contact_name": null,
  //       "contact_number": "256-825-7848",
  //       "contact_email": null,
  //       "latitude": 32.8282,
  //       "longitude": -85.7548,
  //       "street": "227 Weldon Street",
  //       "city": "Dadeville",
  //       "state": "AL",
  //       "zip": "36853",
  //       "published": 1,
  //       "updated_at": "2013-01-11T01:59:08Z",
  //       "country": "United States",
  //       "source": "csta"
  //     },
  //     {
  //       "name": "Dale County Christian School",
  //       "website": "http://dccs.ewellbaptist.org/",
  //       "levels": [
  //         "High School"
  //       ],
  //       "format": "In School",
  //       "format_description": "Daily programming class",
  //       "gender": "Both",
  //       "description": null,
  //       "languages": [
  
  //       ],
  //       "money_needed": true,
  //       "online_only": false,
  //       "number_of_students": null,
  //       "contact_name": null,
  //       "contact_number": "334.774.4127",
  //       "contact_email": null,
  //       "latitude": 31.4231,
  //       "longitude": -85.5724,
  //       "street": "64 Susie Street",
  //       "city": "Ozark",
  //       "state": "AL",
  //       "zip": "36360",
  //       "published": 1,
  //       "updated_at": "2013-01-11T01:59:08Z",
  //       "country": "United States",
  //       "source": "csta"
  //     },
  //     {
  //       "name": "Demopolis High School",
  //       "website": "http://www.dcsedu.com/education/school/school.php?sectionid=2034&linkid=nav-menu-container-1-14662",
  //       "levels": [
  //         "High School"
  //       ],
  //       "format": "In School",
  //       "format_description": "Daily programming class",
  //       "gender": "Both",
  //       "description": null,
  //       "languages": [
  
  //       ],
  //       "money_needed": false,
  //       "online_only": false,
  //       "number_of_students": null,
  //       "contact_name": null,
  //       "contact_number": "(334) 289-0294",
  //       "contact_email": null,
  //       "latitude": 32.4983,
  //       "longitude": -87.8464,
  //       "street": "701 Hwy. 80 West",
  //       "city": "Demopoli",
  //       "state": "AL",
  //       "zip": "36732",
  //       "published": 1,
  //       "updated_at": "2013-01-11T01:59:08Z",
  //       "country": "United States",
  //       "source": "csta"
  //     },
  //     {
  //       "name": "Elmore County High School",
  //       "website": "http://elmorecounty.ech.schoolinsites.com/",
  //       "levels": [
  //         "High School"
  //       ],
  //       "format": "In School",
  //       "format_description": "Daily programming class",
  //       "gender": "Both",
  //       "description": null,
  //       "languages": [
  
  //       ],
  //       "money_needed": false,
  //       "online_only": false,
  //       "number_of_students": null,
  //       "contact_name": null,
  //       "contact_number": "334-541-3662",
  //       "contact_email": null,
  //       "latitude": 32.6342,
  //       "longitude": -86.03,
  //       "street": "155 N College Ave",
  //       "city": "Eclectic",
  //       "state": "AL",
  //       "zip": "36024",
  //       "published": 1,
  //       "updated_at": "2013-01-11T01:59:08Z",
  //       "country": "United States",
  //       "source": "csta"
  //     },
  //     {
  //       "name": "Emmanuel Christian School",
  //       "website": "http://emmanuelchristian.org/",
  //       "levels": [
  //         "High School"
  //       ],
  //       "format": "In School",
  //       "format_description": "Daily programming class",
  //       "gender": "Both",
  //       "description": null,
  //       "languages": [
  
  //       ],
  //       "money_needed": true,
  //       "online_only": false,
  //       "number_of_students": null,
  //       "contact_name": null,
  //       "contact_number": "334-792-0935",
  //       "contact_email": null,
  //       "latitude": 31.1997,
  //       "longitude": -85.4384,
  //       "street": "178 Earline Rd",
  //       "city": "Dothan",
  //       "state": "AL",
  //       "zip": "36305-4200",
  //       "published": 1,
  //       "updated_at": "2013-01-11T01:59:08Z",
  //       "country": "United States",
  //       "source": "csta"
  //     },
  //     {
  //       "name": "Houston County Career and Technical Center",
  //       "website": "https://sites.google.com/site/houstoncountycareertech/home",
  //       "levels": [
  //         "High School"
  //       ],
  //       "format": "In School",
  //       "format_description": "Daily programming class",
  //       "gender": "Both",
  //       "description": null,
  //       "languages": [
  
  //       ],
  //       "money_needed": false,
  //       "online_only": false,
  //       "number_of_students": null,
  //       "contact_name": null,
  //       "contact_number": "334-899-3308",
  //       "contact_email": null,
  //       "latitude": 31.1846,
  //       "longitude": -85.2299,
  //       "street": "801 8th Ave",
  //       "city": "Ashford",
  //       "state": "AL",
  //       "zip": "36312",
  //       "published": 1,
  //       "updated_at": "2013-01-11T01:59:08Z",
  //       "country": "United States",
  //       "source": "csta"
  //     },
  //     {
  //       "name": "NCTHS",
  //       "website": "http://www.hsv.k12.al.us/schools/high/nchs/",
  //       "levels": [
  //         "High School"
  //       ],
  //       "format": "In School",
  //       "format_description": "Daily programming class",
  //       "gender": "Both",
  //       "description": null,
  //       "languages": [
  
  //       ],
  //       "money_needed": false,
  //       "online_only": false,
  //       "number_of_students": null,
  //       "contact_name": null,
  //       "contact_number": "256.428.7800",
  //       "contact_email": null,
  //       "latitude": 34.7228,
  //       "longitude": -86.6954,
  //       "street": "300 Explorer Blvd.",
  //       "city": "Huntsville",
  //       "state": "AL",
  //       "zip": "36312",
  //       "published": 1,
  //       "updated_at": "2013-01-11T01:59:08Z",
  //       "country": "United States",
  //       "source": "csta"
  //     },
  //     {
  //       "name": "Oakwood Adventist Academy",
  //       "website": "http://www.oa.oakwood.edu/",
  //       "levels": [
  //         "High School"
  //       ],
  //       "format": "In School",
  //       "format_description": "Daily programming class",
  //       "gender": "Both",
  //       "description": null,
  //       "languages": [
  
  //       ],
  //       "money_needed": true,
  //       "online_only": false,
  //       "number_of_students": null,
  //       "contact_name": null,
  //       "contact_number": "(256) 726-7010",
  //       "contact_email": null,
  //       "latitude": 34.7557,
  //       "longitude": -86.6606,
  //       "street": "7000 Adventist Blvd",
  //       "city": "Huntsville",
  //       "state": "AL",
  //       "zip": "35896",
  //       "published": 1,
  //       "updated_at": "2013-01-11T01:59:08Z",
  //       "country": "United States",
  //       "source": "csta"
  //     },
  //     {
  //       "name": "Southern Academy",
  //       "website": "http://southernacademy.net/",
  //       "levels": [
  //         "High School"
  //       ],
  //       "format": "In School",
  //       "format_description": "Daily programming class",
  //       "gender": "Both",
  //       "description": null,
  //       "languages": [
  
  //       ],
  //       "money_needed": true,
  //       "online_only": false,
  //       "number_of_students": null,
  //       "contact_name": null,
  //       "contact_number": " 334-624-8111",
  //       "contact_email": null,
  //       "latitude": 32.7009,
  //       "longitude": -87.5838,
  //       "street": "407 College Street",
  //       "city": "Greensboro",
  //       "state": "AL",
  //       "zip": "36744",
  //       "published": 1,
  //       "updated_at": "2013-01-11T01:59:08Z",
  //       "country": "United States",
  //       "source": "csta"
  //     },
  //     {
  //       "name": "Tuscaloosa Academy",
  //       "website": "http://www.tuscaloosaacademy.org/",
  //       "levels": [
  //         "High School"
  //       ],
  //       "format": "In School",
  //       "format_description": "Daily programming class",
  //       "gender": "Both",
  //       "description": null,
  //       "languages": [
  
  //       ],
  //       "money_needed": true,
  //       "online_only": false,
  //       "number_of_students": null,
  //       "contact_name": null,
  //       "contact_number": " 205 - 758 - 4462",
  //       "contact_email": null,
  //       "latitude": 33.2423,
  //       "longitude": -87.5393,
  //       "street": "420 Rice Valley Rd. N.",
  //       "city": "Tuscaloosa",
  //       "state": "AL",
  //       "zip": "35406",
  //       "published": 1,
  //       "updated_at": "2013-01-11T01:59:08Z",
  //       "country": "United States",
  //       "source": "csta"
  //     }
  //     ]
  // })

  // ^^^ static data

  // correct below is not rendering correctly



  const [schools, setSchools] = useState({
    response:  []
  });

  // const loadSchools = async () => {
  //     const response = await axios.get("https://api.schooldigger.com/v1.2/schools?st=CA&appID=20b17e1b&appKey=16a4cbfd56c81912a829fed9abb8bd56");
  //     console.log(response.data)

  // }





  return (

    <div id="app">
      
      <NavBar />
          <Switch>
            <Route exact path='/form'>
              <Form />
            </Route>
            <Route exact path='/about'>
                <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        <Footer />
    
    </div >
  );
}

export default App;
