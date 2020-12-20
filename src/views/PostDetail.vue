<template>
  <div>
    <div class="row   hero-text px-4 d-flex justify-content-center  text-left">
      <div class="col-12 col-md-6 ml-md-auto mr-md-auto">
        <h1 class="heading-smaller glegoo">{{ article.title }}</h1>
        <Socialshare
          :url="article_url"
          :caption="article.title"
          :description="article.title"
        />
      </div>
    </div>

    <div class="row  px-4 d-flex justify-content-center  ">
      <div class="col-12 col-md-6 ml-md-auto mr-md-auto">
        <div class="row   mt-5  d-flex justify-content-center">
          <div class="col-6 text-left">
            <article class="media content-section mb-2 mt-2">
              <img
                class="rounded-circle mr-4"
                style="height: 60px; width: 60px"
                src="../assets/me.png"
              />

              <div class="media-body mt-3 mb-2 pt-3">
                <div class="article-meta-data  ">
                  <small class="text-muted font-weight-bold"
                    >Nyior Clement</small
                  >
                </div>
              </div>
            </article>
          </div>

          <div class="col-6 py-3 text-right mt-2 p-4"></div>
        </div>
      </div>
    </div>

    <div class="row d-flex justify-content-center px-4 mb-5 mt-5">
      <div class="col-12 col-md-6 ml-md-auto mr-md-auto">
        <div class="card bg-dark text-white mb-3">
          <img
            class="card-img"
            src="../assets/my-website-media/internet.jpg"
            alt="Card image"
            v-if="article.title.toLowerCase().includes('internet')"
          />
          
          <img
            class="card-img"
            src="../assets/my-website-media/crude-software-engineer.png"
            alt="Card image"
            v-if="
              article.title.toLowerCase().includes('crude software engineer')
            "
          />

          <img
            class="card-img"
            src="../assets/my-website-media/bigo.png"
            alt="Card image"
            v-if="article.title.toLowerCase().includes('complexity')"
          />

          <img
            class="card-img"
            src="../assets/my-website-media/memory.png"
            alt="Card image"
            v-if="article.title.toLowerCase().includes('memory')"
          />

          <img
            class="card-img"
            src="../assets/my-website-media/memory.png"
            alt="Card image"
            v-if="article.title.toLowerCase().includes('memory')"
          />

          <img
            class="card-img"
            src="../assets/my-website-media/recursion.png"
            alt="Card image"
            v-if="article.title.toLowerCase().includes('recursion')"
          />

          <img
            class="card-img"
            src="../assets/my-website-media/ai-vs-ml-dl.png"
            alt="Card image"
            v-if="article.title.toLowerCase().includes(
                'deep learning'
                )"
          />

        </div>

        <small class="text-muted text-center mt-5 "
          >{{ article.duration }} ago</small
        >
        <small class="text-muted text-center float-right"
          >{{ article.read_time }} mins read</small
        >
      </div>
    </div>

    <div class="row  mt-5 px-4 d-flex justify-content-center  text-left">
      <div
        class="col-12 col-md-6 ml-md-auto mr-md-auto text-muted"
        v-html="article.content"
      ></div>
    </div>

    <div class="row  hero-text text-center ">
      <div class="col-12 col-md-6 ml-md-auto mr-md-auto ">
        <h1 class="heading-smaller glegoo mt-3 text-muted">
          Loved this article ? Share with your friends on:
        </h1>

        <Socialshare
          :url="article_url"
          :caption="article.title"
          :description="article.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { apiService } from "../common/api.service.js";
import { APP_BASE_URL } from "../common/api.service.js";
import Socialshare from "@/components/Socialshare.vue";

export default {
  name: "article",

  data() {
    return {
      article: null,
      article_url: null,
      article_description: null
    };
  },

  components: {
    Socialshare
  },

  props: {
    slug: {
      type: String,
      required: true
    }
  },

  methods: {
    getSeries() {
      let get_article_url = `article/${this.slug}`;

      apiService(get_article_url, "GET").then(data => {
        this.article = data;
        this.article_url = APP_BASE_URL + this.$route.path;

        if (this.article.content) {
          this.article_description = this.article.content.slice(0, 100);
        }
      });
    }
  },

  mounted: function() {
    this.getSeries();
    document.title = `Nyior Clement | ${this.article.title}`;
  }
};
</script>

<style scoped>
pre code {
  background-color: #eee;
  border: 1px solid #999;
  display: block;
  padding: 20px;
  font-size: 14rem !important;
  color: white !important;
  opacity: 0.7;
}
</style>
