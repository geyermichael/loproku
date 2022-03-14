<template>
  <div
    class="flex w-full mt-4 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
  >
    <div class="flex items-center justify-center w-12 bg-red-400">
      <p>🤔</p>
    </div>

    <div class="px-4 py-2 -mx-3">
      <div class="mx-3">
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
