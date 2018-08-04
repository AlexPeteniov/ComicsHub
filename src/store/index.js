/* eslint no-undef: 0 */

import Vuex from 'vuex'
import vue from 'vue'
vue.use(Vuex)
export const store=new Vuex.Store({
  state:{
    loadedComics:[
      {imageUrl: 'https://i.ytimg.com/vi/WIO4dkj7FTg/hqdefault.jpg',
        id:'Comics of Alexandr Gudim',
        title:'Alexandr Gudim',
        date:'2018-07-27'},
      {imageUrl: 'http://img1.reactor.cc/pics/post/Rick-and-Morty-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-Rick-Morty-3760533.png',
        id:'afdfa',
        title:'Rick and Morty1',
        date:'2018-07-28'},
      {imageUrl: 'https://mfst.igromania.ru/wp-content/uploads/2016/02/start-1.jpg',
        id:'afaaa',
        title:'DeadPool',
        date:'2018-07-29'}
      ],
    user:{
      id:'jghfdkjgfk',
      registerdComics:['548df']
    }
  },
  mutations:{
    createComic(state,payload){
      state.loadedComics.push(payload)
    },

    createNew(state, payload)
    {
      state.loadedComics.push(payload)
    }
  },

  actions:{
    createComic({commit},payload) {
      const comic={
        title: payload.title,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'id'
      }
      // Reach out to firebase and store it
      commit('createComic', comic)
    },
    createNew({commit},payload) {
      const comic={
        title: payload.title,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'id'
      }
      // Reach out to firebase and store it
      commit('createNew', comic)
    }
  },
  getters:{
    loadedComics (state) {
      return state.loadedComics.sort((comicA,comicB) =>{
        return comicA.date > comicB.date
      })
    },
    featuredComics(state,getters){
      return getters.loadedComics.slice(0,5)
    },
    loadedComic (state){
      return(comicId)=>{
        return state.loadedComics.find((comic)=>{
          return comic.id === comicId
        })
      }
    },
    loadedNews (state) {
      return state.loadedNews.sort((newA,newB) =>{
        return newA.date > newB.date
      })
    },
    featuredNews(state,getters){
      return getters.loadedNews.slice(0,5)
    },
    loadedNew (state){
      return(NewId)=>{
        return state.loadedCNews.find((New)=>{
          return New.id === NewId
        })
      }
    }
  }
})
