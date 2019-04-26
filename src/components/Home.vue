//Home.vue
<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Profedex</h3>
            </div>
            <div class="card-body">
            </div>
        </div>
    
      <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Listado de profesores</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped" onclick="javascript:alert('Disparador de evento. Debería desplegar la información del profesor.');">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Ingreso</th>
              <th>Materia</th>
              <th>e-mail</th>
              <th>Foto</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
             <tr v-for="prof in profes" :key="prof.uuid">
                <td>{{prof.nombre}}</td>
                <td>{{prof.apellido}}</td>
                <td>{{prof.ingreso}}</td>
                <td>{{prof.materia}}</td>
                <td>{{prof.email}}</td>
                <td><img :src="prof.foto" alt="firebase.google.com" style="width:75px;height:75px;"></td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
</template>

<script>
import { db } from '../config/db';

export default {
  name: 'Form',
  firebase: {
    profes: db.ref('profes'),
  },
  data () {
    return {
      newProfe: {
          nombre: '',
          apellido: '',
          foto: '',
          ingreso: '',
          turno: '',
          email: '@uip.edu.pa',
          whatsapp: '',
          materia: '',
          profile: '',
          uuid: ''
      }
    }
  },
  methods: {
      getProfe() {
      }
    }
}
</script>