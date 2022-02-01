<template>
  <section class="cart-page">
    <h2 class="cart-page__header title">Your order:</h2>

    <table class="cart-page__order-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Amount</th>
          <th>Price</th>
          <th>Change amount</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in order" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ countPrice(item.amount, item.cost) }}</td>
          <td>
            <RemoveFromCartBtn @removeFromCart="removeFromCart(item.id)" />
          </td>
        </tr>
      </tbody>
    </table>

    <span class="cart-page__total">Total: {{ totalPrice }}</span>

    <CartForm :items-in-cart="order" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import RemoveFromCartBtn from '@/components/UI/RemoveFromCart'
import CartForm from '@/components/CartForm'
import removeFromCart from '@/mixins/removeFromCart'

export default {
  components: { RemoveFromCartBtn, CartForm },

  mixins: [removeFromCart],

  computed: {
    ...mapGetters({
      items: 'getItemsFromCart',
      totalPrice: 'getTotalPrice'
    }),
    order() {
      const orders = this.items.reduce((acc, order) => {
        const item = acc.find(elem => elem.id === order.id)

        if (item) {
          item.amount += 1
        } else {
          acc.push({ ...order, amount: 1 })
        }

        return acc
      }, [])

      return orders
    }
  },

  methods: {
    countPrice(amount, cost) {
      return amount * cost
    }
  }
}
</script>

<style lang="sass">
.cart-page
  &__total
    display: block
    font-weight: 600
    font-size: 20px
    margin-bottom: 25px

  &__order-table
    width: 100%
    border: none
    margin-bottom: 20px

    thead th
      font-weight: bold
      text-align: left
      border: none
      padding: 10px 15px
      background: #d8d8d8
      font-size: 14px
      border-left: 1px solid #ddd
      border-right: 1px solid #ddd

    tbody td
      text-align: left
      border-left: 1px solid #ddd
      border-right: 1px solid #ddd
      padding: 10px 15px
      font-size: 14px
      vertical-align: middle

    thead tr th:first-child, tbody tr td:first-child
      border-left: none

    thead tr th:last-child, tbody tr td:last-child
      border-right: none

    tbody tr:nth-child(even)
      background: #f3f3f3

  @media screen and ( max-width: 580px )
    display: flex
    flex-direction: column

    thead
      @media screen and ( max-width: 580px )
        display: none

    tbody
      @media screen and ( max-width: 580px )
        display: flex
        flex-direction: column

      tr
        display: grid
        grid-template-columns: 2fr 1fr
        grid-template-areas: "item amount price" "btn btn price"
        border: 1px solid $success-color
        border-radius: 15px
        overflow: hidden
        margin-bottom: 20px

      td
        border: none
        font-weight: 500

        &:first-of-type
          grid-area: item
          font-size: 18px
          display: flex
          align-items: center

        &:nth-of-type(2)
          grid-area: amount
          display: flex
          align-items: center
          color: $main-color
          font-size: 18px

          &::before
            content: 'x'
            font-weight: 400
            color: $dark-color
            display: inline-block
            margin-right: 5px

        &:nth-of-type(3)
          grid-area: price
          min-width: 60px
          display: flex
          justify-content: center
          align-items: center
          font-size: 20px
          border-left: 1px solid $success-color
          background-color: transparentize($success-color, 0.7)

        &:last-of-type
          grid-area: btn
          display: flex
          justify-content: center
</style>