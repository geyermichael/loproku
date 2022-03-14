<template>
  <div>
    <div class="top-20 py-16 bg-white">
      <h2
        class="text-xl text-center font-bold text-gray-800 dark:text-white md:text-2xl"
      >
        Deine Suchergebnisse 🔍
      </h2>
      <p class="text-center mb-8 font-montserrat">
        Ergebnisse in einem 30km Radius um PLZ "{{ searchString }}"
      </p>
      <UIAppLoadingSpinner v-if="isLoading" />
      <div v-if="error" class="text-center col-span-2">
        <p>{{ error.message }}</p>
        <button
          @click="$router.push('/')"
          class="flex items-center justify-center mx-auto mt-8 order-1 w-full px-2 py-2 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-200 transform border rounded-md dark:border-gray-400 dark:text-gray-300 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
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

          <span class="mx-1">Zurück zur Startseite</span>
        </button>
      </div>
    </div>
    <div v-if="error === false" class="mx-auto grid lg:grid-cols-2 gap-4 px-2">
      <div class="lg:h-96 lg:sticky lg:top-24">
        <div id="map" style="height: 32rem; width: 100%"></div>
      </div>
      <div class="mt-8 lg:mt-0">
        <div v-for="place in nearByPlaces" :key="place.id">
          <ResultsPlaceCard :place="place" />
        </div>

        <ResultsLastEntry v-if="isLoading === false && error === false" />
      </div>
    </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
export default {
  data() {
    return {
      nearByPlaces: [],
      isLoading: true,
      error: false,
    };
  },
  methods: {
    /**
     * Fetch Near By Places
     *
     * @description
     * Fetch places from supabase that are in range of 30km calculated
     * by the coordinates of searched place.
     *
     * To generate the coordinates ```fetchGeoDataBySearchString``` is used.
     * @see fetchGeoDataBySearchString()
     *
     */
    async fetchNearByPlaces() {
      try {
        if (!this.searchString.match(/\b\d{5}\b/g)) {
          this.error = {
            type: '',
            message: '🤔 Da suchst Du wohl nicht nach einer PLZ.',
          };
          this.isLoading = false;
          return;
        }

        // enable loading
        this.isLoading = true;

        // get long and lat by route search query
        const { long, lat } = await this.fetchGeoDataBySearchString();

        // helper to calculate an approximate radius of 30km
        // https://stackoverflow.com/a/31268042
        const latRange = 30 / 110.54;
        const degsToRads = (deg) => (deg * Math.PI) / 180;
        const longRange = 30 / (111.32 * Math.cos(degsToRads(lat)));

        // fetch places that fit in the calculates range
        const response = await this.$supabase
          .from('items')
          .select('*')
          .gt('latitude', lat - latRange)
          .lt('latitude', lat + latRange)
          .gt('longitude', long - longRange)
          .lt('longitude', long + longRange)
          .range(0, 3);

        // disable loading
        this.isLoading = false;

        // set nearByPlaces
        this.nearByPlaces = response.body;

        // generate map
        this.initMap({ long, lat });
      } catch (error) {
        console.error('error from init', error.message);
        this.isLoading = false;

        // check what error occured
        // error by mapbox geocoder
        if (error.message.includes('geocoder')) {
          this.error = {
            type: '',
            message: '😕 Da ist wohl ein Fehler aufgetreten.',
          };
        }
        // wrong or invalid search query
        if (error.message.includes('404')) {
          this.error = {
            type: '',
            message: '😕 Wir konnten deine gesuchte PLZ nicht finden.',
          };
        }
      }
    },

    /**
     * Fetch Geo Data
     *
     * Using geocoder to fetch coordinates of given route seach query.
     *
     * @return {number} - The longitute value
     * @return {number} - The latitude value
     *
     */
    async fetchGeoDataBySearchString() {
      try {
        const mapboxGeocoderApiKey =
          'pk.eyJ1IjoiZ2V5ZXJtaWNoYWVsIiwiYSI6ImNsMG5sYWVseDA5a3ozZ21zcXIzaHA2cDMifQ.mY_AfBfGlsq1Sn3WQ54Vew';
        let response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.searchString}.json?country=de&types=postcode&access_token=${mapboxGeocoderApiKey}`
        );

        // fetching error handling
        if (!response) throw new Error('geocoder: Undefined error occured!');
        if (response.status === 404)
          throw new Error('geocoder: URL not found!');
        if (response.status === 401)
          throw new Error('geocoder: Not authorized!');

        response = await response.json();

        // simple error handling if response has no result
        if (response.features.length === 0) {
          throw new Error('404: Nothing found!');
        }
        const coordinates = response.features[0].geometry.coordinates;
        const long = coordinates[0];
        const lat = coordinates[1];
        return { long, lat };
      } catch (error) {
        throw error;
      }
    },

    /**
     * Init The Map
     *
     * @param {Object} mapCenterCoordinates
     */
    initMap(mapCenterCoordinates) {
      // TODO hide token !!!!
      mapboxgl.accessToken =
        'pk.eyJ1IjoiZ2V5ZXJtaWNoYWVsIiwiYSI6ImNsMG5sYWVseDA5a3ozZ21zcXIzaHA2cDMifQ.mY_AfBfGlsq1Sn3WQ54Vew';
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
      });
      // set map bounds
      map.fitBounds([
        [mapCenterCoordinates.long - 0.2, mapCenterCoordinates.lat - 0.2],
        [mapCenterCoordinates.long + 0.2, mapCenterCoordinates.lat + 0.2],
      ]);
      // set search center marker
      new mapboxgl.Marker({ color: '#0E352D' })
        .setLngLat([mapCenterCoordinates.long, mapCenterCoordinates.lat])
        .addTo(map);

      this.nearByPlaces.forEach((place) => {
        this.createMarkerForPlace(map, place);
      });
    },

    /**
     * Create Marker For Place
     *
     * @param {Object} map
     * @param {Object} place
     */
    createMarkerForPlace(map, place) {
      // create the popup
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `
          ${place.zipcode} ${place.city}<br>
          <div style="font-weight: bold;">${place.name}</div>
          `
      );

      // create the marker
      new mapboxgl.Marker({ color: '#6ED994' })
        .setLngLat([+place.longitude, +place.latitude])
        .setPopup(popup)
        .addTo(map);
    },
  },
  computed: {
    searchString() {
      return this.$route.query.search;
    },
  },
  mounted() {
    this.fetchNearByPlaces();
  },
};
</script>
