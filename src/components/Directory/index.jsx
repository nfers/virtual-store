import React from "react";

import "./directory.scss";
import MenuItem from "./../Menu-Item/Index";

/*component statefull*/
class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "chapeus",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          size: "large",
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: "jaquetas",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          size: "large",
          id: 2,
          linkUrl: 'jackets'
        },
        {
          title: "tenis",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          size: "large",
          id: 3,
          linkUrl: 'sneakers'
        },
        {
          title: "mulheres",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: 'womens'
        },
        {
          title: "homens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: 'men'
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps}/>
        ))}
      </div>
    );
  }
}
export default Directory;
