<template>
  <div>
    <div class="row  px-5 hero-text-first text-center">
      <div class="col-12 ">
        <h1 class="heading-smaller glegoo mt-3">Me at a Glance.</h1>
      </div>
    </div>

    <div class="row mt-5 mb-5 px-5">
      <div class="col-12 col-md-4 ml-md-auto">
        <img
            src="../assets/nyior-2.jpg"
            alt="software developer"
            class="img-fluid rounded float-md-right nyior-image"
        />
      </div>

      <div class="col-12 col-md-4 mr-md-auto">    
        <div class="mt-5 text-muted text-justify">
          <h3>
            Oh, you are here too? Hello, Nyior Clement here.
            I am passionate about using technology to solve problems.
            For now, I build things that live on the web. I write mostly technical
            articles, I dabble in design, and read a lot too.
            <br />
            <br />
            
            I'm super excited about building backend systems, but I make frontends
            too when/if I need to. I'm obssessed with, and currently working hard
            to improve my ability to write clean code and optimal algorithms.
            <br />
            <br />
            Some of the technologies I have worked with recently are: <br />
            Python, Javascript, Html5, Css3, Django, Django-rest, Vue.js,
            Bootstrap4, Mysql, Git, Amazon S3, Heroku, Netlify and Pythonaywhere.
          </h3>
        </div>
      </div>
    </div>

    <div class="row mt-lg-5 px-5">
      <div class="col-12 col-md-6 ml-md-auto mr-md-auto mt-5 mt-md-0  p-md-5">
        <div class="text-center">
          <h1 class="heading-smaller glegoo mt-3 ">
            <i class="fa fa-fire" aria-hidden="true"></i>
          </h1>
          <h1 class="sub-heading-smaller text-muted mt-1">Service</h1>
        </div>

        <div class="mt-5 text-muted text-justify px-md-4">
          <h3>
            I enjoy taking on roles where I could serve other people, touch
            lives and by extension make the world a better place. I try to bring
            out the best in everyone I come across. I believe that with the
            necessary support, the sky is the limit for everyone.
          </h3>
        </div>
      </div>
    </div>

    <div class="row  hero-text text-center  mb-5">
      <div class="col-12 ">
        <h1 class="heading-smaller glegoo mt-3 ">My Noteworthy Projects</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-6" v-for="project in projects" :key="project.id">
          <Project :project_object="project" />
      </div>
    </div>

    <div class="row  hero-text text-center mb-5">
      <div class="col-12 ">
        <h1 class="heading-smaller glegoo">My Noteworthy Initiatives</h1>
      </div>
    </div>

    <div class="row  d-flex justify-content-center  m-4">
      <div
        class="col-12 col-md-4 card allround-shadow p-2 m-4"
        v-for="initiative in initiatives"
        :key="initiative.id"
      >
        <Initiative :initiative_object="initiative" />
      </div>
    </div>

    <div class="row  hero-text text-center m-5">
      <div class="col-12 ">
        <h1 class="heading-smaller glegoo mt-5">Get In Touch</h1>

        <div class="mt-5">
          <h3 class="text-muted">
            I am currently open to new job opportunities. Or do you just want to
            say hi ?
          </h3>

          <a
            href="mailto:cnyior27@gmail.com"
            role="button"
            class="btn btn-lg mt-5 px-4 py-2 color-blue email-btn"
            >Email Me</a
          >
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
      initiatives: []
    };
  },

  components: {
    Project,
    Initiative
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
    }
  },

  mounted: function() {
    document.title = "Nyior Clement | About";
  },

  created() {
    this.getProjects();
    this.getInitiatives();
  }
};
</script>

<style scoped>
.nyior-image{
	margin-top: 8.5rem;
}

@media only screen and (max-width: 600px) {
    .nyior-image{
	    margin-top: 3rem;
    }
}
</style>
