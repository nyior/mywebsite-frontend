<template>
  <div>

    <div class="row  d-flex justify-content-center text-center hero-text-first">

      <div class="col-12"> 
		    <h1 class="heading-smaller glegoo mt-3"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></h1>
        <h1 class="heading-smaller glegoo mt-3">{{ series.title }}</h1>
       <h1 class="sub-heading-smaller text-muted mt-2">Started: {{ series.duration }} ago</h1>
		
      </div>

      <div class="col-10 col-md-6 "> 
          
        <h3 class="mt-5 mb-5 pb-5 text-muted text-justify">
                {{ series.description }}
        </h3>
        
      </div>
    
    </div>

    

    <div class="row  hero-text text-center  mb-5">
        <div class="col-12 "> 

          <h1 class="heading-smaller glegoo ">Posts In This Series</h1>
        </div>

    </div>

    <div class="row px-4 d-flex justify-content-center text-center  mt-5 mb-5" v-if="series.posts.length > 0">

		<div  class="col-12 col-md-3 card allround-shadow p-4 m-4" v-for="post in series.posts" :key="post.id">
			<router-link :to="{ name: 'post_detail', params: { slug: post.slug} }">
				<Post :post_object="post"/>
			</router-link>
      	</div>
	  

    </div>

	<div class="row px-4 d-flex justify-content-center text-center  mt-5 mb-5" v-else>
        <h3 class="mt-5 mb-5 pb-5 text-muted text-left">
                Chill I dey work .... stay tuned.
        </h3>
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
import Post from "@/components/Post.vue";

export default {
  name: "blog",

  data() {
    return {
      series: null,
      
    };
  },

  components: {
    Post,
  },

   props: {
    slug: {
      type: String,
      required: true
    },

  },


  methods: {
    getSeries() {
      let series_url = `series/${ this.slug }`;

      apiService(series_url, "GET").then(data => {
        this.series=data;
        // console.log(data.results);
       

      });
    }
  },

  mounted: function() {
	this.getSeries();
    document.title = `Nyior Clement | ${ this.series.title }`;
  },
}

</script>

<style scoped>


</style>

