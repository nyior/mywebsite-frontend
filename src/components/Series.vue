<template>
  <div>
    <div class="row  m-2">
      <div class="col-12  text-left text-muted mr-auto">
        <small> started: {{ series.duration }} </small>
      </div>
    </div>

    <div class="row m-2 ">
      <div class="col-12  ">
        <h2 class="text-left">{{ series.title }}</h2>

        <h3 class="text-muted  text-justify mt-4 mb-4">
          {{ series.description }}
        </h3>
      </div>
    </div>

    <div class="row m-2">
      <div class="col-12  text-left">
        <ul class="list-inline">
          <li
            class="list-inline-item"
            v-for="keyword in series.keywords"
            :key="keyword.id"
          >
            <small class="text-gr p-2">
              {{ keyword.word }}
            </small>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Series",

  props: {
    series_object: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      series: this.series_object
    };
  }
};
</script>

<style scoped>
.text-gr {
  font-style: italic;
  background-color: #0d6b53;
  border: 0.1rem solid #0d6b53;
  border-radius: 20rem;
  margin: 0.5rem;
}

.text-rd {
  font-style: italic;
  background-color: #f42c5a;
  border: 0.1rem solid #f42c5a;
  border-radius: 20rem;
}
</style>
