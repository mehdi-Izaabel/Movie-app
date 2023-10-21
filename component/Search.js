import React, { Component } from 'react'
import { View,  TextInput, Button,FlatList,StyleSheet } from "react-native";
import { getFilmFromAPI } from '../API/tmdbapi';
import FilmInfo from './FilmInfo';


export default class Search extends Component {
  constructor(props){
    super(props)

    this.navigation = props.navigation
    this.title_film=''
    this.page=0
    this.total_pages=0
    this.state={
      film:[],
      loading:false,
    }
  }

  load_film(){
    if(this.title_film.length>0)
    {
      this.setState({loading:true})
      getFilmFromAPI(this.title_film,this.page+1).then((data)=>{
        this.page=data.page
        this.total_pages = data.total_pages
        this.setState({
          film:[...this.state.film,...data.results],
          loading:false
        })
      })
    }
    else{
        console.log("erreur")
    }
  }
  searchFilm(){
    this.page=0
    this.total_pages=0
    this.setState({
      film:[]},()=>{this.load_film()}
    )
  }
  displayDetailFilm= (idfilm)=> {
    this.props.navigation.navigate('Details',{idfilm:idfilm})
  }

  render() {
    return (
      <View style={{flex:1}}>
        <TextInput style={styles.textinput_style} placeholder='Titre du film' onChangeText={(text)=>this.title_film=text}/>
        <Button title='Rechercher' onPress={()=>{this.searchFilm()}}/>
        <FlatList data={this.state.film}keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=><FilmInfo film={item} displayDetailFilm={this.displayDetailFilm}/>}>

        </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    textinput_style:{
        borderColor:'blue',
        borderWidth:1,
        margin:40,
        height:50
    }
})
