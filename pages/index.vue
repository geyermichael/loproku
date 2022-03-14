<template>
  <div>
    <section>
      <div class="px-6 py-32 mx-auto text-center">
        <div class="max-w-2xl mx-auto">
          <h1
            class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl"
          >
            Finde Lebenmittelautomaten, Märkte und Landwirte die ihre Waren
            direkt verkaufen.
          </h1>

          <p class="mt-6 text-gray-500 dark:text-gray-300">
            Die PLZ deines Wohnortes eintragen und die Suche starten. Ganz
            einfach 😉
          </p>

          <div
            class="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40"
          >
            <form @submit.prevent="search" class="flex flex-col md:flex-row">
              <input
                type="text"
                placeholder="80331"
                required
                class="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />

              <button
                type="submit"
                class="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
              >
                Suche
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="px-6 py-16 mx-auto text-center">
        <div class="max-w-lg mx-auto">
          <h2
            class="text-xl font-bold text-gray-800 dark:text-white md:text-2xl"
          >
            👋 Unsere neusten Einträge.
          </h2>

          <p class="mt-6 text-gray-500 dark:text-gray-300">
            Ganz frisch eingetroffen. Vielleicht auch etwas in deiner Nähe.
          </p>
        </div>
      </div>
      <div class="grid lg:grid-cols-3 gap-6">
        <div
          v-for="place in featuredPlaces"
          :key="place.id"
          class="w-full px-4 py-3 mx-auto mb-8 bg-white rounded-md shadow-md dark:bg-gray-800"
        >
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
            <h3
              class="mt-2 text-lg font-semibold text-gray-800 dark:text-white"
            >
              {{ place.name }}
            </h3>
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
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featuredPlaces: [],
    };
  },
  methods: {
    /**
     * Get Featured Places
     *
     * Send req to supabase and fetch the latest 12 places.
     */
    async fetchFeaturedPlaces() {
      try {
        const response = await this.$supabase
          .from('items')
          .select('*')
          .range(0, 11);

        this.featuredPlaces = response.body;
      } catch (error) {
        console.error(error.message);
      }
    },
  },
  created() {
    this.fetchFeaturedPlaces();
  },
};
</script>
