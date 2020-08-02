<template>

<div >

	  <div class="row  mt-3">
                
		  <div class="col-6  text-left text-muted">

          <small>
			    {{ post.duration }}
          </small>

      </div>

      <div class="col-6">
        <h3 class="sub-heading-smaller text-muted">
          <i class="fa fa-share-alt float-right p-0 m-0" aria-hidden="true"></i>
        </h3>
      </div>

    </div>
                
    <h2 class=" mt-4 "> {{ post.title }}</h2>
                   
    <h3 class="text-muted text-left mt-4 mb-4">
        {{ post.description }}
    </h3>
               

    <div class="row mt-3">
                  
      <div class="col-12  text-left" v-for="keyword in post.keywords" :key="keyword.id">

        <small class="text-gr p-2 mr-5">
			    Algorithms
        </small>

      </div>

    </div>

</div>
  
</template>

<script>

export default {
  name: "Blog-Post",

  props: {
    post_object: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      post: this.post_object,
    };
  },

};

</script>

<style scoped>

.text-gr{
	font-style: italic;
  background-color: #10ba8f;
  border: 0.1rem solid #10ba8f;
  border-radius: 20rem; 
}

.text-rd{
	font-style: italic;
  background-color: #f42c5a; 
  border: 0.1rem solid #f42c5a;
  border-radius: 20rem;
}

</style>

