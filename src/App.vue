/* eslint no-undef: 0 */
<template>
  <v-app>



  <v-toolbar dark class="pink darken-4">
    <v-toolbar-side-icon @click="sideNav=!sideNav"
                         class="hidden-sm-and-up"></v-toolbar-side-icon>


    <v-toolbar-title class="hidden-sm-only">
      <router-link to="/" tag="span" style="cursor: pointer">Comics Hub</router-link>
    </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items  class="hidden-xs-only">
          <v-btn flat
                 v-for="item in menuItems"
                 :key="item.title"
                 :to="item.link"
                  >
            <v-icon>{{item.icon}}</v-icon>
            {{item.title}}
          </v-btn>
        </v-toolbar-items>
</v-toolbar>


    <main>
      <router-view></router-view>

    </main>
    <v-navigation-drawer app  v-model="sideNav" class="hidden-sm-and-up">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
  </v-app>
</template>

<script>
  export default {
    data (){
      return {
        sideNav: false,
        menuItems: [
          {icon: ' book', title: 'View Comics', link: '/Comics'},
          {icon: ' whatshot', title: 'Add Comics', link: '/Comics/new'},
          {icon: ' library_books', title: 'News', link: '/News'},
          {icon: ' copyright', title: 'Copyright', link: '/Copyright'},
          {icon: ' info', title: 'About', link: '/Info'},
       /*   {icon: ' info', title: 'Profile', link: '/ Profile'},*/
          {icon: ' face', title: 'Sign up', link: '/Signup'},
          {icon: ' lock_open', title: 'Sign in', link: '/Signin'}

        ]
      }
    }
  }
</script>
