<template>
  <ul class="flex flex-col lg:flex-row lg:gap-2">
    <li class="mb-4 ml-3 lg:ml-0 lg:mb-0 text-indigo-500 hover:text-indigo-600">
      <NuxtLink
        to="/expert"
        @click="$emit(`onMenuClick`)"
        class="flex items-center gap-2 px-2 py-1"
      >
        <IconCode class="w-6 h-6 font-logo" />
        <h1 class="font-logo text-base">{{ $t("navbar.expert") }}</h1>
      </NuxtLink>
    </li>
    <li class="mb-4 ml-3 lg:ml-0 lg:mb-0 text-indigo-500 hover:text-indigo-600">
      <NuxtLink
        to="/blogs"
        @click="$emit(`onMenuClick`)"
        class="flex items-center gap-2 px-2 py-1"
      >
        <IconTags class="w-6 h-6 font-logo" />
        <h1 class="font-logo text-base">{{ $t("navbar.blog") }}</h1>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
import { IconTags } from "@tabler/icons-vue";
import { IconCode } from "@tabler/icons-vue";

defineEmits(["onMenuClick"]);
</script>
