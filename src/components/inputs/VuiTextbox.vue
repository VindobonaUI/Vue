<template>
  <input
    :type="type"
    class="border border-green rounded outline-none"
    :placeholder="placeholder"
  />
</template>
<script>
export default {
  name: "vui-textbox",
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String
    }
  }
};
</script>
