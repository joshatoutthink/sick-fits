import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import DeleteItem from './DeleteItem'
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import ItemStyles from './styles/ItemStyles';
import AddToCart from './AddToCart'
import formatMoney from '../lib/formatMoney'


export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  }

  render() {
    const { item }  = this.props
    return (
      <ItemStyles>
        {item.image && <img src={item.image} alt={item.name}/> }
        <Title>
          <Link href={{
            pathname:"/item",
            query:{ id: item.id }
          }}>
            <a>
              {item.title}
            </a>
          </Link>
        </Title>
        <PriceTag>
          {formatMoney(item.price)}
        </PriceTag>
        <p>{item.description}</p>
        <div className="buttonList">
          <Link href={{
            pathname:"update",
            query:{ id: item.id }
          }}>
            <a>Edit</a>
          </Link>
          <Link href={{
            pathname: "",
            query: { id: item.id }
          }}>
            <AddToCart id={item.id}/>
          </Link>
          <DeleteItem id={item.id}>Delete Item</DeleteItem>
        </div>
      </ItemStyles>
    )
  }
}
