import React from 'react';
// TODO: [?] To evaluate whether to define the following element as a Fragment 
// and to require props from the parent to render the conditional 'span' element.

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