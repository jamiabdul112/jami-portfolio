import React from 'react';
import './current.css';

const currentData = [
  { name: '🚀 Currently Exploring: Ai Integrations In Apps, Vercel ai sdk, RAG' },
]

function Current() {
  // Duplicating the dataset to guarantee a seamless, endless infinite loop track canvas
  const items = [...currentData, ...currentData, ...currentData, ...currentData, ...currentData, ...currentData];

  return (
    <div className='current-page'>
      <div className="current-wrapper">
        <div className="current-track">
          {items.map((item, i) => (
            <div className="current-pill" key={i}>
              <span className="current-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Current;