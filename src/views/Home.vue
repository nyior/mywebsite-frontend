<template>
  <div class="row  px-5">
    <div class="col-12 col-md-6">
      <div class="hero-text-first">
        <small
          class="color-blue glegoo mb-3 ml-1 typewrite "
          data-period="2000"
          data-type='[ " Hi there😊 I’m ..." ]'
        >
          <span class="wrap"></span>
        </small>
        <h1 class="heading glegoo mt-3">Nyior Clement.</h1>
        <h1 class="sub-heading text-muted mt-3">
          Software Engineer | Writer
        </h1>
        <h3 class="mt-5 text-muted text-justify">
          I am a software developer currently based in Kaduna, Nigeria. I
          primarily architect and build things for the web. I write 
          <a
            href="https://dev.to/nyior"
            class="link-underline"
          >
            technical articles here
          </a>
           and ocassionally, I design flyers and interfaces of the web applications I build.
        </h3>
        <a
          href="mailto:cnyior27@gmail.com"
          role="button"
          class="btn btn-lg mt-5 px-4 py-2 mr-2 email-btn color-blue"
          >email me</a
        >
      </div>
    </div>

    <div class="col-12 col-md-6 hero-text-second text-left text-md-right">
        <div class="row text-left text-md-right px-md-5">
            <div class=" col-md-12 col-2">
                <a href="https://www.linkedin.com/in/nyior">
                    <i class="fa fa-linkedin link-icon"></i>
                </a>
            </div>

            <div class=" col-md-12 col-2">
                <a href="https://twitter.com/nyior_clement">
                    <i class="fa fa-twitter link-icon"></i>
                </a>
            </div>

            <div class=" col-md-12 col-2">
                <a href="https://github.com/Nyior/">
                    <i class="fa fa-github link-icon"></i>
                </a>
            </div>
        </div>
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
.link-underline {
    color: #18A0FB !important;
    font-weight: bold;
}

i{
    font-size: 5rem;
    margin-top: 5rem;
}

.hero-text-second{
	margin-top: 18rem;
}

@media only screen and (max-width: 600px) {
.hero-text-second{
	margin-top: 3rem;
} 

i{
    font-size: 3rem;
    margin-top: 0;
}
}
</style>
