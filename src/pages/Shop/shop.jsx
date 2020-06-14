import React from 'react';
 
import SHOP_DATA from './shop.data'
import CollectionPreview from './../../components/CollectionPreview/index';


class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colletions: SHOP_DATA
    }
  }

  render() {
    return (
      <div className="shop-page">
        {
          
          this.state.colletions.map(({id, ...otherCollectionsProps }) => (
            <CollectionPreview key={id} {...otherCollectionsProps} />
          ))
        }
      </div>
    );
  }
}

export default ShopPage;