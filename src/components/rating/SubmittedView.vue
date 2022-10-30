<template>
    <div class="container">
      <div class="card">
        <div class="icon">
          <img :src="startIcon" alt="">
        </div>
        <div class="number-of-stars"> 
            You selected {{ props.rating }} out of 5
        </div>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>
    </div>
  </template>
  
  <script setup>
    import { toRef, defineProps } from 'vue';
    import startIcon from '@/components/img/rating/illustration-thank-you.svg';

    const props = defineProps({
        rating: Number
    });
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: var(--rating-white);
    }
  
    .card .icon img{
        width: 162px;
        height: 108px;
    }
    .card .number-of-stars{
        margin-top: 10px;
        background: var(--rating-medium-grey);
        color: var(--rating-orange);
        padding: 2px 20px;
        font-size: 14px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align:center;
    }
    .card h1{
      font-weight: 700;
      margin: 15px 0px 5px 0px;
    }
  
  </style>