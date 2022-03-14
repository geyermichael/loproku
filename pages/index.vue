<template>
  <div>
    <section>
      <div class="px-6 py-32 mx-auto text-center">
        <div class="max-w-2xl mx-auto">
          <h1
            class="text-3xl font-bold text-padua-900 dark:text-white md:text-4xl"
          >
            Finde Warenautomaten, Märkte und Landwirte die ihre Waren direkt
            verkaufen.
          </h1>

          <p
            class="text-lg font-montserrat mt-6 font-light text-padua-900 md:text-xl"
          >
            Die PLZ deines Wohnortes eintragen und die Suche starten. <br />
            Ganz einfach 😉
          </p>

          <div
            class="w-full font-montserrat bg-white max-w-sm mx-auto mt-6 bg-transparent border-2 rounded-md focus-within:border-padua-900 focus-within:ring focus-within:ring-padua-800 focus-within:ring-opacity-40"
          >
            <form @submit.prevent="search" class="flex flex-col md:flex-row">
              <input
                v-model="searchString"
                type="text"
                placeholder="80331"
                required
                class="flex-1 h-10 px-4 py-2 m-1 text-gray-900 placeholder-gray-400 bg-transparent border-none appearance-none focus:outline-none focus:placeholder-transparent focus:ring-0"
              />

              <button
                type="submit"
                class="h-10 px-6 py-2 m-1 text-white transition-colors duration-300 transform bg-padua-900 rounded-md hover:bg-padua-800 focus:outline-none focus:bg-padua-800"
              >
                Suche
              </button>
            </form>
          </div>
          <UIAppWarning v-if="formError" text="Bitte gebe eine PLZ ein." />
        </div>
      </div>
    </section>
    <section>
      <div class="px-6 py-16 mx-auto text-center">
        <div class="max-w-lg mx-auto">
          <h2 class="text-xl font-bold md:text-2xl">
            👋 Unsere neusten Einträge.
          </h2>

          <p class="font-montserrat mt-2 mb-4 lg:mb-8">
            Ganz frisch eingetroffen. Vielleicht auch etwas in deiner Nähe.
          </p>
          <UIAppLoadingSpinner v-if="isLoading" />
        </div>
      </div>
      <div class="grid lg:grid-cols-3 gap-6">
        <div v-for="place in featuredPlaces" :key="place.id">
          <ResultsPlaceCard :place="place" />
        </div>
      </div>
    </section>
    <section>
      <div class="text-center mt-32">
        <p class="text-2xl font-bold">
          Du möchtest dieses Projekt gerne unterstützen?
        </p>

        <p class="max-w-md font-montserrat mx-auto mt-2">
          Schreib uns, falls du einen neuen Eintrag hinzufügen möchtest oder
          Verbesserungvorschläge hast.
        </p>

        <div
          class="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center"
        >
          <button
            class="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-200 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 mx-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>

            <span class="mx-1">Kontakt</span>
          </button>
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
      searchString: '',
      formError: false,
      isLoading: false,
    };
  },
  methods: {
    /**
     * Fetch Featured Places
     *
     * @description
     * Fetch 12 places from supabase.
     *
     */
    async fetchFeaturedPlaces() {
      try {
        this.isLoading = true;
        const response = await this.$supabase
          .from('items')
          .select('*')
          .range(0, 11);

        // TODO add supabase error handling

        this.isLoading = false;
        this.featuredPlaces = response.body;
      } catch (error) {
        console.error(error.message);
      }
    },

    /**
     * Search
     *
     * @description
     * Push to route ```/results``` with a search query.
     * The query content is the input value saved as ```searchString```
     *
     * The searchString is used by the results page to calculate the map bounds
     * and for fetching the proper palces from supabase.
     *
     * @example
     * ```/results?search=foo```
     *
     */
    search() {
      // prevent wrong input, only allow 5 digit number aka zipcode
      if (!this.searchString.match(/\b\d{5}\b/g)) {
        this.formError = true;
        this.searchString = '';
        setTimeout(() => {
          this.formError = false;
        }, 4000);
        return;
      }

      // push the route to results page with zipcode as search query
      this.$router.push({
        path: '/results',
        query: { search: this.searchString },
      });
    },
  },
  created() {
    this.fetchFeaturedPlaces();
  },
};
</script>
