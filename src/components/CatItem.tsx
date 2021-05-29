import React from 'react';

interface CatItemProps {
    id?: number,
    url: string
}

export default function CatItem(props: CatItemProps) {
    let {url} = props
    return (
        <div className='item-container'>
            <div className='image'>
                <img src={url}/>
            </div>
        </div>
    )
}