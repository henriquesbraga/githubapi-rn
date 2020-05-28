import React, { Component } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import Moment from 'moment';
import styles from './Styles.js';

class DataScreen extends Component{
    
    
    render(){
        Moment.locale('en');
        var dt = this.props.route.params.created_at;
        
        return(
            <View style={styles.container}>


                <Image source={{uri: this.props.route.params.img_url}}
                style={styles.imageFrame} />
                
                <Text style={styles.textInformation}>Nome: {this.props.route.params.nome}</Text>
                <Text style={styles.textInformation}>Username: {this.props.route.params.login}</Text>
                <Text style={styles.textInformation}>Email: {this.props.route.params.email}</Text>
                <Text style={styles.textInformation}>Empresa: {this.props.route.params.company}</Text>
                <Text style={styles.textInformation}>Bio: {this.props.route.params.bio}</Text>
                <Text style={styles.textInformation}>Localidade: {this.props.route.params.location}</Text>
                <Text style={styles.textInformation}>Respositórios públicos: {this.props.route.params.public_repos}</Text>
                <Text style={styles.textInformation}>Numero de seguidores: {this.props.route.params.followers}</Text>
                <Text style={styles.textInformation}>Numero de pessoas que segue: {this.props.route.params.following}</Text>
                <Text style={styles.textInformation}>Data de criação: {Moment(dt).format('d/MM/YYYY')}</Text>
                
                
                <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate("Home")}>
                <Text style={{ color: 'white', fontSize: 21, }}>Nova Consulta</Text>
                </TouchableOpacity>
                
                
            </View>
        );
    }

}

export default DataScreen;