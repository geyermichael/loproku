<template>
  <div>
    <section class="px-6 py-32 mx-auto text-center">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
        Die Seite haben wir nicht gefunden!
      </h1>
      <div class="text-5xl font-bold text-gray-800 dark:text-white md:text-7xl">
        404
      </div>
    </section>
    <section>
      <div class="text-center mt-8">
        <p class="text-2xl font-bold">
          Du hast hier eigentlich etwas anderes erwartet?
        </p>

        <p class="max-w-md font-montserrat mx-auto mt-2">
          Schreib uns, falls du der Meinung bist hier sollte eigentlich etwas
          anderes angezeit werden oder gehe einfach direkt auf die Startseite.
        </p>

        <div class="flex justify-center gap-4">
          <div
            class="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center"
          >
            <button
              class="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide capitalize transition-colors duration-200 transform border rounded-md hover:bg-padua-800 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 bg-padua-900 text-white"
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

              <span class="mx-1">Zur Startseite</span>
            </button>
          </div>
          <div
            class="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center"
          >
            <button
              class="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-200 transform border rounded-md dark:border-gray-400 dark:text-gray-300 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
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
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'default',
};
</script>
