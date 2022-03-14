<template>
  <footer class="dark:bg-gray-800 pt-32 font-montserrat text-gray-600">
    <div class="container px-6 py-8 mx-auto">
      <hr class="my-10 border-gray-200 dark:border-gray-700" />

      <div class="flex flex-col items-center sm:flex-row sm:justify-between">
        <div>
          <a
            href="https://github.com"
            target="blank"
            class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            aria-label="Reddit"
          >
            v1.0.0
          </a>
          <span class="text-sm text-gray-400">
            {{ new Date().getFullYear() }}
          </span>
        </div>

        <div class="flex mt-3 -mx-2 sm:mt-0">
          <a
            href="#"
            class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            aria-label="Reddit"
          >
            Team
          </a>

          <a
            href="#"
            class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            aria-label="Reddit"
          >
            Datenschutz
          </a>

          <a
            href="#"
            class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            aria-label="Reddit"
          >
            Impressum
          </a>

          <a
            href="#"
            class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            aria-label="Reddit"
          >
            Cookies
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
