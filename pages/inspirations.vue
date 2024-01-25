<template>
  <div>
    <div
      class="h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      :style="{
        backgroundImage: `url('/images/coffe.jpg')`,
      }"
    >
      <div
        class="h-96 bg-slate-50 dark:bg-gray-900 w-full bg-opacity-50 dark:bg-opacity-70"
      >
        <div class="flex items-center justify-center py-20">
          <div class="p-8">
            <h1 class="text-3xl text-center font-logo">
              {{ $t("inspirasi.judul") }}
            </h1>
            <p class="font-judul text-lg text-center py-4">
              {{ $t("inspirasi.desk") }}
            </p>
            <h1 class="dark:text-indigo-500 text-center text-2xl">
              {{ $t("inspirasi.tag") }}
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full h-64 bg-indigo-100 dark:bg-gray-950 relative"></div>

    <div class="my-12">
      <div class="flex items-center justify-center">
        <NotesContent />
      </div>
    </div>

    <div class="flex items-center justify-center px-2 pt-12">
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
        class="absolute -bottom-12 lg:hidden block"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
