// ProfeForm.vue

<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Agrega un profesor</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addProfe">
                    <div class="form-group">
                        <label>Nombre:</label>
                        <input type="text" class="form-control" v-model="newProfe.nombre"/>
                    </div>
                    <div class="form-group">
                        <label>Apellido:</label>
                        <input type="text" class="form-control" v-model="newProfe.apellido"/>
                    </div>
                    <div class="form-group">
                        <label>Ingreso:</label>
                        <input type="text" class="form-control" v-model="newProfe.ingreso"/>
                    </div>
                    <div class="form-group">
                        <label>Turno:</label><br>
                        <input type="radio" name="sched" value="Diurno"  v-model="newProfe.turno">Diurno<br>
                        <input type="radio" name="sched" value="Nocturno" v-model="newProfe.turno">Nocturno<br>
                        <input type="radio" name="sched" value="Completo" v-model="newProfe.turno">Completo
                    </div>
                    <div class="form-group">
                        <label>e-mail:</label>
                        <input type="text" class="form-control" v-model="newProfe.email"/>
                    </div>
                     <div class="form-group">
                        <label>Whatsapp:</label>
                        <input type="text" class="form-control" v-model="newProfe.whatsapp"/>
                    </div>
                    <div class="form-group">
                        <label>Materia:</label>
                        <input type="text" class="form-control" v-model="newProfe.materia"/>
                    </div>
                    <div class="form-group">
                        <label>Reseña:</label>
                        <input type="text" class="form-control" v-model="newProfe.profile"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Agregar"/>
                    </div>
                </form>
            </div>
        </div>
    
      <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Listado de profesores</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Ingreso</th>
              <th>Materia</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
             <tr v-for="prof in profes" :key="prof.id">
                <td>{{prof.nombre}}</td>
                <td>{{prof.apellido}}</td>
                <td>{{prof.ingreso}}</td>
                <td>{{prof.materia}}</td>
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
  name: 'ProfeForm',
  firebase: {
    profes: db.ref('profes')
  },
  data () {
    return {
      newProfe: {
          nombre: '',
          apellido: '',
          ingreso: '',
          turno: '',
          email: '@uip.edu.pa',
          whatsapp: '',
          materia: '',
          profile: ''
      }
    }
  },
  methods: {
      addProfe() {
        this.$firebaseRefs.profes.push({
            nombre: this.newProfe.nombre,
            apellido: this.newProfe.apellido,
            ingreso: this.newProfe.ingreso,
            turno: this.newProfe.turno,
            email: this.newProfe.email,
            whatsapp: this.newProfe.whatsapp,
            materia: this.newProfe.materia,
            profile: this.newProfe.profile
        })
        this.newProfe.nombre = '';
        this.newProfe.apellido = '';
        this.newProfe.ingreso = '';
        this.newProfe.turno = '';
        this.newProfe.email = '';
        this.newProfe.whatsapp = '';
        this.newProfe.materia = '';
        this.newProfe.profile = '';
        alert("Exitosamente agregado")
      }
    }
}
</script>