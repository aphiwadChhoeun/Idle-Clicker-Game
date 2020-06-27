<template>
  <base-modal>
    <template v-slot:header>Upgrade Shop</template>
    <template v-slot:body>
      <div class="settings__body__container">
        Coming soon!
      </div>
    </template>
  </base-modal>
</template>

<script>
import BaseModal from './BaseModal'

export default {
  name: 'UpgradeShop',

  components: {
    BaseModal
  }
}
</script>
