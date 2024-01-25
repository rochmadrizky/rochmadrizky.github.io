<template>
  <div class="max-w-7xl mx-auto px-6">
    <div class="relative">
      <div class="flex items-center justify-center w-full mx-auto">
        <div
          v-for="(step, index) in steps"
          @click="setCurrentStep(index + 1)"
          class="relative flex cursor-pointer"
          :class="[index !== 3 ? 'w-16 md:w-32' : '']"
        >
          <div
            class="flex items-center justify-center rounded-full h-10 w-10 md:w-12 md:h-12"
            :class="[
              index + 1 <= currentStep
                ? 'bg-indigo-500 text-white dark:bg-indigo-500 '
                : 'bg-indigo-100 dark:bg-gray-950 dark:text-white',
            ]"
          >
            {{ index + 1 }}
          </div>
          <div
            v-if="index + 1 !== 4"
            class="absolute left-10 md:left-12 top-1/2 h-1.5 w-full -translate-y-1/2 transform transition-all duration-300 bg-indigo-100 dark:bg-gray-950"
            :class="[
              index + 1 < currentStep ? 'bg-indigo-500 dark:bg-indigo-500' : '',
            ]"
          ></div>
        </div>
      </div>

      <div class="p-2">
        <div class="h-56 md:w-[585px] md:h-36 flex items-center justify-center">
          <div class="p-4">
            <h2
              class="text-xl font-judul dark:text-indigo-500 font-bold mb-2 text-center"
            >
              {{ $t(steps[currentStep - 1].title) }}
            </h2>
            <p class="text-center font-deskripsi">
              {{ $t(steps[currentStep - 1].description) }}
            </p>
          </div>
        </div>
        <div class="flex justify-between mt-4">
          <button
            :disabled="currentStep === 1"
            @click="previousStep"
            class="bg-indigo-500 text-white py-2 px-4 rounded-full"
          >
            <IconPlayerTrackPrev />
          </button>
          <button
            :disabled="currentStep === steps.length"
            @click="nextStep"
            class="bg-indigo-500 text-white py-2 px-4 rounded-full"
          >
            <IconPlayerTrackNext />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { IconPlayerTrackNext } from "@tabler/icons-vue";
import { IconPlayerTrackPrev } from "@tabler/icons-vue";

const steps = ref([
  {
    title: "notes1.ke1",
    description: "notes1.desk1",
  },
  {
    title: "notes2.ke2",
    description: "notes2.desk2",
  },
  {
    title: "notes3.ke3",
    description: "notes3.desk3",
  },
  {
    title: "notes4.ke4",
    description: "notes4.desk4",
  },
]);

const currentStep = ref(1);

const setCurrentStep = (step) => {
  currentStep.value = step;
};

const nextStep = () => {
  if (currentStep.value < steps.value.length) {
    currentStep.value += 1;
  }
};

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value -= 1;
  }
};
</script>
