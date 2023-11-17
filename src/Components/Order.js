import React from 'react'
import { IndividualOrder } from './IndividualOrder'

export const Order = ({order}) => {
  return order.map((order)=> (
    <IndividualOrder key={order.Id} order={order} />
  ))
}