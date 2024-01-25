<template>
  <div class="max-w-6xl mx-auto">
    <div class="flex items-center justify-center">
      <div class="p-8">
        <div class="flex items-center gap-2">
          <IconDatabaseOff />
          <h1>{{ $t("notes.judul") }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { IconDatabaseOff } from "@tabler/icons-vue";
</script>

<style lang="scss" scoped></style>
