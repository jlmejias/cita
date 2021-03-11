
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';



const App = () => {

  const [mostrarFormulario, setmostrarFormulario] = useState(false)

  const [citas, setcitas] = useState([])
  // { id: 1, paciente: 'oso', dueño: 'jose', sintomas: 'renco' },
  // { id: 2, paciente: 'pinta', dueño: 'mami', sintomas: 'jode mucho' },
  // { id: 3, paciente: 'boby', dueño: 'papi', sintomas: 'necio' },


  const eliminarCita = (id) => {
    setcitas(citas.filter(cita => (cita.id !== id)))
  }

  return (
    <ScrollView style={styles.contenedor} >


      {
        citas.length > 0 ? <Text style={styles.titulo} >Citas</Text> : <Text style={styles.titulo} >No hay citas</Text>
      }
      <View  >
        <TouchableHighlight onPress={() => setmostrarFormulario(!mostrarFormulario)} style={styles.botonGuardar} >
          <Text style={styles.textBoton} >Crear Cita</Text>
        </TouchableHighlight>
      </View>
      {mostrarFormulario ? <Formulario  setcitas={setcitas}  citas={citas}  setmostrarFormulario={setmostrarFormulario} />
        : null}


      {/* RenderItem se usa en lugar de .map esto para ayudar en el performace */}
      <FlatList
        data={citas}
        renderItem={({ item }) =>
          <Cita cita={item}
            eliminarCita={eliminarCita}
          />}
        keyExtractor={cita => cita.id.toString()}

      />
      {/* 
      {citas.map(cita => (
        <Text style={styles.titulo} >{cita.id}. {cita.paciente} </Text>
      ))} */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'rgb(45,65,207)',
    flex: 1  //para que estienda en todo su ancho disponible
  },
  titulo: {
    marginVertical: 20,
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
  },

  botonGuardar: {
    backgroundColor: 'blue',
    padding: 8,
  
    marginVertical: 10
  },

  textBoton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  }
})


export default App;
