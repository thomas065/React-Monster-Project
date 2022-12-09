// import { Component } from "react";

import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => {
    return (
        <div className="card-list">
            {monsters.map((monster) => {
                return <Card monster={monster} />;
            })}
        </div>
    );
};

export default CardList;

// class CardList extends Component {
//     render() {
//         // console.log(this.props.monsters);
//         // console.log('render from CardList');
//         const { monsters } = this.props;
//         return (
//             <div className="card-list">
//                 {monsters.map((monster) => {
//                     return <Card monster={monster} />;
//                 })}
//             </div>
//         );
//     }
// }

// export default CardList;
