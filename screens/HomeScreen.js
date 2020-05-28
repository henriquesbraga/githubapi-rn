import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import axios from 'axios';
import styles from './Styles.js';


class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            nomeUsuario: '',
            usuario: []
        }
    }




    getmethods(){
        
        if(this.state.nomeUsuario === ''){
            Alert.alert(
                'Aviso!',
                'Campos Vazios!',
                [{ text: 'OK' }],
                { cancelable: false }
              );
        }

        else{
            this.getDataFromApi();
        }
        
    }




    getDataFromApi(){
        const encodedNomeUsuario = encodeURIComponent(this.state.nomeUsuario);
        axios.get(`https://api.github.com/users/${encodedNomeUsuario}`)
        .then(res => {
            const resultData = res.data;
            this.setState({usuario: resultData});
        })
        .then(() =>{
            this.props.navigation.navigate("DataScreen", {
                nome: this.state.usuario.name,
                login: this.state.usuario.login, 
                img_url: this.state.usuario.avatar_url,
                public_repos: this.state.usuario.public_repos,
                bio: this.state.usuario.bio,
                location: this.state.usuario.location,
                followers: this.state.usuario.followers,
                following: this.state.usuario.following,
                company: this.state.usuario.company,
                email: this.state.usuario.email,
                created_at: this.state.usuario.created_at,
            },);
        })
        .catch(() =>{
            Alert.alert(
                'Erro!',
                'Usuário invalido ou não encontrado!',
                [{ text: 'OK' }],
                { cancelable: false }
              );
        })


    }











    render(){
        return(
            <View style={styles.container}>
                
                <Image source={require('../assets/githublogo.png')} style={styles.imagelogo}/>
                <TextInput
                value={this.state.nomeUsuario}
                onChangeText={nomeUsuario => this.setState({nomeUsuario})}
                placeholder={"Digite o Username"}
                style={styles.input}
                />
                
                <TouchableOpacity
                style={styles.button}
                onPress={() => this.getmethods()}>
                <Text style={{ color: 'white', fontSize: 21, }}>Buscar</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

export default HomeScreen;