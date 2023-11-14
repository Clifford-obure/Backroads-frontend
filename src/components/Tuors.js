import React from 'react';
import Title from './Title';
import { tours } from '../data';

function Tuors() {
  return (
    <div>
    <section className="section" id="tours">
    <Title title='featured' subTitle='tours'/>
      <div className="section-center featured-center">
        {
          tours.map((tour)=>{
            return(
              <article className="tour-card" key={tour.id}>
              <div className="tour-img-container">
                <img src={tour.image} className="tour-img" alt="" />
                <p className="tour-date">{tour.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tour.title}</h4>
                </div>
                <p>
                 {tour.info}
                </p>
                <div className="tour-footer">
                  <p>
                    <span><i className="fas fa-map"></i></span> china
                  </p>
                  <p>{tour.duration}</p>
                  <p>from ${tour.location2}</p>
                </div>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
    </div>
  );
}

export default Tuors;
