<template>
  <p class="withe--text">{{opera.title}}</p>
</template>

<script>
export default {
props: ['opera'],
 methods: {
    UpdateOpera() {
      this.$store.dispatch("nftService/updateOpera");
    }
  }
}
</script>
