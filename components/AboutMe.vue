<template>
  <div class="max-w-7xl mx-auto p-6">
    <div
      class="bg-slate-50 dark:bg-gray-900 border-b-2 border-indigo-500 p-4 md:p-8 rounded-lg shadow-lg"
    >
      <p class="text-lg font-deskripsi text-center max-w-2xl mx-auto">
        {{ $t("aboutMe.desk1") }}
        <span class="text-lg font-judul text-indigo-500">Rizky.</span>
        {{ $t("aboutMe.desk2") }}
        <span class="text-lg font-judul text-indigo-500"
          >Front-End developers.</span
        >
      </p>

      <p class="text-lg font-deskripsi text-center mt-4">
        {{ $t("aboutMe.desk3") }}
      </p>

      <div class="mt-6">
        <p class="text-lg text-center font=logo text-indigo-500">
          {{ $t("aboutMe.desk4") }}
        </p>
        <div
          class="max-w-2xl py-6 flex items-center justify-center flex-wrap gap-4 mx-auto mt-4"
        >
          <template v-for="item in iconData" :key="item.link">
            <a :href="item.link" target="_blank" class="relative group">
              <component :is="item.icon" class="h-16 w-16 stroke-1 py-2" />
              <span
                class="absolute -top-6 left-0 right-0 text-black dark:text-white font-deskripsi opacity-0 group-hover:opacity-75 text-center py-2 transition-opacity"
                >{{ item.text }}</span
              >
            </a>
          </template>
        </div>
      </div>

      <div class="my-10">
        <Notes />
      </div>
    </div>
  </div>
</template>

<script setup>
import { IconFileTypeHtml } from "@tabler/icons-vue";
import { IconFileTypeCss } from "@tabler/icons-vue";
import { IconBrandJavascript } from "@tabler/icons-vue";
import { IconBrandVscode } from "@tabler/icons-vue";
import { IconBrandTailwind } from "@tabler/icons-vue";
import { IconBrandVue } from "@tabler/icons-vue";
import { IconBrandNuxt } from "@tabler/icons-vue";

const iconData = ref([
  {
    icon: IconFileTypeHtml,
    text: "HTML",
    link: "https://id.wikipedia.org/wiki/HTML",
  },
  {
    icon: IconFileTypeCss,
    text: "CSS",
    link: "https://id.wikipedia.org/wiki/Cascading_Style_Sheets",
  },
  {
    icon: IconBrandJavascript,
    text: "JS",
    link: "https://id.wikipedia.org/wiki/JavaScript",
  },
  {
    icon: IconBrandVscode,
    text: "Vscode",
    link: "https://code.visualstudio.com/",
  },
  {
    icon: IconBrandTailwind,
    text: "Tailwind",
    link: "https://tailwindcss.com/",
  },
  { icon: IconBrandVue, text: "Vue", link: "https://vuejs.org/" },
  { icon: IconBrandNuxt, text: "Nuxt", link: "https://nuxt.com/" },
]);
</script>
