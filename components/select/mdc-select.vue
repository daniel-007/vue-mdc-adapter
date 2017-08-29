<template>
  <component :is="selectComponent"
    :disabled="disabled" :label="label" :value="value" @change="onChange"
  >
    <slot></slot>
  </component>
</template>

<script lang="babel">
import { SelectMediaMixin, SelectMixin } from './mdc-select-mixins.js'
import MDCNativeSelect from './mdc-native-select.vue'
import MDCRichSelect from './mdc-rich-select.vue'

export default {
  name: 'mdc-select',
  mixins: [SelectMediaMixin, SelectMixin],
  props: {
    'multiple': Boolean
  },
  components: {
    nativeSelect: MDCNativeSelect,
    richSelect: MDCRichSelect
  },
  computed: {
    selectComponent () {
      return (this.multiple || this.useNativeSelect)
        ? 'nativeSelect' : 'richSelect'
    }
  },
  methods: {
    onChange (value) {
      this.$emit('change', value)
    }
  }
}
</script>