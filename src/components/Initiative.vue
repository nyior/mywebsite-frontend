<template>

  <div class="col-12 col-md-3 card allround-shadow p-4 m-4">
                
      <h2> {{ initiative.title }} </h2>
                   
      <h3 class="text-muted mt-4 mb-4 text-left">
        {{ initiative.description }} 
      </h3>
               

      <div class="row w-100 mt-3">
                  
        <div class="col-12 ml-auto text-left text-muted">

          <small>

            <ul class="list-inline">
              <li class="list-inline-item"  v-for="keyword in initiative.keywords" :key="keyword.id">
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
      initiative: this.initiative_object,
    };
  },

};

</script>

<style scoped>



</style>

