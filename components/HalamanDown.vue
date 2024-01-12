<template>
  <div class="max-w-6xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <div
        v-for="card in cards"
        :key="card.id"
        class="flex flex-col items-center justify-center bg-slate-50 dark:bg-gray-900 border-b-2 border-indigo-500 p-4 rounded-lg shadow-lg"
      >
        <img :src="card.image" alt="Card Image" class="my-4 w-10 h-10" />
        <h2 class="text-lg font-logo mb-2 text-center">{{ $t(card.title) }}</h2>
        <p class="text-center font-deskripsi text-base">
          {{ $t(card.description) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = ref([
  {
    id: 1,
    title: "kegiatan.judul",
    description: "kegiatan.desk",
    image: "/images/logo/run.svg",
  },
  {
    id: 2,
    title: "kode.judul",
    description: "kode.desk",
    image: "/images/logo/code.svg",
  },
  {
    id: 3,
    title: "ngopi.judul",
    description: "ngopi.desk",
    image: "images/logo/coffee.svg",
  },
  {
    id: 4,
    title: "kataKata.judul",
    description: "kataKata.desk",
    image: "/images/logo/quotes.svg",
  },
]);
</script>
