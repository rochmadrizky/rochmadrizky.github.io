<template>
  <div class="max-w-4xl flex items-center justify-center">
    <div>
      <img
        src="/images/thisIsMe.png"
        alt="Foto Profil"
        class="rounded-full mx-auto w-36 h-36 mb-3 ring-indigo-500 ring-2 p-0.5 bg-slate-50 dark:bg-gray-900"
      />
      <div class="text-center">
        <p class="text-xl md:text-2xl font-logo">
          {{ $t("halamanUp.ucapan") }}
        </p>
        <h1 class="text-4xl font-judul">Rizky Putra.</h1>
        <p class="font-judul text-lg md:text-xl dark:text-indigo-500">
          Front-End Developer.
        </p>
      </div>

      <div class="flex items-center justify-center my-2 gap-1">
        <template v-for="items in iconLogo" :key="items.link">
          <a :href="items.link" target="_blank" class="relative group">
            <component :is="items.icon" class="h-12 w-12 stroke-1 py-2" />
            <span
              class="absolute -bottom-6 left-0 right-0 text-black dark:text-white font-deskripsi opacity-0 group-hover:opacity-75 text-center py-2 transition-opacity"
              >{{ items.text }}</span
            >
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { IconBrandInstagram, IconMail } from "@tabler/icons-vue";

const iconLogo = ref([
  {
    icon: IconBrandInstagram,
    text: "IG",
    link: "https://www.instagram.com/rizkyever/",
  },
  {
    icon: IconMail,
    text: "Gmail",
    link: "mailto:rochmadrizkyputra@gmail.com",
  },
]);
</script>
