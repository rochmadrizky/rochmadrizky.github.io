<template>
  <div>
    <div
      class="h-96 flex items-center justify-center"
      :style="{
        backgroundImage: `url('/images/topography.svg')`,
      }"
    >
      <HalamanUp />
    </div>

    <div class="w-full h-64 bg-indigo-100 dark:bg-gray-950 relative">
      <h1
        class="text-center pt-24 md:text-2xl font-logo text-xl text-indigo-500"
      >
        {{ $t("index.kegiatan") }}
      </h1>
    </div>

    <div class="flex items-center justify-center pt-6 relative -top-28">
      <HalamanDown />
    </div>

    <div class="relative flex items-center justify-center px-2 pb-10">
      <div class="p-8">
        <h1 class="ml-5 text-xl font-logo text-indigo-500">
          {{ $t("index.salam") }}
        </h1>
        <h1 class="ml-14 text-2xl font-judul pt-1">
          {{ $t("index.kata1") }}
        </h1>
        <h1 class="text-center text-xl font-judul pb-1">
          {{ $t("index.kata2") }}
        </h1>
        <div class="flex items-center justify-center">
          <p class="font-deskripsi text-lg">{{ $t("index.tags") }}</p>
          <img src="/icon/mood.svg" alt="funny" class="w-8 h-8" />
        </div>
      </div>

      <img
        src="/images/triangle.svg"
        alt="hiasan"
        class="absolute lg:block hidden left-32 bottom-10"
      />

      <img
        src="/images/triangle.svg"
        alt="hiasan"
        class="absolute -rotate-90 lg:block hidden right-32 bottom-10"
      />

      <img
        src="/images/decoration.svg"
        alt="hiasan"
        class="absolute bottom-2 lg:hidden block"
      />
    </div>
  </div>
</template>

<script setup></script>
