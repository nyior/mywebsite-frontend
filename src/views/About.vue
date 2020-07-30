<template>
  <div>

    <div class="row  hero-text-first text-center">
      <div class="col-12 "> 
        <h1 class="heading-smaller glegoo mt-3">Me at a Glance.</h1>
      </div>
    </div>

    <div class="row mt-5 mb-5"> 

        <div class="col-12 col-md-6  p-md-5 ">

          <div class="text-center">
            <h1 class="heading-smaller glegoo mt-3 ">
              <i class="fa fa-cogs" aria-hidden="true"></i>
            </h1>
            <h1 class="sub-heading-smaller text-muted mt-1">Software Engineer</h1>
            
          </div>

          <div class="mt-5 text-muted text-left">
            <h3 >
            I am a software developer based in Yola, Nigeria. I primarily do web development, but I dabble in machine learning too. Ocassionally I design flyers and user interfaces.
            </h3>
          </div>

        </div>   

        <div class="col-12 col-md-6 mt-5 mt-md-0  p-md-5">

          <div class="text-center">
            <h1 class="heading-smaller glegoo mt-3 ">
              <i class="fa fa-fire" aria-hidden="true"></i>
            </h1>
            <h1 class="sub-heading-smaller text-muted mt-1">Leadership</h1>
          </div>

          <div class="mt-5 text-muted text-left">
            <h3 >
            I am a software developer based in Yola, Nigeria. I primarily do web development, but I dabble in machine learning too. Ocassionally I design flyers and user interfaces.
            </h3>
            
          </div>

        </div> 

      </div>

      <div class="row hero-text">
        <div class="col-12 "> 
          <h1 class="heading-smaller glegoo mt-3">My Noteworthy Projects</h1>

          <div class="mt-5 " v-for="project in projects" :key="project.id">

            <Project :project_object="project" />
  
          </div>

        </div>
      </div>

      <div class="row  hero-text text-right">
        <div class="col-12 "> 

          <h1 class="heading-smaller glegoo mt-3">My Noteworthy Initiatives</h1>
        </div>
      </div>

      <div class="row  d-flex justify-content-center  ml-2 mr-2 mt-5 mb-5" v-for="initiative in initiatives" :key="initiative.id">
        <Initiative :initiative_object="initiative" />
      </div>

      <div class="row  hero-text text-center mb-5">
        <div class="col-12 "> 
          <h1 class="heading-smaller glegoo mt-3">Get In Touch</h1>
          
          <div class="mt-5">

            <h3 class="text-muted"> I am currently open to new job opportunities. Or do you just want to say hi ? </h3>

            <a href="mailto:cnyior27@gmail.com" role="button" class="btn btn-lg mt-5 px-4 py-2 color-blue email-btn">Email Me</a>

          </div>
        </div>
      </div>
          

  </div>
</template>

<script>
import { apiService } from "../common/api.service.js";
import Project from "@/components/Project.vue";
import Initiative from "@/components/Initiative.vue";

export default {
  name: "about",

  data() {
    return {
      projects: [],
      initiatives: [],
    };
  },

  components: {
    Project,
    Initiative,
  },

  methods: {
    getProjects() {
      let projects_url = "projects";

      apiService(projects_url, "GET").then(data => {
        this.projects.push(...data);
        // console.log(data.results);
       

      });
    },

    getInitiatives() {
      let initiatives_url = "initiatives";

      apiService(initiatives_url, "GET").then(data => {
       
        this.initiatives.push(...data);
        // console.log(data);

      });
    },
  },

  mounted: function() {
    document.title = "Nyior Clement | About"
  },

  created() {
    this.getProjects();
    this.getInitiatives();
  }
};

</script>

<style scoped>


</style>

