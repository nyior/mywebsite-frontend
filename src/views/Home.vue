<template>
  <div class="row  px-5 txt-center">
      <div class="col-12 col-md-6">
        <div class="hero-text-first">
          <small class="color-blue glegoo mb-3 ml-1 typewrite " data-period="2000" 
                                data-type='[ " Hi there I’m ..." ]'>
                                        
            <span class="wrap"></span>
            
          </small>
          <h1 class="heading glegoo mt-3">Nyior Clement. </h1>
          <h1 class="sub-heading text-muted mt-3">Software Engineer | Designer</h1>
          <h3 class="mt-5 text-muted text-justify">
           I am a software developer based in Yola, Nigeria. I primarily do web development, but I dabble in machine learning too. Ocassionally I design flyers and user interfaces.
          </h3>
          <a href="mailto:cnyior27@gmail.com" role="button" class="btn btn-lg mt-5 px-4 py-2 email-btn color-blue">Email Me</a> 
        </div>
      </div>  

      <div class="col-12 col-md-6 hero-text-second text-center px-5">
        <img src="../assets/web-developer.png" alt="software developer" class="img-fluid rounded float-md-right img-home">
      </div>  
  </div>
</template>

<script>
import { TxtType } from "../../public/helper.js";
export default {
  name: "home",
    
  mounted: function() {
    document.title = "Nyior Clement | Software Egineer";
    
  }
};
</script>

<style scoped>

</style>
