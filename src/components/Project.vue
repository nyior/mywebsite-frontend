<template>
    <div class="allround-shadow p-2 card row m-3">
        <div class="col-12 project-header">
          
          <ul class="list-inline">
            <li
              class="list-inline-item mr-5 ml-1 mt-2"
            >
              <span>{{ project.title }}</span>
            </li>

            <li
              class="list-inline-item mr-5 ml-1 mt-2"
              v-if="project.live_url != null"
            >
              <a :href="project.live_url">
                <i class="fa fa-external-link link-icon" aria-hidden="true"></i>
              </a>
            </li>

            <li
              class="list-inline-item ml-1 p-0"
              v-if="project.github_url != null"
            >
              <a :href="project.github_url">
                <i class="fa fa-github link-icon"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="col-12 ">
            <img
            src="../assets/my-website-media/bubbl.jpg"
            alt="Bubbl User Interface"
            class="img-fluid rounded float-right project-image"
            v-if="project.title.toLowerCase().includes('bubbl')"
            />

            <img
            src="../assets/my-website-media/vendor.png"
            alt="Marche User Interface"
            class="img-fluid rounded float-right project-image"
            v-if="project.title.toLowerCase().includes('aunvendor')"
            />

            <img
            src="../assets/my-website-media/clipit.png"
            alt="Clipit cover"
            class="img-fluid rounded float-right project-image"
            v-if="project.title.toLowerCase().includes('clipit')"
            />

            <img
            src="../assets/my-website-media/pnl.png"
            alt="Play and learn interface"
            class="img-fluid rounded float-right project-image"
            v-if="project.title.toLowerCase().includes('pnl')"
            />
        </div>

        <div class="col-12 mt-3">
            <h3 class="text-muted text-justify">
              {{ project.description }}
            </h3>
        </div>

        <hr />

        <div class="col-12 text-left mt-4 text-muted">
            <small>
              <ul class="list-inline">
                <li
                  class="list-inline-item"
                  v-for="keyword in project.keywords"
                  :key="keyword.id"
                >
                  #{{ keyword.word }}
                </li>
              </ul>
            </small>
        </div>
       
    </div>
</template>

<script>
export default {
  name: "Project",

  props: {
    project_object: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      project: this.project_object
    };
  }
};
</script>

<style scoped>
span{
    font-size: 2rem;
    font-weight: bold;
}

img{
    width: 635px;
    height: 380px;
}

@media only screen and (max-width: 600px) {
    img{
        width: 330px;
        height: 190px;
    }
}
</style>
