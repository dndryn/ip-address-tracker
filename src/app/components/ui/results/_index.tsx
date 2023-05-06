import React from 'react';
import { useState } from 'react';
import Block from './Block';
import data from '@data/site'; // path: src\app\data\site.json
import '@style/results'; // path: src\app\assets\scss\results.scss


const Results = (): JSX.Element => {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    
    console.log('Block element was clicked!');
  }

  const e = () => {
    console.log(`You have hover results!`);
  }

  const blocks: JSX.Element[] = data.site.map(block => {

    return (
      <Block
        heading={block.heading.toLocaleUpperCase()}
        onClick={handleClick}
        content={block.content}
        key={block.heading}
      >
        {block.heading !== "IP address" && (
          <span className="results_block_separator" />
        )}
      </Block>
    );

  });
  
  return (
    <div 
      id="results" 
      className="is-flex" 
      onClick={handleClick}
    >
      {blocks}
    </div>
  );

}

export default Results;