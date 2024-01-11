<script setup></script>
<template>
  <div class="flex flex-col">
    <Hamburger />
    <div class="flex-grow min-h-screen">
      <slot />
    </div>
    <Footer />
  </div>
</template>
