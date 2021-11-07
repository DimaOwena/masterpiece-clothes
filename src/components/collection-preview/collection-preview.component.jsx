import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

//performance concern if array gets very large since it
//implement filter and map everytime this component get render or rerender
const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {console.log(items)}
            {items
                .filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps}/>
            ))}
        </div>
    </div>
)

export default CollectionPreview;