import React from 'react'
    
// class Categories extends React.Component {

//     state = {
//         activeItem: null
//     }

//     onSelectItem = index => {
//         this.setState({
//             activeItem: index
//         });
//     }

//     render() {
//         const { items, onClick } = this.props;
//         return (
//             <div>
//             <div className="categories">
//               <ul>
//                 <li className="active">Все</li>
//                 { items.map((items, index) => (
//                     <li 
//                         className={this.state.activeItem === index ? 'active' : ''}
//                         onClick={() => this.onSelectItem(index)} key={`${items}_${index}`}> {items} 
//                     </li> 
//                 ))}
//               </ul>
//             </div>
//         </div> 
//         )
//     }
// }

function Categories( { items, onClick } ) {

    const [ activeItem, setActiveItem] = React.useState(null);
    
    const onSelectItem = (index) => {
        setActiveItem(index);
    }

    return (
        <div>
            <div className="categories">
              <ul>
                <li 
                    className={activeItem === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}
                >
                    Все
                </li>
                { items &&
                    items.map((items, index) => (
                    <li 
                        className={activeItem === index ? 'active' : ''}
                        onClick={() => onSelectItem(index)} 
                        key={`${items}_${index}`}> {items} </li> 
                ))}
              </ul>
            </div>
        </div>
    )
}

 export default Categories;
