<template>
  <div class="row h-100  w-100 p-3">
      <div class="col-12 col-md-6">
        <div class="hero-text">
          <small class="color-blue glegoo mb-3 ml-2 typewrite " data-period="2000" 
                                data-type='[ " Hi there I’m..." ]'>
                                        
            <span class="wrap"></span>
            
          </small>
          <h1 class="heading glegoo mt-3">Nyior Clement.</h1>
          <h1 class="sub-heading text-muted mt-3">Software Engineer | Designer</h1>
          <h3 class="mt-5 text-muted">
           I am a software developer based in Yola, Nigeria. I primarily do web development, but I dabble in machine learning too. Ocassionally I design flyers and user interfaces.
          </h3>
          <a href="mailto:cnyior27@gmail.com" role="button" class="btn btn-lg mt-5 px-4 py-2 email-btn color-blue">Email Me</a> 
        </div>
      </div>    
  </div>
</template>

<script>
import { TxtType } from "../../public/helper.js";
export default {
  name: "home",

  methods: {
    typeWords(){
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
    }
  },

  mounted: function() {
    document.title = "Nyior Clement | Software Egineer";
    
  }
};
</script>

<style scoped>

.hero-text {
  margin-top: 15rem;
}

@media only screen and (max-width: 600px) {
	
}

</style>
