<template>
  <div class="w-96 h-32 mx-auto px-6">
    <div class="my-2 w-36 h-0.5 bg-indigo-100 dark:bg-indigo-500 mx-auto">
      <div class="h-0.5 bg-black dark:bg-white line-animation"></div>
    </div>
    <transition name="fade" mode="out-in">
      <p :key="currentWord.id" class="font-deskripsi text-base text-center">
        {{ $t(currentWord.deskripsi) }}
      </p>
    </transition>
  </div>
</template>

<script setup>
const quote = ref([
  {
    id: 1,
    deskripsi: "kutipan1.quote1",
  },
  {
    id: 2,
    deskripsi: "kutipan2.quote2",
  },
  {
    id: 3,
    deskripsi: "kutipan3.quote3",
  },
  {
    id: 4,
    deskripsi: "kutipan4.quote4",
  },
]);

// Membuat reactive reference untuk kutipan saat ini, diinisialisasi dengan kutipan pertama
const currentWord = ref(quote.value[0]);

// Menggunakan lifecycle hook onMounted untuk menjalankan fungsi setelah komponen dipasang
onMounted(() => {
  // Fungsi untuk mengganti quote setiap 2000 detik (3 detik)
  setInterval(changeWord, 4000);
  setInterval(updateLineWidth, 100);
});

// Fungsi untuk mengganti quote saat ini
function changeWord() {
  // Mencari indeks kutipan saat ini dalam array
  const currentIndex = quote.value.findIndex(
    (quotes) => quotes.id === currentWord.value.id
  );

  // Mengganti kutipan saat ini dengan kutipan berikutnya dalam array (dengan pengulangan)
  currentWord.value = quote.value[(currentIndex + 1) % quote.value.length];
}

const lineWidth = ref(0);

// Fungsi untuk menghitung dan memperbarui panjang garis berdasarkan waktu
function updateLineWidth() {
  const currentTime = new Date().getTime() % 4000; // Mendapatkan sisa waktu dalam siklus 4000ms
  const percentage = (currentTime / 4000) * 100; // Menghitung persentase waktu dalam siklus
  lineWidth.value = (percentage / 100) * 100; // Menghitung panjang berdasarkan persentase
}

// Memanggil fungsi untuk mengupdate panjang garis setiap 100ms
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes drawLine {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

.line-animation {
  animation: drawLine 4s linear infinite;
}
</style>
