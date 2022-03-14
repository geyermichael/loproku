<template>
  <div>
    <div class="top-20 py-16 bg-white">
      <h2
        class="text-xl text-center font-bold text-gray-800 dark:text-white md:text-2xl"
      >
        Deine Suchergebnisse 🔍
      </h2>
      <p class="text-center mb-8">
        Ergebnisse in einem 30km Radius um PLZ "{{ searchString }}"
      </p>
      <div v-if="isLoading" class="text-xl text-center col-span-2">
        suche...
      </div>
    </div>
    <div class="mx-auto grid lg:grid-cols-2 gap-4 px-2">
      <div>
        <div
          v-for="item in nearByPlaces"
          :key="item.id"
          class="w-full px-4 py-3 mx-auto mb-8 bg-white rounded-md shadow-md dark:bg-gray-800"
        >
          <div class="flex items-center justify-between">
            <span class="text-sm font-light text-gray-800 dark:text-gray-400"
              >{{ item.zipcode }} {{ item.city }}</span
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
              {{ item.name }}
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
                :href="`https://www.google.com/maps/search/?api=1&query=${item.formattedAddress}`"
                target="blank"
                class="text-blue-600 cursor-pointer dark:text-blue-400 hover:underline"
                >{{ item.formattedAddress }}</a
              >
            </div>
          </div>
        </div>

        <ResultsLastEntry v-if="isLoading === false" />

        <!-- <div class="text-xl text-center col-span-2">
        {{ error.message }}
      </div> -->
      </div>
      <div class="sticky h-8 top-24">
        <div id="map" style="height: 32rem; width: 100%"></div>
      </div>
    </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
import LastEntry from '../../components/Results/LastEntry.vue';
export default {
  data() {
    return {
      nearByPlaces: [],
      isLoading: true,
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
        this.isLoading = true;
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
        this.isLoading = false;
        this.nearByPlaces = response.body;
        // generate map
        this.initMap({ long, lat });
      } catch (error) {
        console.error(error.message);
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
        response = await response.json();
        // simple error handling if response found nothing
        if (response.features.length === 0) {
          throw new Error('zipcode not found');
        }
        const coordinates = response.features[0].geometry.coordinates;
        const long = coordinates[0];
        const lat = coordinates[1];
        return { long, lat };
      } catch (error) {
        console.error(error.message);
      }
    },
    initMap(mapCenterCoordinates) {
      // TODO hide token !!!!
      mapboxgl.accessToken =
        'pk.eyJ1IjoiZ2V5ZXJtaWNoYWVsIiwiYSI6ImNsMG5sYWVseDA5a3ozZ21zcXIzaHA2cDMifQ.mY_AfBfGlsq1Sn3WQ54Vew';
      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/geyermichael/cl0pdchib00gf15qlxlmpknkk',
        // style: 'mapbox://styles/mapbox/streets-v11',
      });
      // set map bounds
      map.fitBounds([
        [mapCenterCoordinates.long - 0.2, mapCenterCoordinates.lat - 0.2],
        [mapCenterCoordinates.long + 0.2, mapCenterCoordinates.lat + 0.2],
      ]);
      // set search center marker
      new mapboxgl.Marker({ color: 'teal' })
        .setLngLat([mapCenterCoordinates.long, mapCenterCoordinates.lat])
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
  components: { LastEntry },
};
</script>
