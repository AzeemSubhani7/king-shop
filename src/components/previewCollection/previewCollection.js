import React from 'react';
import CollectionItem from '../collectionItem/collectionItem';
import './previewCollection.scss'


const PreviewCollection = ({ title, items }) => {
    return(
        <div className='collection-preview'>
            <h1>{title.toUpperCase()}</h1>
            <div className='preview'>
            {
                items
                .filter((item, index) => index < 4)
                .map(({id, ...otherItemProps}) => {
                    return(
                        <CollectionItem key={id} {...otherItemProps}/>
                    )
                })
            }
            </div>
        </div>
    )
}

export default PreviewCollection;