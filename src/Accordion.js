import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className={`accordion-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
    <div className="accordion-header">
      {title}
      
    </div>
    {isOpen && <div className="accordion-content">{content}</div>}
  </div>
);

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (

    <div>
        <h3> <u>11. Accordion:</u> </h3>

        <div className="accordion">
            {data.map((item, index) => (
                <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={index === activeIndex}
                onClick={() => toggleAccordion(index)}
                />
            ))}
        </div>

        <hr/>
    </div>
    
  );
};

export default Accordion;
