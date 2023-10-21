import React, { Component } from "react";
import { View, Image, Text,StyleSheet,TouchableOpacity } from "react-native";
import { getFilmImage } from "../API/tmdbapi";


//Component de type classe that return film information

export default class FilmInfo extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const film=this.props.film
        const displayDetailFilm = this.props.displayDetailFilm
        return(
            <TouchableOpacity onPress={() =>displayDetailFilm(film.id)} style={styles.global_container_style}>

                    <Image style={styles.image_style} source={{uri:getFilmImage(film.poster_path)}}/>

                    <View style={styles.container_style}>

                        <View style={styles.header_style}>
                            <Text style={styles.title_text}>{film.title}</Text>
                            <Text style={styles.vote_text}>{film.vote_average}</Text>
                        </View>

                        <View style={styles.description_style}>
                            <Text>{film.overview}</Text>
                        </View>
                    
                        <View style={styles.footer_style}>
                            <Text style={styles.date_style}>Sorti le {film.release_date}</Text>
                        </View>

                    </View>

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    global_container_style:{
        height:190,
        
        flexDirection:"row",
        marginTop:30,
    },
    image_style:{
        
        width:120,
        margin:10,
    },
    container_style:{
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom : 40,
    },
    header_style:{
        flexDirection:"row",
        flex:3,        
    },
    description_style:{
        flex:6
    },
    footer_style:{
        flex:1,
    },
    date_style:{
        textAlign: "right",
    },
    title_text:{
        fontWeight : 'bold',
        textAlign:"left"
    },
    vote_text:{
        fontWeight : 'bold',
        flex:1,
        textAlign:"right",
    }
})