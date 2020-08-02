<template>

  <div>

    <div class="row mt-5">

        <div class="col-12 col-md-6 pr-3 my-auto">
			      <div>
                <h2> {{ project.title }} </h2>
                <ul class="list-inline">
                  
                  <li class="list-inline-item mr-5 ml-1 mt-2" v-if="project.live_url != null">
                    <a :href="project.live_url">
                      <i class="fa fa-external-link link-icon" aria-hidden="true"></i>
                    </a>
                  </li>

                  <li class="list-inline-item ml-1 p-0" v-if="project.github_url != null">
                    <a :href="project.github_url">
                      <i class="fa fa-github link-icon"></i>
                    </a>
                  </li>
                </ul>
            </div>

            
            <div class="allround-shadow card row ml-1 mr-1 p-3 mt-5 mb-2 text-left">

              <div class="col-12 ">
                <h3 class="text-muted text-justify">
                  {{ project.description }}
                </h3>
              </div>
              
              <div class="col-12 text-left mt-4 text-muted">

                <small>
                  <ul class="list-inline">
                    <li class="list-inline-item"  v-for="keyword in project.keywords" :key="keyword.id">
                      #{{ keyword.word }}
                    </li>

                  </ul>
                </small>

              </div>


            </div>

        </div>   

        <div class="col-12 col-md-6 mt-5 image-overlay">
            <img :src="project.project_image" alt="Bubbl User Interface" class="img-fluid rounded float-right image-with-zindex shadow my-auto">
        </div> 

    </div>

  </div>

</template>

<script>

export default {
  name: "Project",

  props: {
    project_object: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      project: this.project_object,
    };
  },
  
};

</script>

<style scoped>

</style>

