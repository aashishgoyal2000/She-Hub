<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  FROM SHARED COMPONENT FOOBAR
  <div>
    msg prop value - {{msg}}
  </div>
</template>