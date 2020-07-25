<template>
  <div>

    <div class="row w-100 p-3 hero-text text-center">
      <div class="col-12 "> 
        <h1 class="heading-smaller glegoo mt-3">Me at a Glance.</h1>
      </div>
    </div>

    <div class="row h-100  w-100 p-3 text-center mb-5"> 

        <div class="col-12 col-md-6  p-5 ">

          <div >
            <h1 class="heading-smaller glegoo mt-3 ">
              <i class="fa fa-cogs" aria-hidden="true"></i>
            </h1>
            <h1 class="sub-heading-smaller text-muted mt-1">Software Engineer</h1>
            <h3 class="mt-5 text-muted">
            I am a software developer based in Yola, Nigeria. I primarily do web development, but I dabble in machine learning too. Ocassionally I design flyers and user interfaces.
            </h3>
          </div>

        </div>   

        <div class="col-12 col-md-6 mt-5 mt-md-0  p-5">

          <div >
            <h1 class="heading-smaller glegoo mt-3 ">
              <i class="fa fa-fire" aria-hidden="true"></i>
            </h1>
            <h1 class="sub-heading-smaller text-muted mt-1">Leadership</h1>
            <h3 class="mt-5 text-muted">
            I am a software developer based in Yola, Nigeria. I primarily do web development, but I dabble in machine learning too. Ocassionally I design flyers and user interfaces.
            </h3>
            
          </div>

        </div> 

      </div>

      <div class="row w-100 hero-text">
        <div class="col-12 "> 
          <h1 class="heading-smaller glegoo mt-3">My Noteworthy Projects</h1>

          <div class="mt-5 ">

            <Project/>
            <Project/>
  
          </div>

        </div>
      </div>

      <div class="row w-100 hero-text text-right">
        <div class="col-12 "> 

          <h1 class="heading-smaller glegoo mt-3">My Noteworthy Initiatives</h1>
        </div>
      </div>

      <div class="row h-100  w-100 d-flex justify-content-center text-center mt-5 mb-5">
        <Initiative/>
        <Initiative/>
      </div>

      <div class="row w-100 hero-text text-center mb-5">
        <div class="col-12 "> 
          <h1 class="heading-smaller glegoo mt-3">Get In Touch</h1>
          
          <div class="mt-5">

            <h3> I am currently open to new job opportunities. Or do you just want to say hi ? </h3>

            <a href="mailto:cnyior27@gmail.com" role="button" class="btn btn-lg mt-5 px-4 py-2 color-blue email-btn">Email Me</a>

          </div>
        </div>
      </div>
          

  </div>
</template>

<script>

import Project from "@/components/Project.vue";
import Initiative from "@/components/Initiative.vue";

export default {
  name: "about",

  components: {
    Project,
    Initiative,
  },

  mounted: function() {
    document.title = "Nyior Clement | About"
  }
};

</script>

<style scoped>

.hero-text {
  margin-top: 18rem;
}

@media only screen and (max-width: 600px) {
	
}

</style>

