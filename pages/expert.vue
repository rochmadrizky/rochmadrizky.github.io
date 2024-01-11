<template>
  <div>
    <div
      class="h-96 flex items-center justify-center"
      :style="{
        backgroundImage: `url('${backgroundAtas}')`,
      }"
    >
      <div class="px-10">
        <h1 class="text-3xl text-center font-logo">{{ $t("expert.judul") }}</h1>
        <p class="font-judul text-lg text-center py-4">
          {{ $t("expert.desk1") }}
        </p>
        <h1 class="dark:text-indigo-500 text-center text-2xl">
          {{ $t("expert.tag") }}
        </h1>
      </div>
    </div>

    <div class="w-full h-64 bg-indigo-100 dark:bg-gray-950 relative">
      <h1
        class="text-center pt-24 md:text-2xl font-logo text-xl text-indigo-500"
      >
        {{ $t("expert.judul2") }}
      </h1>
    </div>

    <div class="flex items-center justify-center pt-6 relative -top-28">
      <Notes />
    </div>

    <div class="relative flex items-center justify-center px-2 -z-10 pb-10">
      <div class="p-8 top-16 relative">
        <h1 class="ml-5 text-xl font-logo text-indigo-500">
          {{ $t("expert.quotes") }}
        </h1>
        <div class="py-4">
          <Quote />
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

const Dtriangle = triangle;
const dekorasi = decoration;
</script>
