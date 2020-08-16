<template>

<div >

	  <div class="row  mt-3">
                
		  <div class="col-6  text-left text-muted">

          <small>
			    {{ post.duration }}
          </small>

      </div>

      <div class="col-6 text-right text-muted">
        <small>
			    Nyior Clement
        </small>
      </div>

    </div>
                
    <h2 class=" mt-4 "> {{ post.title }}</h2>
                   
    <h3 class="text-muted text-left mt-4 mb-4">
        {{ post.description }}
    </h3>
               

    <div class="row mt-5">
                  
      <div class="col-12  text-left">

        <ul class="list-inline">
          <li class="list-inline-item"  v-for="keyword in post_object.keywords" :key="keyword.id">
            <small class="text-rd p-2 mr-2">
            {{ keyword.word }}
            </small>
          </li>

        </ul> 

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

