<template>
  <div>
    <pre>{{ nearByPlaces }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nearByPlaces: [],
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
        const { long, lat } = await this.fetchGeoDataBySearchString();

        // helper to calculate an approximate radius of 30km
        // https://stackoverflow.com/a/31268042
        const latRange = 30 / 110.54;
        const degsToRads = (deg) => (deg * Math.PI) / 180.0;
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

        this.nearByPlaces = response.body;
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
