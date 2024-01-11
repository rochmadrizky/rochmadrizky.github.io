<template>
  <div>
    <div
      class="h-96 flex items-center justify-center"
      :style="{
        backgroundImage: `url('${backgroundAtas}')`,
      }"
    >
      <div class="px-10">
        <h1 class="text-3xl text-center font-logo">{{ $t("blogs.judul") }}</h1>
        <p class="font-judul text-lg text-center py-4">
          {{ $t("blogs.desk") }}
        </p>
        <h1 class="dark:text-indigo-500 text-center text-2xl">
          {{ $t("blogs.tag") }}
        </h1>
      </div>
    </div>

    <div class="w-full h-64 bg-indigo-100 dark:bg-gray-950 relative">
      <h1
        class="text-center pt-20 md:text-2xl font-logo text-xl text-indigo-500"
      >
        {{ $t("blogs.judul2") }}
      </h1>
    </div>

    <div class="flex items-center justify-center pt-6 relative -top-36">
      <AboutMe />
    </div>

    <div class="relative flex items-center justify-center px-2 pb-10">
      <div class="p-8">
        <h1 class="ml-5 text-xl font-logo text-indigo-500">
          {{ $t("blogs.salam") }}
        </h1>
        <h1 class="ml-14 text-2xl font-judul py-1">
          {{ $t("blogs.terimakasih") }}
        </h1>
        <div class="flex items-center justify-center">
          <p class="font-deskripsi text-lg">{{ $t("blogs.tags") }}</p>
          <img :src="code" alt="Code" class="w-8 h-8" />
        </div>
      </div>

      <img
        :src="Dtriangle"
        alt="hiasan"
        class="absolute lg:block hidden left-32 bottom-10"
      />

      <img
        :src="Dtriangle"
        alt="hiasan"
        class="absolute -rotate-90 lg:block hidden right-32 bottom-10"
      />

      <img
        :src="dekorasi"
        alt="hiasan"
        class="absolute bottom-2 lg:hidden block"
      />
    </div>
  </div>
</template>

<script setup>
import backgroundAtas from "@/images/topography.svg";
import triangle from "@/images/triangle.svg";
import decoration from "@/images/decoration.svg";
import titikKoma from "@/icon/semicolon.svg";

const Dtriangle = triangle;
const dekorasi = decoration;
const code = titikKoma;
</script>
