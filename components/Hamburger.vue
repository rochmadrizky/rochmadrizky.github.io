<template>
  <header
    class="bg-indigo-100 dark:bg-gray-950 p-3 sticky top-0 left-0 right-0 z-10"
  >
    <div class="container lg:px-16 mx-auto flex justify-between items-center">
      <NuxtLink to="/">
        <button class="flex items-center gap-2">
          <img
            src="/images/thisIsMe.png"
            alt="Foto Profil"
            class="rounded-full w-8 h-8 bg-slate-50 dark:bg-gray-900"
          />
          <h1 class="text-base font-logo text-indigo-500 hover:text-indigo-600">
            RIZKY
          </h1>
        </button>
      </NuxtLink>

      <div
        v-if="isSidebarOpen"
        @click="toggleMenu"
        class="fixed inset-0 bg-black opacity-10 z-40"
      ></div>

      <div :class="sidebarClasses">
        <div
          class="min-h-screen flex flex-col items-center justify-center z-50"
        >
          <div class="flex flex-col items-center justify-center">
            <img
              src="/images/thisIsMe.png"
              alt="Foto Profil"
              class="rounded-full w-20 h-20 ring-indigo-500 ring-2 p-0.5 bg-slate-50 dark:bg-gray-900"
            />
            <h1
              class="text-base font-logo py-2 text-indigo-500 dark:text-white"
            >
              {{ $t("navbar.thisIsMe") }}
            </h1>
          </div>

          <div class="py-6 w-full">
            <NuxtLink
              @click="isSidebarOpen = false"
              to="/"
              class="flex items-center justify-between my-4 px-2 text-indigo-500 hover:text-indigo-600"
            >
              <h1 class="font-logo text-base">RIZKY</h1>
              <IconArrowBadgeRightFilled
                class="w-6 h-6 font-logo block lg:hidden stroke-1"
              />
            </NuxtLink>
            <MenuNavbar @onMenuClick="() => (isSidebarOpen = false)" />
          </div>
        </div>
      </div>

      <div class="hidden lg:block">
        <MenuNavbar />
      </div>

      <div class="flex items-center">
        <BtnBahasa />

        <button
          @click="toggleMenu"
          class="lg:hidden relative z-50 text-indigo-500 hover:text-indigo-600 transition duration-300 transform"
          :class="{ 'rotate-180': isSidebarOpen }"
        >
          <component
            :is="isSidebarOpen ? IconX : IconMenu2"
            class="w-6 h-6 font-logo block lg:hidden stroke-1"
          />
        </button>

        <DarkMode />
      </div>
    </div>
  </header>
</template>

<script setup>
import { IconArrowBadgeRightFilled, IconX, IconMenu2 } from "@tabler/icons-vue";

const isSidebarOpen = ref(false);

const toggleMenu = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const sidebarClasses = computed(() => {
  return (
    "fixed flex flex-col top-0 left-0 h-full w-64 md:w-72 lg:w-[600px] bg-indigo-100 dark:bg-gray-950 text-black px-4 transform transition-transform duration-300 ease-in-out z-50" +
    (isSidebarOpen.value ? " translate-x-0" : " -translate-x-full")
  );
});
</script>
