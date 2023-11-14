import React from 'react';
import { pageLinks } from '../data';

function PageLinks({parentClass,itemClass}) {
  return (
    <div>
      <ul className={parentClass} id="nav-links">
            {pageLinks.map((link)=>{
               return (
                <li key={link.id}>
                <a href={link.href} className={itemClass}> {link.text} </a>
              </li>
               ) 
            })}
        </ul>
    </div>
  );
}

export default PageLinks;
