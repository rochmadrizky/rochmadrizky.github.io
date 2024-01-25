<template>
  <div class="max-w-6xl mx-auto px-6 lg:px-0">
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div
        v-for="card in cards"
        :key="card.title"
        class="max-w-md mx-2 my-2 bg-slate-50 dark:bg-gray-900 border-b-2 border-indigo-500 rounded-lg shadow-lg flex flex-col hover:bg-slate-200 dark:hover:bg-gray-950 hover:bg-opacity-60"
      >
        <NuxtLink :to="card.link">
          <img
            :src="card.image"
            alt="Card Image"
            class="w-full h-40 object-cover rounded-t"
          />
        </NuxtLink>
        <div class="flex-grow flex flex-col">
          <div class="p-4">
            <NuxtLink
              :to="card.link"
              class="underline-offset-8 hover:underline"
            >
              <div class="font-bold text-xl">{{ $t(card.title) }}</div>
            </NuxtLink>
            <p class="text-base my-2 overflow-hidden">
              {{ $t(card.content) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = ref([
  {
    title: "blogs1.judul1",
    content: "blogs1.desk1",
    image: "/images/laptop.jpg",
    link: "/notes",
  },
  {
    title: "blogs2.judul2",
    content: "blogs2.desk2",
    image: "/images/code.jpg",
    link: "/experiment",
  },
  {
    title: "blogs3.judul3",
    content: "blogs3.desk3",
    image: "/images/coffe.jpg",
    link: "/inspirations",
  },
]);
</script>
