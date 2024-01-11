<template>
  <footer
    class="font-juduk bottom-0 w-full bg-indigo-100 dark:bg-gray-950 p-3 text-center text-lg"
  >
    <p>&copy;{{ currentYear }}, {{ $t("footer.hakCipta") }}</p>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
