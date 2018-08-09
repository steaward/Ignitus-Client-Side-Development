import React, { Component } from 'react';
import pic1 from '../../Images/Team/ayush.jpeg';
import pic2 from '../../Images/Team/afelio.jpeg';
import pic3 from '../../Images/Team/divyanshu.jpeg';
import pic4 from '../../Images/Team/jennifer.jpeg';
import pic5 from '../../Images/Team/sumit.jpeg';
import pic6 from '../../Images/Team/sayantika.jpeg';
import pic7 from '../../Images/Team/suprabhat.jpeg';
import pic8 from '../../Images/Team/paarmita.jpeg';

import './Team.css';


class Team extends Component{
	render()
	{
	    const Images_array = [pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8];

      const data =[
      {
        title:"Ayush Pareek",
        description: "Founder, CEO", 
        github: "https://github.com/Ignitus",
        linkedin: "https://www.linkedin.com/company/igniteus?trk=ppro_cprof",
        facebook: "https://www.facebook.com/Ignitus.org/"

      },
      {
        title:"Afelio Padilla",
        description:"COO" ,
        github: "https://github.com/Ignitus",
        linkedin: "https://www.linkedin.com/company/igniteus?trk=ppro_cprof",
        facebook: "https://www.facebook.com/Ignitus.org/"
      },
      { 
        title:"Divyanshu Rawat",
        description:"Co-founder, CTO" ,
        github: "https://github.com/Ignitus",
        linkedin: "https://www.linkedin.com/company/igniteus?trk=ppro_cprof",
        facebook: "https://www.facebook.com/Ignitus.org/"
      },
      {
        title:"Jennifer Thornton",
        description: "Human Resources & Administration" ,
        github: "https://github.com/Ignitus",
        linkedin: "https://www.linkedin.com/company/igniteus?trk=ppro_cprof",
        facebook: "https://www.facebook.com/Ignitus.org/"
      },
      { 
        title:"Sumit Mathur",
        description:"Lead Content-Writing & Marketing" ,
        github: "https://github.com/Ignitus",
        linkedin: "https://www.linkedin.com/company/igniteus?trk=ppro_cprof",
        facebook: "https://www.facebook.com/Ignitus.org/"
      },
      {
        title:"Sayantika Banik",
        description:"WooTech mentor" ,
        github: "https://github.com/Ignitus",
        linkedin: "https://www.linkedin.com/company/igniteus?trk=ppro_cprof",
        facebook: "https://www.facebook.com/Ignitus.org/"
      },
      { 
        title:"Suprabhat Das",
        description:"Marketing Manager",
        github: "https://github.com/Ignitus",
        linkedin: "https://www.linkedin.com/company/igniteus?trk=ppro_cprof",
        facebook: "https://www.facebook.com/Ignitus.org/" 
      },
      {
        title:"Paarmita Bhargava",
        description:"Product Designer" ,
        github: "https://github.com/Ignitus",
        linkedin: "https://www.linkedin.com/company/igniteus?trk=ppro_cprof",
        facebook: "https://www.facebook.com/Ignitus.org/"

      }
    ];

    let _html = Images_array.map(function (logo,x,key) {

        return(

           <div className="col-lg-3 col-md-4 col-sm-6 col-9 mx-auto  _imgs  " key = {key}>
              <div className="ch-item">
                <div className="imag">
                  <img src={logo} alt={"logo"} className = "mx-auto d-block image_style _team"/> 
                </div>
                  <div className="overlay">
                    <div className = "col-sm-12 col-md-12 col-lg-12 col-xs-12 middle "></div>
                  </div>
              </div>
                  <div className = "col-sm-12 col-md-12 col-lg-12 col-xs-12 textalign ">{data[x].title}</div>
                  <div className = "col-sm-12 col-md-12 col-lg-12 col-xs-12 textalign _disc ">{data[x].description}</div>
                  <div>
                  <ul className="list-unstyled list-inline text-center col-sm-12 col-md-12 col-lg-12 col-xs-12 textalign ">
                <li className="list-inline-item  _icon">
                  <a className=" mx-2" target="_blank" href={data[x].github}>
                    <i className="fa fa-github"> </i>
                  </a>
                </li>
                <li className="list-inline-item  _icon">
                  <a className=" mx-2" target="_blank" href={data[x].linkedin}>
                    <i className="fa fa-linkedin"> </i>
                  </a>
                </li>
                <li className="list-inline-item  _icon">
                  <a className=" mx-2" target="_blank" href={data[x].facebook}>
                    <i className="fa fa-facebook"> </i>
                  </a>
                </li>
                
              </ul>
              </div>
          </div>
        )
      })



	return (
    <div>
  
          <div className = "col-sm-12 col-md-12 col-lg-12 col-xs-12 _align mt-4">
               <div className = "_contributor">Our Team</div>
              <div className = "_students_researchers" >We're led by a team who constanty questions, tinkers, and</div>
              <div className = "_students_researchers" >challenges to unlock great creativity around every turn.</div>
         </div>
        	<div className = "container">
         	 <div className = "row">
            	{_html}
         	 </div>
      		</div>
    </div>
	);
	}
}
export default Team;