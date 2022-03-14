<template>
  <div
    class="w-full font-montserrat px-4 py-6 mx-auto mb-8 bg-white rounded-md shadow-md"
  >
    <div class="flex items-center justify-between">
      <span class="text-sm font-light text-padua-900 dark:text-padua-400"
        >{{ place.zipcode }} {{ place.city }}</span
      >
      <span
        class="px-3 py-1 text-xs text-padua-900 uppercase bg-padua-200 rounded-full"
        >automat</span
      >
    </div>

    <h3 class="text-xl font-bold text-padua-900">
      {{ place.name }}
    </h3>

    <div>
      <div class="flex flex-col mt-8 text-padua-900">
        <div>Adresse:</div>
        <address class="font-playfair not-italic">
          {{ place.zipcode }} {{ place.city }} <br />
          {{ place.formattedAddress.split(',')[0] }} <br />
          {{ place.state }} <br />
          {{ place.country }} <br />
        </address>
        <a
          :href="`https://www.google.com/maps/search/?api=1&query=${place.formattedAddress}`"
          target="blank"
          class="cursor-pointer text-padua-800 hover:underline mt-4"
          >Adresse in Google Maps anzeigen</a
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
