import React from 'react'
import { Categories, SortPopup, ItemsBlock } from '../components'

function Home({ itemsArr }) {
    return (
        <div className="container">
          <div className="content__top">
            <Categories 
            onClick={(items) => console.log(items)}
            items={[
              'Мясние',
              "Вегетарианские",
              "Гриль",
              "Острие",
              "Закритие"
            ]}/>
          <SortPopup items={['популярности', 'цена', 'альфавит']}/>

          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              
              itemsArr.map((obj, index) => (
                <ItemsBlock key={obj.id + '_' + index} {...obj} />
              ))
              
            }
          </div>
        </div>
    )
}

export default Home
