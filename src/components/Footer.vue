<template>
<div class="my-footer text-center">
    <div class="row text-muted">
		<div class="col-12">
			<p >Designed  and Implemented by Nyior Clement</p>
		</div>

    </div>

	 <div class="row mt-2  ">
		<div class="col-12 ">
			<ul class="list-inline">
				<li class="list-inline-item m-0 mr-3">
				<router-link :to="{ name: 'about' }">
					<i class="fa fa-linkedin link-icon"></i>
				</router-link>
				</li>
				<li class="list-inline-item mr-3" >
				<router-link :to="{ name: 'about' }">
					<i class="fa fa-twitter link-icon"></i>
				</router-link>
				</li>
				<li class="list-inline-item">
				<router-link :to="{ name: 'about' }">
					<i class="fa fa-github link-icon"></i>
				</router-link> 
				</li>
			</ul>
		</div>
    </div>
 </div>     
</template>

<script>

  export default {
    name: "Footer",

    
  };

</script>

<style scoped>

.my-footer {
  font-size: 1.2rem;
  letter-spacing: 1px;
  color: white !important;
  width: 100%;
  margin-top: 10.0rem;
  position: relative;
  bottom: 0px;
  
}

ul li {
  margin: 0rem 1.5rem;
}
</style>
