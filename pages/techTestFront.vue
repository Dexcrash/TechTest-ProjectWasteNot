<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="number"
      :rules="numberRules"
      type="number"
      label="Number"
      required
      @input="onInput"
    />

    <v-chip :color="color">
      {{ message }}
    </v-chip>
  </v-form>
</template>

<script>
import _ from 'lodash'
import { DummyService } from './../services/dummyService'

export default {
  name: 'Proyect Waste Not Test',
  data: () => ({
    valid: true,
    number: '',
    message: 'Waiting for input',
    color: 'gray',
    numberRules: [
      v => !!v || 'A number is required'
    ],
    checkbox: false
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    waitingState () {
      this.message = 'Waiting for input'
      this.color = 'gray'
    },
    save () {
      this.message = 'Auto saving...'
      this.color = 'orange'
      DummyService.dummyAPICall().then(() => {
        this.message = 'Saved'
        this.color = 'green'
      })
    },
    onInput () {
      this.waitingState()
      this.autoSave()
    },
    autoSave: _.debounce(function () {
      this.save()
    }, 2000)
  }
}
</script>
