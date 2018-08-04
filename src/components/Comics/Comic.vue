/* eslint no-undef: 0 */
<template >
   <v-container >
     <v-layout row-wrap >
       <v-flex xs12 id="inspire">
         <v-carousel style="height:100%" >
           <v-carousel-item
             v-for="gudim in gudims"
             :key="gudim.id"
             :src="gudim.imageUrl"

           >
             <div class="title">
               {{gudim.title}}
             </div>
           </v-carousel-item>
         </v-carousel>
       </v-flex>
     </v-layout>
     <v-layout row wrap class="mt-2">
       <v-flex xs12 class=" text-xs-center ">
         <p>Join our awesome Comics Hub!</p>
       </v-flex>
     </v-layout>
   </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      gudims () {
        return this.$store.getters.loadedComic(this.id)
      }
    },

    data () {
      return {
        gudims:[
          {imageUrl: 'https://pp.userapi.com/c849336/v849336190/3434a/D274hI6i3CE.jpg', id:'1', title:'Rick and Morty'},
          {imageUrl: 'https://pp.userapi.com/c846523/v846523917/a1bba/6CD7Lw4dqro.jpg', id:'2', title:'Rick and Morty1'},
          {imageUrl: 'https://pp.userapi.com/c846122/v846122119/b4aa3/OK0e36TG-vM.jpg', id:'3', title:'Rick and Morty'},
          {imageUrl: 'https://pp.userapi.com/c824504/v824504312/19c639/JK9nVoAKG2s.jpg', id:'4', title:'Rick and Morty'},
          {imageUrl: 'https://pp.userapi.com/c844417/v844417051/a274d/lQ2cj7bxchg.jpg', id:'5', title:'Rick and Morty'},
          {imageUrl: 'https://pp.userapi.com/c849324/v849324645/1fa62/UWSvNs0sS8A.jpg', id:'6', title:'Rick and Morty'},
          {imageUrl: 'https://pp.userapi.com/c848620/v848620712/d03a/b7agfJjBSmo.jpg', id:'7', title:'Rick and Morty'},
          {imageUrl: 'https://pp.userapi.com/c623900/v623900485/14ee8b/aJ_1DhlkERE.jpg', id:'8', title:'Rick and Morty'},
          {imageUrl: 'https://pp.userapi.com/c840321/v840321897/77afb/NOg6m1zSF8U.jpg', id:'9', title:'My project'}

        ]
      }
    }
  }
  </script>
<style>
  .title{
    position:absolute;
    bottom:30px;
    /*    background-color: black;*/
    color:white;
    font-size:2em;
    padding: 20px;
  }
  #inspire {
    height: 90vh;
  }
</style>


