<template>
  <div>

    <div class="row  d-flex justify-content-center text-center hero-text-first">

      <div class="col-12"> 
		    <h1 class="heading-smaller glegoo mt-3"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></h1>
        <h1 class="heading-smaller glegoo mt-3">Welcome to My Blog</h1>
        <h1 class="sub-heading-smaller text-muted mt-1">Look Around</h1>
		
      </div>

      <div class="col-10 col-md-6 "> 
          
        <h3 class="mt-5 mb-5 pb-5 text-muted text-justify">
                I will be writing about Python, Django, and may be Vue.js.
          I will also be writing about the books I read, about life and don't be surprise if you see me write about some random stuff too.
        </h3>
        
      </div>
    
    </div>

    

    <div class="row  hero-text text-center  mb-5">
      <div class="col-12 "> 
        <h1 class="heading-smaller glegoo ">writing Series</h1>
      </div>
    </div>

    <div class="row d-flex justify-content-center text-center  m-4" >

      <div class="col-12 col-md-3 card allround-shadow p-2 m-4" v-for="post in series" :key="post.id">
        <router-link :to="{ name: 'series_detail', params: { slug: post.slug} }">
          <Series :series_object="post"/>
        </router-link>
      </div>

    </div>

    <div class="row  hero-text text-center m-5">

        <div class="col-12 "> 
          <h1 class="heading-smaller glegoo mt-5">Get In Touch</h1>
          
          <div class="mt-5">

            <h3 class="text-muted "> I am currently open to new job opportunities. Or do you just want to say hi ? </h3>

            <a href="mailto:cnyior27@gmail.com" role="button" class="btn btn-lg mt-5 px-4 py-2 color-blue email-btn">Email Me</a>

          </div>

        </div>
        
    </div>
          

  </div>
</template>

<script>

import { apiService } from "../common/api.service.js";
import Series from "@/components/Series.vue";

export default {
  name: "blog",

  data() {
    return {
      series: [],
      
    };
  },

  components: {
    Series,
  },

  methods: {
    getSeries() {
      let series_url = "series";

      apiService(series_url, "GET").then(data => {
        this.series.push(...data);
        // console.log(data.results);
       

      });
    }
  },

  mounted: function() {
    document.title = "Nyior Clement | Blog"
  },

  created() {
    this.getSeries();
  }
}

</script>

<style scoped>


</style>

