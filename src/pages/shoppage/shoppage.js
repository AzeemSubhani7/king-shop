import React from 'react';
import PreviewCollection from '../../components/previewCollection/previewCollection';
// import SHOP_DATA from './shopData';
import { connect } from 'react-redux';
import { selectShopCollections } from '../../redux/shop/shopSelector';
import { createStructuredSelector } from 'reselect';

const ShopPage = ({ collections }) => {
    return(
        <div className='shop-page'>
            {
                collections.map( ({id, ...otherCollectionProps}) => {
                    return(
                            <PreviewCollection key={id} {...otherCollectionProps} />
                        )
                } )
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})
export default connect(mapStateToProps)(ShopPage);