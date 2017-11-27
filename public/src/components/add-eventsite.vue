<template>
  <form>
  <div class="grid-container">
    <div class="grid-x grid-padding-x">
      <div class="medium-6 cell">
        <label>Service Id
          <input v-model="id" type="text" placeholder=".medium-6.cell">
        </label>
      </div>
      <div class="medium-6 cell">
        <label>Service Name
          <input v-model="name" type="text" placeholder=".medium-6.cell">
        </label>
      </div>
    </div>

    <div class="grid-x grid-padding-x">
      <div class="medium-6 cell">
        <label>Service Location
          <input v-model="location" type="text" placeholder=".medium-6.cell">
        </label>
      </div>
      <div class="medium-6 cell">
        <label>Service Classification
          <select v-model="classification">
            <option value="Transport">Transport</option>
						<option value="Shelter">Shelter</option>
						<option value="Catering">Catering</option>
						<option value="Transport">Transport</option>
						<option value="Entertainment">Entertainment</option>
						<option value="Fashion">Fashion</option>
						<option value="Reception">Reception</option>
						<option value="Security">Security</option>
						<option value="Photography">Photography</option>
						<option value="Videography">Videography</option>
          </select>
        </label>
      </div>
    </div>

    <div class="grid-x grid-padding-x">
      <div class="medium-12 cell">
        <label>Service Description
          <input v-model="description" type="text" placeholder=".medium-6.cell">
        </label>
      </div>
    </div>

    <div class="grid-x grid-padding-x">
      <div class="medium-2 cell"></div>
      <div class="medium-8 cell">
        <a v-on:click="addSvs" class="button small expanded" href="#">Add Service</a>
      </div>
      <div class="medium-2 cell"></div>
    </div>
    <h3>{{id}} - {{name}} - {{location}} - {{classification}}- {{description}}</h3>
  </div>
</form>
</template>

<script>

  import VueLocalStorage from 'vue-localstorage';

  export default {
    name: 'addservice',
    data(){
      return {
        id: '',
        name: '',
        location: '',
        classification: '',
        description: '',
        svs: []
      }
    },

    methods: {
        addSvs: function() {
          // Vue.use(VueLocalStorage);

          if (JSON.parse(localStorage.getItem('servicelist'))===null) {
            var b = [];
            localStorage.setItem('servicelist', JSON.stringify(b));
            var c = JSON.parse(localStorage.getItem('servicelist'));
            c.push({id: this.id, name: this.name, location:this.location, classification:this.classification, description: this.description });
            localStorage.setItem('servicelist', JSON.stringify(c));
          }else{
            var a = JSON.parse(localStorage.getItem('servicelist'));
            a.push({id: this.id, name: this.name, location:this.location, classification:this.classification, description: this.description });
            localStorage.setItem('servicelist', JSON.stringify(a));
          }


         }
    }
  }
</script>

<style>
</style>
