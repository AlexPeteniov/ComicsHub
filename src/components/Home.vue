/* eslint no-undef: 0 */
<template>
    <v-container>
      <v-layout row wrap >
        <v-flex xs12 sm6 class=" text-xs-center text-sm-right">
          <v-btn large router to="/comics"  dark class="deep-orange darken-2"> Explore all Comics </v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center text-sm-left">
          <v-btn large router to="/comics/new" dark class="deep-orange darken-2" > Add new Comics</v-btn>
        </v-flex>
      </v-layout>

      <v-layout row-wrap>
        <v-flex xs12>
          <v-carousel light style="cursor:pointer" >

            <v-carousel-item
              v-for="comic in comics"
              :key="comic.id"
              @click :to="'/Comics/'+comic.id"
              :src="comic.imageUrl">
              <div class="title">
                {{comic.title}}
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
    computed:{
      comics(){
        return this.$store.getters.featuredComics
      }
    },
   /* methods:{
      onLoadComic(id){
        this.$router.push( /'comics'/+id )
      }
    }*/
  }
</script>
<style scoped>
  .title{
    position:absolute;
    bottom:30px;
/*    background-color: black;*/
    color:white;
    font-size:2em;
    padding: 20px;
  }
</style>
