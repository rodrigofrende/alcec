<template lang="">
  <div>
    <div v-if="images.length > 0" id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(image, index) in images" :key="index" data-bs-interval="5000" :class="index === 0 ? 'active' : ''" class="carousel-item">
          <img :src="image.src" class="d-block w-100"  :alt="image.alt">

          <div v-if="image.innerText" class="carousel-caption d-none d-md-block">
            <button class="btn btn-secondary" @click="openLink(image)">
              <span class="innet-text">{{image.innerText}}</span>
            </button>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div v-else>
      <span>No images</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    images: {
      type: Array,
      default: [],
    },
  },
  methods: {
    openLink(image) {
      if (!image.href) return;
      if (image.isRouterRedirect) {
        this.$router.push({ path: "/reservar-turno" });
      } else {
        window.open(image.href, "_blank");
      }
    },
  },
};
</script>
<style scoped lang="scss">
.carousel-control-next-icon,
.carousel-control-prev-icon {
  width: 3.5rem;
  height: 3.5rem;
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23B8B6B6'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23B8B6B6'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
}

.innet-text {
  font-weight: 400;
  font-size: 30px;
  line-height: 32px;
  text-align: center;

  color: #e4e4e4;
}

.btn-secondary {
  padding-top: 18px !important;
  padding-bottom: 0px !important;

  padding-left: 22px;
  padding-right: 22px;

  background: #878787 !important;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25) !important;
  border-radius: 10px !important;
}
</style>