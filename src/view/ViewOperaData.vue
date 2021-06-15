<template>
  <p>Dettagli opera</p>
</template>

<script>
export default {
props: ['selected'],
created() {
  console.log(this.selected)
}
}
</script>
