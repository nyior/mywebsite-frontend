<template>
  <div>

    <div class="row px-4 d-flex justify-content-center  mb-5 hero-text">

      <div class="col-12 col-md-6 ml-md-auto mr-md-auto"> 

		<div class="card bg-dark text-white mb-3">
			<img class="card-img" :src="article.header_image" alt="Card image">
			
		</div>

		 <small class = "text-muted text-left mt-5">great mind image</small>
		
      </div>
    
    </div>

	<div class="row   hero-text px-4 d-flex justify-content-center  text-left">
        <div class="col-12 col-md-6 ml-md-auto mr-md-auto"> 
          <h1 class="heading-smaller glegoo">{{ article.title }}</h1>
		  <small class = "text-muted">{{ article.duration }} ago</small>
		  
        </div>
    </div>

	<div class="row   mt-5 px-4 d-flex justify-content-center  ">
        <div class="col-12 col-md-6 ml-md-auto mr-md-auto">
			<div class="row   mt-5  d-flex justify-content-center"> 
				<div class="col-6 text-left">
					<article class = "media content-section mb-2 mt-2">
				
						<img class="rounded-circle mr-4" style="height: 50px; width: 50px"
							src = "../assets/me.png">
						
						<div class = "media-body mt-2 mb-2 pt-2">
							<div class = "article-meta-data  ">
								<small class = "text-muted font-weight-bold">Nyior Clement</small>
								
							</div>
						
						</div>

					</article>
				</div>

				<div class="col-6 py-3">
					<h3 class="sub-heading-smaller text-muted">
					<i class="fa fa-share-alt float-right " aria-hidden="true"></i>
					</h3>
				</div>
			</div>
 
        </div>
    </div>

    

    <div class="row  mt-5 px-4 d-flex justify-content-center  text-left">
        <div class="col-12 col-md-6 ml-md-auto mr-md-auto"> 
           {{ article.content }}
		   <h3 class=" text-muted ">
               content coming soon.... stay tuned.
        	</h3>
        </div>
    </div>

    <div class="row  hero-text text-center ">

        <div class="col-12 col-md-6 ml-md-auto mr-md-auto "> 
          <h1 class="heading-smaller glegoo mt-3 text-muted">Loved this article ? Share with your friends on: </h1>
          
		  <h1 class="text-muted">
			<ul class="list-inline mt-4">
					<li class="list-inline-item m-0 mr-5">
					<router-link :to="{ name: 'about' }">
						<i class="fa fa-linkedin share"></i>
					</router-link>
					</li>
					<li class="list-inline-item mr-5" >
					<router-link :to="{ name: 'about' }">
						<i class="fa fa-twitter share"></i>
					</router-link>
					</li>
					<li class="list-inline-item mr-5 text-muted">
					<router-link :to="{ name: 'about' }">
						<i class="fa fa-github share"></i>
					</router-link> 
					</li>
				</ul>
			</h1>
        </div>
    </div>
          
</div>
</template>

<script>

import { apiService } from "../common/api.service.js";


export default {
  name: "article",

  data() {
    return {
      article: null,
      
    };
  },


   props: {
    slug: {
      type: String,
      required: true
    },

  },


  methods: {
    getSeries() {
      let article_url = `article/${ this.slug }`;

      apiService(article_url, "GET").then(data => {

		this.article=data;
		
      });
    }
  },

  mounted: function() {
	this.getSeries();
    document.title = `Nyior Clement | ${ this.article.title }`;
  },
}

</script>

<style scoped>


</style>

