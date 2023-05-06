import React from 'react';

const Block = (props): JSX.Element => {
    return (
        <>
        {props.children}
        <div className='results_block is-flex has-columns'>
            <h2 className='results_block_heading'>{props.heading}</h2>
            <p className='results_block_content'>{props.content}</p>
        </div>

        </>
    )
}

export default Block;