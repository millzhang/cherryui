<!--
 *@author: yckj0881
 *@date: 2019-05-28 13:47:12
 *@version: v0.0.1
 *@description:
 button 组件
  -type: 组件主题类型,default/primary/danger/warning/success
  -
-->
<template>
  <button class="cu-button"
          :type="type">
    <div class="button__focus-ring"></div>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'CuButton',

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },

  computed: {
    _elFormItemSize () {
      return (this.elFormItem || {}).elFormItemSize;
    },
    buttonSize () {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    buttonDisabled () {
      return this.disabled || (this.elForm || {}).disabled;
    }
  },

  methods: {
    handleClick (evt) {
      this.$emit('click', evt);
    }
  }
};
</script>
