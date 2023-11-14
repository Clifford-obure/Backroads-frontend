import React from 'react';

function Service({service}) {
  return (
    <div>
       <article className="service">
          <span className="service-icon"><i className={service.icon}></i></span>
          <div className="service-info">
            <h4 className="service-title">{service.title}</h4>
            <p className="service-text">
              {service.text}
            </p>
          </div>
        </article>
    </div>
  );
}

export default Service;
