<template>
  <div class="sidebar"
       :data="backgroundColor">
    <!--
            Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black | darkblue"
            Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
        -->
    <!-- -->
    <div class="sidebar-wrapper" id="style-3">
      <div class="logo">
        <a 
           aria-label="sidebar mini logo"
           class="simple-text logo-mini">
          <div class="logo-img"
               :class="{'logo-img-rtl': $rtl.isRTL}">
            <img
              src="data:image/png;base64,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"
              alt="">
          </div>
        </a>
        <a class="simple-text logo-normal">
          {{title}}
        </a>
      </div>
      <slot>

      </slot>
      <ul class="nav">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <slot name="links">
          <sidebar-link v-for="(link,index) in sidebarLinks"
                        :key="index"
                        :to="link.path"
                        :name="link.name"
                        :icon="link.icon">
          </sidebar-link>
        </slot>
      </ul>
    </div>
  </div>
</template>
<script>
  import SidebarLink from "./SidebarLink";

  export default {
    props: {
      title: {
        type: String,
        default: "Rey de Reyes"
      },
      backgroundColor: {
        type: String,
        default: "vue"
      },
      activeColor: {
        type: String,
        default: "success",
        validator: value => {
          let acceptedValues = [
            "primary",
            "info",
            "success",
            "warning",
            "danger"
          ];
          return acceptedValues.indexOf(value) !== -1;
        }
      },
      sidebarLinks: {
        type: Array,
        default: () => []
      },
      autoClose: {
        type: Boolean,
        default: true
      }
    },
    provide() {
      return {
        autoClose: this.autoClose,
        addLink: this.addLink,
        removeLink: this.removeLink
      };
    },
    components: {
      SidebarLink
    },
    computed: {
      /**
       * Styles to animate the arrow near the current active sidebar link
       * @returns {{transform: string}}
       */
      arrowMovePx() {
        return this.linkHeight * this.activeLinkIndex;
      },
      shortTitle() {
        return this.title.split(' ')
          .map(word => word.charAt(0))
          .join('').toUpperCase();
      }
    },
    data() {
      return {
        linkHeight: 65,
        activeLinkIndex: 0,
        windowWidth: 0,
        isWindows: false,
        hasAutoHeight: false,
        links: []
      };
    },
    methods: {
      findActiveLink() {
        this.links.forEach((link, index) => {
          if (link.isActive()) {
            this.activeLinkIndex = index;
          }
        });
      },
      addLink(link) {
        const index = this.$slots.links.indexOf(link.$vnode);
        this.links.splice(index, 0, link);
      },
      removeLink(link) {
        const index = this.links.indexOf(link);
        if (index > -1) {
          this.links.splice(index, 1);
        }
      }
    },
    mounted() {
      this.$watch("$route", this.findActiveLink, {
        immediate: true
      });
    }
  };
</script>
