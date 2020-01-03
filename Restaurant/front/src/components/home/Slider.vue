<template>
  <div id="">
    <div class="canvas">
      <div class="row">
        <div class="col-md-12">
          <div id="mySlider" class="carousel slide" data-ride="carousel" data-interval="4000">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../../../static/images/slider-4.jpg" alt="" class="img-responsive">
              </div>
              <div class="carousel-item">
                <img src="../../../static/images/slider-6.jpg" alt="" class="img-responsive">
              </div>
              <div class="carousel-item">
                <img src="../../../static/images/slider-2.jpg" alt="" class="img-responsive">
              </div>
              <div class="carousel-item">
                <a href=""><img src="../../../static/images/slider-1.jpg" alt="" class="img-responsive"></a>
              </div>
              <div class="carousel-item">
                <img src="../../../static/images/slider-5.jpg" alt="" class="img-responsive">
              </div>
              <div class="carousel-item">
                <img src="../../../static/images/slider-3.jpg" alt="" class="img-responsive">
              </div>
            </div>
            <ol class="carousel-indicators">
              <li data-target="#mySlider" data-slide-to="0" class="active"></li>
              <li data-target="#mySlider" data-slide-to="1"></li>
              <li data-target="#mySlider" data-slide-to="2"></li>
              <li data-target="#mySlider" data-slide-to="3"></li>
              <li data-target="#mySlider" data-slide-to="4"></li>
              <li data-target="#mySlider" data-slide-to="5"></li>
            </ol>
          </div>
          <!--slider-border-->
          <div class="slider-border"></div>
          <!--/.slider-border-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider'
}
</script>

<style scoped>

</style>
