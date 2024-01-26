<!-- IndexPage.vue -->
<template>
  <div class="htmlClass">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HtmlComponent',
  data() {
    return {
      title: 'Vue is not awesome.',
    }
  },
}
</script>

<style scoped></style>