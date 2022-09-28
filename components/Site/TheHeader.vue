<template>
  <nav class="bg-padua-900 text-padua-50 shadow sticky top-0 z-50">
    <div
      class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <div>
          <nuxt-link
            to="/"
            class="text-2xl font-bold transition-colors duration-300 transform lg:text-3xl hover:text-padua-600"
            >LoProKu</nuxt-link
          >
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button
            @click="toggleMobileMenu"
            type="button"
            class="hover:text-padua-600 focus:text-padua-600"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div
        :class="mobileMenuIsOpen ? 'block' : 'hidden'"
        class="items-center md:flex"
      >
        <div class="flex mt-6 md:mt-0 flex-col md:flex-row md:mx-6">
          <nuxt-link
            to="contact"
            class="my-4 text-lg font-medium transition-colors duration-200 transform hover:text-padua-600 md:mx-4 md:my-0"
            href="#"
            >Kontakt</nuxt-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuIsOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
    },
  },
};
</script>
