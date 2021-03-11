import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';


const Cita = ({ cita, eliminarCita }) => {

  

    return (
        <View style={styles.cita} >
            <View>
                <Text style={styles.label} >Paciente:</Text>
                <Text style={styles.texto} >{cita.paciente}</Text>
            </View>
            <View>
                <Text style={styles.label} >Encargado:</Text>
                <Text style={styles.texto} >{cita.dueño}</Text>
            </View>
            <View>
                <Text style={styles.label} >Sintomas:</Text>
                <Text style={styles.texto} >{cita.sintomas}</Text>
            </View>

            <View  >
                <TouchableHighlight onPress={ () => eliminarCita(cita.id) } style={styles.botonEliminar} >
                    <Text style={styles.textBoton} >Eliminar &times;</Text>
                </TouchableHighlight>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#e5e9e9',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 15,
        marginHorizontal: '2.5%',
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },

    label: {
        fontWeight: 'bold',
        fontSize: 20,

    },

    texto: {
        fontSize: 18
    },

    botonEliminar:{
        backgroundColor: 'red',
        padding:8,
        borderRadius: 6,
        marginTop: 10
    },

    textBoton:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    }


})

export default Cita
