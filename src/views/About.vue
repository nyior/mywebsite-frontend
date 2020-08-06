<template>
  <div>

    <div class="row  hero-text-first text-center">
      <div class="col-12 "> 
        <h1 class="heading-smaller glegoo mt-3">Me at a Glance.</h1>
      </div>
    </div>

    <div class="row mt-5 mb-5 px-5"> 

        <div class="col-12 col-md-6  p-md-5 ">

          <div class="text-center">
            <h1 class="heading-smaller glegoo mt-3 ">
              <i class="fa fa-cogs" aria-hidden="true"></i>
            </h1>
            <h1 class="sub-heading-smaller text-muted mt-1">Software Engineer</h1>
            
          </div>

          <div class="mt-5 text-muted text-justify px-md-4">
            <h3 >
            I am passionate about using technology to solve real world problems. For now, I build things that live on the web(websites, applications).
            <br>
            <br>
            I am currently pursuing a bachelor's degree in software engineering at the American University of Nigeria, Yola, Nigeria(Aug. 2016 - Dec. 2020). Thus, I have a strong academic background and an above average understanding of the software development life cycle. Because I strongly hold the opinion that every piece of software should be a solution to a problem, I have and will continously seek opportunities to develop software systems that make real impact.
            <br>
            <br>
            Some of the technologies I have worked with recently are: <br>
            Python, Javascript, Html5, Css3, Django, Django-rest, Vue.js, Bootstrap4, and Git.
            <br>
            <br>
            I have deployed to: <br>
            Azure, Heroku and Pythonaywhere.
            </h3>
          </div>

        </div>   

        <div class="col-12 col-md-6 mt-5 mt-md-0  p-md-5">

          <div class="text-center">
            <h1 class="heading-smaller glegoo mt-3 ">
              <i class="fa fa-fire" aria-hidden="true"></i>
            </h1>
            <h1 class="sub-heading-smaller text-muted mt-1">Service</h1>
          </div>

          <div class="mt-5 text-muted text-justify px-md-4">
            <h3 >
            I enjoy taking on roles where I could serve other people, touch lives and by extension make the world a better place. I try to bring out the best in everyone I come across. I believe that with the necessary support, the sky is the limit for everyone.
            </h3>
            
          </div>

        </div> 

      </div>

      <div class="row hero-text text-right ">
        <div class="col-12 "> 
          <h1 class="heading-smaller glegoo mt-3 mb-5 text-center">My Noteworthy Projects</h1>

          <div class="mt-5 " v-for="project in projects" :key="project.id">

            <Project :project_object="project" />
  
          </div>

        </div>
      </div>

      <div class="row  hero-text text-right ">
        <div class="col-12 "> 

          <h1 class="heading-smaller glegoo mt-3 text-center">My Noteworthy Initiatives</h1>
        </div>
      </div>

      <div class="row  d-flex justify-content-center  m-4" >
        <div class="col-12 col-md-4 card allround-shadow p-2 m-4" v-for="initiative in initiatives" :key="initiative.id">
          <Initiative :initiative_object="initiative" />
        </div>
      </div>

      <div class="row  hero-text text-center m-5">
        <div class="col-12 "> 
          <h1 class="heading-smaller glegoo mt-5">Get In Touch</h1>
          
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

