<template>
  <div class="text-center mt-32">
    <p class="text-2xl font-bold">Nichts in deiner Nähe gefunden?</p>

    <p class="max-w-lg font-montserrat mx-auto mt-2">
      Schreib uns, falls du einen neuen Eintrag hinzufügen möchtest.
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

        <nuxt-link to="/contact" class="mx-1">Kontakt</nuxt-link>
      </button>
    </div>
  </div>
</template>
