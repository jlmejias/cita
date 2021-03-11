import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View, Button, Alert } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
const shortid = require('shortid');


const Formulario = ({setcitas,citas,setmostrarFormulario}) => {

    const [paciente, setpaciente] = useState('')
    const [dueño, setdueño] = useState('')
    const [telefono, settelefono] = useState('')
    const [fecha, setfecha] = useState('')
    const [hora, sethora] = useState('')
    const [sintomas, setsintomas] = useState('')

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const confirmarFecha = (date) => {
        const opciones = { year: 'numeric', month: 'long', day: '2-digit' }
        setfecha(date.toLocaleDateString('es-ES', opciones));
        hideDatePicker();
    };

    // muestra o oculta el timepicker

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };



    const confirmarHora = (hora) => {
        const opciones = { hour: 'numeric', minute: '2-digit' }
        sethora(hora.toLocaleTimeString('en-US', opciones));
        hideTimePicker();
    };


    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Todos los campos son obligatorios',
            [{
                text:'OK'
            }]
        )
    }

    const guardarCita = () => {
        if (paciente.trim() === '' ||
            dueño.trim() === '' ||
            telefono.trim() === '' ||
            fecha.trim() === '' || 
            hora.trim() === '' ||
            sintomas.trim() === '')
             {
                mostrarAlerta()
            return
        }
       const cita = {paciente,dueño,telefono,fecha,hora,sintomas}
       cita.id = shortid.generate()

       const citasNuevo = [...citas,cita]
       setmostrarFormulario(false)
       setcitas(citasNuevo)
      
    }

    return (
        <>
            <View style={styles.formulario} >
                <View>
                    <Text style={styles.label} >Paciente:</Text>
                    <TextInput
                        onChangeText={(texto) => setpaciente(texto)}
                        style={styles.input}
                    />
                </View>
                <View>
                    <Text style={styles.label} >Dueño:</Text>
                    <TextInput
                        onChangeText={(texto) => setdueño(texto)}
                        style={styles.input}
                    />
                </View>
                <View>
                    <Text style={styles.label} >Telefono:</Text>
                    <TextInput
                        onChangeText={(texto) => settelefono(texto)}
                        keyboardType='numeric'
                        style={styles.input}
                    />
                </View>

                <View>
                    <View>
                        <Text style={styles.label} >Fecha:</Text>
                        {fecha ? <Text style={styles.label} >{fecha}</Text> : null}

                        <Button style={styles.boton} title="Fecha" onPress={showDatePicker} />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={confirmarFecha}
                            onCancel={hideTimePicker}
                            locale='es_ES'
                        />
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={styles.label} >Hora:</Text>
                        {hora ? <Text style={styles.label} >{hora}</Text> : null}
                        <Button title="Hora" onPress={showTimePicker} />
                        <DateTimePickerModal
                            isVisible={isTimePickerVisible}
                            mode="time"
                            onConfirm={confirmarHora}
                            onCancel={hideDatePicker}
                            locale='es_ES'
                        />
                    </View>
                </View>

                <View>
                    <Text style={styles.label} >Sintomas:</Text>
                    <TextInput
                        onChangeText={(texto) => setsintomas(texto)}
                        style={styles.input}
                    />
                </View>
                <View  >
                    <TouchableHighlight onPress={() => guardarCita()} style={styles.botonGuardar} >
                        <Text style={styles.textBoton} >Guardar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    formulario: {
        backgroundColor: '#e5e9e9',
        marginHorizontal: '2.5%',
        marginBottom: '5%',
        padding: 15,
        borderRadius: 5
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    input: {
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 3,
        padding: 10,
        fontSize: 20,
        marginBottom: 10
    },

    boton: {
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 6,
        marginTop: 10
    },

    botonGuardar: {
        backgroundColor: 'blue',
        padding: 8,
        borderRadius: 6,
        marginTop: 10
    },

    textBoton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }

})


export default Formulario
