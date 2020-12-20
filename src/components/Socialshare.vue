<template>
  <div>
    <h1 class="text-muted">
      <social-sharing
        :url="url"
        :title="caption"
        :description="description"
        :quote="caption"
        v-cloak
        inline-template
      >
        <ul class="list-inline mt-4">
          <li class="list-inline-item m-0 mr-4">
            <network network="whatsapp">
              <i class="fa fa-whatsapp share" aria-hidden="true"></i>
            </network>
          </li>

          <li class="list-inline-item mr-4">
            <network network="facebook">
              <i class="fa fa-facebook share" aria-hidden="true"></i>
            </network>
          </li>

          <li class="list-inline-item mr-4">
            <network network="twitter">
              <i class="fa fa-twitter share" aria-hidden="true"></i>
            </network>
          </li>

          <li class="list-inline-item mr-4">
            <network network="linkedin">
              <i class="fa fa-linkedin share" aria-hidden="true"></i>
            </network>
          </li>

          <li class="list-inline-item mr-4 text-muted">
            <network network="telegram">
              <i class="fa fa-telegram share" aria-hidden="true"></i>
            </network>
          </li>
        </ul>
      </social-sharing>
    </h1>
  </div>
</template>

<script>
import SocialSharing from "vue-social-sharing";

export default {
  name: "Socialshare",

  components: {
    SocialSharing
  },

  props: {
    url: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    hashtags: {
      type: String,
      required: false
    },
    horizontalIcons: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      overiddenNetworks: {
        facebook: {
          sharer:
            "https://www.facebook.com/sharer/sharer.php?u=@url&title=@title&description=@description&quote=@quote&hashtag=@hashtags",
          type: "popup"
        },

        linkedin: {
          sharer:
            "https://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description",
          type: "popup"
        },

        telegram: {
          sharer: "https://t.me/share/url?url=@url&text=@description",
          type: "popup"
        },

        whatsapp: {
          sharer: "https://api.whatsapp.com/send?text=@description%0D%0A@url",
          type: "popup",
          action: "share/whatsapp/share"
        }
      }
    };
  },

  methods: {
    copyToClipboard(str) {
      const el = document.createElement("textarea");
      el.value = str;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);

      this.$emit("link-copied");
    }
  }
};
</script>

<style scoped>
.bottom-border-primary {
  border-bottom: solid 2px #795fdc;
}

.no-top-border-radius {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.no-bottom-border-radius {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

ul#icons-list li {
  display: inline;
}
</style>
