<template>
  <nav
    class="navbar navbar-expand-lg py-3  my-navbar mb-5 fixed-top "
    id="header"
  >
    <router-link :to="{ name: 'home' }" class="navbar-brand">
      <img src="../assets/logo.png" class="brand" alt="logo" />
    </router-link>

    <div class="collapse navbar-collapse ">
      <ul class="navbar-nav ml-auto ">
        <li class="nav-item mt-2 mr-3">
          <router-link :to="{ name: 'home' }">
            Home
          </router-link>
        </li>

        <li class="nav-item mt-2 mr-3">
          <router-link :to="{ name: 'about' }">
            About
          </router-link>
        </li>
        
        <li class="nav-item ">
          <a
             href="https://mulberry-branch-c13.notion.site/Nyior-Clement-a8ef68e5435345c890348d1f9f44270b"
            target="blank"
            role="button"
            class="btn btn-lg px-4 py-2 outline-btn color-blue"
            >Resume</a
          >
        </li>
      </ul>
    </div>

    <div class="overlay text-center" id="myNav" onclick="closeNav()">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
        >&times;</a
      >
      <ul class="overlay-content navbar-nav text-center">
        <li class="">
          <router-link :to="{ name: 'home' }">
            Home
          </router-link>
        </li>
        <li class="mt-4  pt-2">
          <router-link :to="{ name: 'about' }">
            About
          </router-link>
        </li>

        <li class="mt-4 pt-2">
          <a
            href="https://www.notion.so/Resume-a8ef68e5435345c890348d1f9f44270b"
            target="blank"
            role="button"
            class="btn btn-lg px-4 py-2 outline-btn-nav color-blue"
            >Resume</a
          >
        </li>
        <li class="mt-5 pt-5">
          <router-link :to="{ name: 'home' }" class="navbar-brand">
            <img src="../assets/logo.png" class="brand" alt="logo" />
          </router-link>
        </li>
      </ul>
    </div>

    <span class="mr-2 hide-elem" onclick="openNav()">
      <img src="../assets/nav.png" class="brand" alt="logo" />
    </span>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",

  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
};
</script>

<style scoped>
.my-navbar {
  font-size: 1.4rem;
  letter-spacing: 1px;
  color: white !important;
  background-color: #0a0a1e;
}

.navbar-brand {
  font-size: 2rem;
  color: #18a0fb !important;
  font-weight: bold;
}

ul li {
  margin: 0rem 1.5rem;
}

#header.active {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
</style>
