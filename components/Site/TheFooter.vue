<template>
  <footer class="dark:bg-gray-800 pt-32 font-montserrat text-gray-600">
    <div class="container px-6 py-8 mx-auto">
      <hr class="my-10 border-gray-200" />

      <div class="flex flex-col items-center sm:flex-row sm:justify-between">
        <div>
          <span class="mx-2 text-sm">
            © LoProKu {{ new Date().getFullYear() }}
          </span>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            class="mx-2 text-sm hover:text-gray-500"
            aria-label="Reddit"
          >
            v1.0.0
          </a>
          <span class="mx-2 text-sm">
            Made with
            <a
              class="hover:text-gray-500"
              href=""
              target="_blank"
              rel="noopener noreferrer"
              ><IconsCoffee class="h-4 w-4 mb-1 inline"
            /></a>
            and
            <a
              class="hover:text-gray-500"
              href="https://qbitone.de"
              target="_blank"
              rel="noopener noreferrer"
              ><IconsCode class="h-4 w-4 mb-1 inline"
            /></a>
          </span>
        </div>

        <div class="flex mt-3 -mx-2 sm:mt-0">
          <a
            href="#"
            class="mx-2 text-sm hover:text-gray-500"
            aria-label="Reddit"
          >
            Team
          </a>

          <a
            href="#"
            class="mx-2 text-sm hover:text-gray-500"
            aria-label="Reddit"
          >
            Datenschutz
          </a>

          <a
            href="#"
            class="mx-2 text-sm hover:text-gray-500"
            aria-label="Reddit"
          >
            Impressum
          </a>

          <a
            href="#"
            class="mx-2 text-sm hover:text-gray-500"
            aria-label="Reddit"
          >
            Cookies
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
