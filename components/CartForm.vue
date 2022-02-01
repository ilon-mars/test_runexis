<template>
  <ValidationObserver v-slot="{ invalid }" tag="div" @submit.prevent="onSubmit">
    <form class="cart-page__form">
      <fieldset class="cart-page__form-group">
        <legend class="cart-page__form-title title">Contact information</legend>
        <ValidationProvider v-slot="{ errors }" rules="required|alpha_spaces">
          <input
            v-model="name"
            type="text"
            class="cart-page__form-input"
            placeholder="Name"
            name="name"
            :class="{ error: errors[0] }"
          />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider v-slot="{ errors }" rules="required|email">
          <input
            v-model="email"
            type="email"
            class="cart-page__form-input"
            placeholder="Email"
            name="email"
            :class="{ error: errors[0] }"
          />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          :rules="{
            required: true,
            regex:
              /^\+7[(]{1}[0-9]{3}[)]{1}[0-9]{3}[-]{0,1}[0-9]{2}[-]{0,1}[0-9]{2}$/,
          }"
        >
          <input
            v-model="phone"
            type="tel"
            class="cart-page__form-input"
            placeholder="+7(123)456-78-90"
            name="phone"
            :class="{ error: errors[0] }"
          />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
      </fieldset>

      <div class="cart-page__form-buttons">
        <button
          class="btn cart-page__submit"
          type="submit"
          :disabled="invalid || !totalPrice"
        >
          Submit
        </button>

        <button class="btn cart-page__form-reset" type="reset">
          Reset form
        </button>
        <button
          class="btn cart-page__cart-reset"
          type="button"
          @click="resetCart"
        >
          Reset cart
        </button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapGetters } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { ENDPOINTS } from '~/service/api'

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },

  props: {
    itemsInCart: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      phone: '',
      name: '',
      email: ''
    }
  },

  computed: {
    ...mapGetters({
      totalPrice: 'getTotalPrice',
      cart: 'getItemsFromCart'
    })
  },

  methods: {
    resetCart() {
      this.$store.commit('RESET_CART')
    },

    onSubmit(e) {
      const order = this.itemsInCart.map(item => ({
        name: item.name,
        amount: item.amount,
        total: item.amount * item.cost
      }))

      this.$axios
        .post(ENDPOINTS.postData, {
          name: this.name,
          phone: this.phone,
          email: this.email,
          order,
          totalPrice: this.totalPrice
        })
        .then(() => {
          e.target.reset()
          this.resetCart()
          this.name = this.email = this.phone = ''
        })
    }
  }
}
</script>

<style lang="sass">
.cart-page
  &__form
    display: flex
    flex-direction: column
    align-items: center

    &-group
      display: flex
      flex-direction: column
      margin-bottom: 15px

      & > span
        display: flex
        flex-direction: column
        margin-bottom: 15px
        align-items: center

    &-input
      width: 300px
      margin: 0 auto 15px
      min-height: 30px
      padding: 10px
      border: 1px solid $main-color
      border-radius: 10px
      font-family: inherit
      font-size: 16px

      &.error
        border: 1px solid $warning-color

      & + span
        color: $warning-color

      @media screen and ( max-width: 400px )
        width: 250px

    &-reset
      border: 2px solid $main-color
      margin-right: 15px
      transition: all 0.3s ease-in-out

      &:hover
        border-color: transparent
        color: $light-color
        background-color: $main-color

    &-buttons
      display: flex
      justify-content: center

  &__cart-reset
    border: 2px solid $warning-color
    margin-right: 15px
    transition: all 0.3s ease-in-out

    &:hover
      border-color: transparent
      color: $light-color
      background-color: $warning-color

  &__submit
    transition: all 0.3s ease-in-out
    background-color: $success-color
    font-weight: 500
    color: $light-color
    margin-right: 15px
    border: 2px solid transparent

    &:not(:disabled):hover
      background-color: transparent
      border-color: $success-color
      color: $dark-color

    &:disabled
      opacity: 0.5
      cursor: default
</style>