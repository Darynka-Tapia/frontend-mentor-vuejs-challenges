<template>
  <div class="container">
    <div class="card">
      <div class="icon">
        <img :src="startIcon" alt="">
      </div>
      <h2>How did we do?</h2>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div class="rating">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
      </div>
      <button>Submit</button>
    </div>
  </div>
</template>

<script setup>
  import startIcon from '@/components/img/rating/icon-star.svg';
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap');
  /* 
    - Mobile: 375px
    - Desktop: 1440px
    - Font size (paragraph): 15px
  */
  .container{
    font-family: 'Overpass', sans-serif;
    background-color: var(--rating-very-dark-blue);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card{
    width: 390px;
    height: auto;
    background-color: var(--rating-dark-blue);
    border-radius: 20px;
    padding: 40px;
  }
  .card .icon {
    display: flex;
    background-color: var(--rating-medium-grey);
    width: 40px;
    height: 40px;
    padding: 12px;
    border-radius: 50px;
  }

  .card {
    color: var(--rating-white);
  }
  .card h2{
    font-weight: 700;
    margin-top: 25px;
  }
  .card p{
    font-size: 14px;
    font-weight: 400;
    margin-top: 10px;
  }

  .rating{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  .rating .item{
    font-size: 12px;
    font-weight: 400;
    background-color: var(--rating-medium-grey);
    width: 40px;
    width: 40px;
    padding: 10px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  button{
    margin-top: 20px;
    width: 100%;
    padding: 8px 0;
    background-color: var(--rating-orange);
    border: none;
    border-radius: 50px;
    color: var(--rating-white);
    text-transform: uppercase;
    font-weight: 700;
  }
</style>