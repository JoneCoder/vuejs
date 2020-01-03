<template>
    <div id="">
        <div class="menu-bar">
          <div class="content">
            <div class="row">
              <!--menu-logo-->
              <div class="col-md-3">
                <div class="logo">
                  <router-link to="/"><img src="../../../../static/images/layer/logo.png" alt="Island_logo" width="100%" height="100%"></router-link>
                </div>
              </div>
              <!--/.menu-logo-->

              <!--nav-bar-menu-->
              <div class="col-md-9">
                <nav class="navbar navbar-expand">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item"><router-link to="/food" class="nav-link menu-link">FOOD<span class="ml-3"><img src="../../../../static/images/layer/nav-dot.gif" alt=""></span></router-link></li>
                    <li class="nav-item"><router-link to="/bar" class="nav-link menu-link">BAR<span class="ml-3"><img src="../../../../static/images/layer/nav-dot.gif" alt=""></span></router-link></li>
                    <li class="nav-item"><router-link to="/location" class="nav-link menu-link">LOCATIONS<span class="ml-3"><img src="../../../../static/images/layer/nav-dot.gif" alt=""></span></router-link></li>
                    <li class="nav-item"><router-link to="/rewards" class="nav-link menu-link">REWARDS</router-link></li>
                  </ul>
                  <ul class="navbar-nav social-media">
                    <li class="nav-item"><a href="" class="nav-link" target="_blank"><i class="fab fa-facebook-f icon"></i></a></li>
                    <li class="nav-item"><a href="" class="nav-link" target="_blank"><i class="fab fa-twitter icon"></i></a></li>
                    <li class="nav-item"><a href="" class="nav-link" target="_blank"><i class="fab fa-instagram icon"></i></a></li>
                  </ul>
                </nav>
              </div>
              <!--/.nav-bar-menu-->

              <!--order-cart-->
              <div class="order-online">
                <router-link to="/order"><img src="../../../../static/images/order.png" alt="" width="100%" height="100%"></router-link>
              </div>
              <!--/.order-cart-->
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
