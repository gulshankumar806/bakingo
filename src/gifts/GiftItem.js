import React, {Component} from 'react';
import './GiftItem.css';

class GiftItem extends Component {

  state = {
    item : [
      {
        id: '1',
        img: '../../images/prod-1.png',
        name: 'Flowers'
      },
      {
        id: '2',
        img: '../../images/prod-2.png',
        name: 'Cakes'
      },
      {
        id: '3',
        img: '../../images/prod-3.png',
        name: 'Plants'
      },
      {
        id: '4',
        img: '../../images/prod-4.png',
        name: 'Gifts'
      },
      {
        id: '5',
        img: '../../images/prod-5.png',
        name: 'Combos'
      },
      {
        id: '6',
        img: '../../images/prod-6.png',
        name: 'Hampers'
      },
      {
        id: '7',
        img: '../../images/prod-7.png',
        name: 'Personalised'
      },
      {
        id: '8',
        img: '../../images/prod-8.png',
        name: 'Lamps'
      }
    ]
  }

  render(){
    
    return (
      <div className="gift-item-wp">
        {
          this.state.item.map(
            item => (

                <div className="gift-item" key={item.id}>
                    <a href="javascript:void(0);">
                        <img src={item.img} alt="" />
                        <h2>{item.name}</h2>
                    </a>
                </div>
            )
          )
        }    
      </div>
    );
  }
}

export default GiftItem;
