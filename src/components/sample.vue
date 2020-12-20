<template>
  <div>
    <social-sharing
      v-if="!horizontalIcons"
      :url="url"
      :title="caption"
      :description="description"
      :quote="caption"
      :hashtags="hashtags"
      :networks="overiddenNetworks"
      v-cloak
      inline-template
    >
      <v-list class="py-0 no-top-border-radius" two-line>
        <template>
          <network network="twitter" id="twitter">
            <v-list-item link ripple>
              <v-list-item-avatar>
                <v-icon color="#55acee">
                  mdi-twitter
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  Twitter
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </network>
          <network network="whatsapp" id="whatsapp">
            <v-list-item link ripple>
              <v-list-item-avatar>
                <v-icon :color="'#43d854'">
                  mdi-whatsapp
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  WhatsApp
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </network>
          <network network="facebook" id="facebook">
            <v-list-item link ripple>
              <v-list-item-avatar>
                <v-icon color="#3b5998">
                  mdi-facebook
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  Facebook
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </network>
          <network network="telegram" id="telegram">
            <v-list-item link ripple>
              <v-list-item-avatar>
                <v-icon color="#00405d">
                  mdi-telegram
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  Telegram
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </network>
        </template>
      </v-list>
    </social-sharing>

    <social-sharing
      v-else
      :url="url"
      :title="caption + ' on Bubbl'"
      :description="description"
      :quote="caption"
      :hashtags="hashtags"
      :networks="overiddenNetworks"
      v-cloak
      inline-template
    >
      <ul style="list-style: none" class="d-inline-flex pa-0" id="icons-list">
        <template>
          <network network="twitter" id="twitter">
            <li class="mr-5">
              <button
                href="javascript:void(0)"
                class="grey ligthen-1 v-btn v-btn--flat v-btn--icon v-btn--round theme--light v-size--large"
              >
                <span class="v-btn__content">
                  <v-icon color="white">
                    mdi-twitter
                  </v-icon>
                </span>
              </button>
            </li>
          </network>

          <network network="facebook" id="facebook">
            <li class="mr-5">
              <button
                href="javascript:void(0)"
                class="grey ligthen-1 v-btn v-btn--flat v-btn--icon v-btn--round theme--light v-size--large"
              >
                <span class="v-btn__content">
                  <v-icon color="white">
                    mdi-facebook
                  </v-icon>
                </span>
              </button>
            </li>
          </network>

          <network network="whatsapp" id="whatsapp">
            <li class="mr-5">
              <button
                href="javascript:void(0)"
                class="grey ligthen-1 v-btn v-btn--flat v-btn--icon v-btn--round theme--light v-size--large"
              >
                <span class="v-btn__content">
                  <v-icon color="white">
                    mdi-whatsapp
                  </v-icon>
                </span>
              </button>
            </li>
          </network>

          <network network="telegram" id="telegram">
            <li class="mr-5">
              <button
                href="javascript:void(0)"
                class="grey ligthen-1 v-btn v-btn--flat v-btn--icon v-btn--round theme--light v-size--large"
              >
                <span class="v-btn__content">
                  <v-icon color="white">
                    mdi-telegram
                  </v-icon>
                </span>
              </button>
            </li>
          </network>
        </template>
      </ul>
    </social-sharing>
    <v-list
      class="py-0 bottom-border-primary no-bottom-border-radius"
      v-if="!horizontalIcons"
      two-line
    >
      <v-list-item link ripple @click.prevent="copyToClipboard(url)">
        <v-list-item-avatar>
          <v-icon color="secondary">
            mdi-link
          </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            Copy Link
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <li v-else style="display: inline">
      <v-tooltip color="amber" :open-on-click="true" :open-on-hover="false" top>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn
            @click="copyToClipboard(url)"
            v-on="tooltip"
            class="grey ligthen-1"
            large
            link
            icon
          >
            <v-icon color="white">
              mdi-link
            </v-icon>
          </v-btn>
        </template>
        Link Copied!
      </v-tooltip>
    </li>
  </div>
</template>

<script>
import SocialSharing from "vue-social-sharing";
export default {
  name: "SocialShare",
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

        googleplus: {
          sharer: "https://plus.google.com/share?url=@url",
          type: "popup"
        },

        line: {
          sharer: "http://line.me/R/msg/text/?@description%0D%0A@url",
          type: "popup"
        },

        linkedin: {
          sharer:
            "https://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description",
          type: "popup"
        },

        odnoklassniki: {
          sharer:
            "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=@url&st.comments=@description",
          type: "popup"
        },

        pinterest: {
          sharer:
            "https://pinterest.com/pin/create/button/?url=@url&media=@media&description=@title",
          type: "popup"
        },

        reddit: {
          sharer: "https://www.reddit.com/submit?url=@url&title=@title",
          type: "popup"
        },

        skype: {
          sharer: "https://web.skype.com/share?url=@description%0D%0A@url",
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
