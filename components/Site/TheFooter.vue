<template>
  <footer class="dark:bg-gray-800 pt-32 font-montserrat text-gray-600">
    <div class="container px-6 py-8 mx-auto">
      <hr class="my-10 border-gray-200" />

      <div class="flex flex-col items-center sm:flex-row sm:justify-between">
        <div>
          <span class="mx-2 text-sm">
            © LoProKu {{ new Date().getFullYear() }}
          </span>

        </div>

        <div class="flex mt-3 -mx-2 sm:mt-0">
          <span class="mx-2 text-sm">
            Made with
            <IconsCoffee class="h-4 w-4 mb-1 inline"/>
            and
            <a
              class="hover:text-gray-500"
              href="https://github.com/geyermichael"
              target="_blank"
              rel="noopener noreferrer"
              ><IconsCode class="h-4 w-4 mb-1 inline"
            /></a>
          </span>
          <span class="mx-2 text-sm hover:text-gray-500">
            <a href="https://github.com/geyermichael/loproku">
              v{{ $config.appVersion }}
            </a>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>
