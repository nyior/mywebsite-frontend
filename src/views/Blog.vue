<template>
  <div>

    <div class="row  d-flex justify-content-center text-center hero-text-first">
      <div class="col-12"> 
		<h1 class="heading-smaller glegoo mt-3"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></h1>
        <h1 class="heading-smaller glegoo mt-3">Welcome to My Blog</h1>
		
      </div>

	  <div class="col-10 col-md-6 "> 
        
		<h3 class="mt-5 text-muted">
            I will be writing about Python, Django, and may be Vue.js.
			I will also be writing about the books I read, about life and don't be surprise if you see me write about love too.
        </h3>
      </div>
    </div>

    

    <div class="row  hero-text text-center">
        <div class="col-12 "> 

          <h1 class="heading-smaller glegoo mt-3">Articles</h1>
        </div>
    </div>

    <div class="row  d-flex justify-content-center text-center ml-2 mr-2 mt-5 mb-5">
        <Post/>
        <Post/>
    </div>

    <div class="row  hero-text text-center mb-5">
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

import Post from "@/components/Post.vue";

export default {
  name: "about",

  components: {
    Post,
  },

  mounted: function() {
    document.title = "Nyior Clement | Blog"
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

