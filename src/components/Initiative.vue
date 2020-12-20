<template>
  <div>
    <div class="row m-2">
      <div class="col-12 ml-auto ">
        <h2 class="text-left ">{{ initiative.title }}</h2>

        <h3 class="text-muted text-justify mt-4">
          {{ initiative.description }}
        </h3>
      </div>
    </div>

    <div class="row m-2">
      <div class="col-12 ml-auto text-left text-muted">
        <small>
          <ul class="list-inline">
            <li
              class="list-inline-item"
              v-for="keyword in initiative.keywords"
              :key="keyword.id"
            >
              #{{ keyword.word }}
            </li>
          </ul>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Initiative",

  props: {
    initiative_object: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      initiative: this.initiative_object
    };
  }
};
</script>

<style scoped></style>
