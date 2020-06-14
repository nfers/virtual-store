import React from "react";

import "./directory.scss";
import MenuItem from './../Menu-Item/Index';

/*component statefull*/
class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "chapeus",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
        },
        {
          title: "jaquetas",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
        },
        {
          title: "tenis",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 2,
        },
        {
          title: "mulheres",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          id: 4,
        },
        {
          title: "homens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          id: 5,
        }]
    }
  }
  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({title, imageUrl, id}) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl}/>
          ))
        }
      </div>
    )
  }

}
export default Directory;
