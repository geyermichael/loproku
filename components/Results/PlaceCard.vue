<template>
  <div>
    <div class="flex items-center justify-between">
      <span class="text-sm font-light text-gray-800 dark:text-gray-400"
        >{{ place.zipcode }} {{ place.city }}</span
      >
      <span
        class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900"
        >automat</span
      >
    </div>

    <div>
      <h3 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
        {{ place.name }}
      </h3>
      <!-- <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              eligendi similique exercitationem optio libero vitae accusamus
              cupiditate laborum eos.
            </p> -->
    </div>

    <div>
      <div class="flex flex-col mt-4 text-gray-700 dark:text-gray-200">
        <div>Anschrift:</div>
        <a
          :href="`https://www.google.com/maps/search/?api=1&query=${place.formattedAddress}`"
          target="blank"
          class="text-blue-600 cursor-pointer dark:text-blue-400 hover:underline"
          >{{ place.formattedAddress }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    place: {
      type: Object,
      required: true,
    },
  },
};
</script>
