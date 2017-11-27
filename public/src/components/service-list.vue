<script>
export default {
  name: 'servicelist',
  dat: {
    a:1
  },
  computed:{
    services(){
      return this.$store.getters.services;
    }
  }
}
</script>
<template lang="html">
  <div>
  <div class="grid-container">
              <div class="grid-x grid-margin-x">
                <div class="cell small-12">

                  <hr>
                    <table width="100%" class="hover">
                      <thead>
                        <tr>
                          <th>Service Id</th>
                          <th>Service Name</th>
                          <th >Service Location</th>
                          <th >Service classification</th>
                          <th >Service description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="service in services">
                          <td>{{service.id}}</td>
                          <td>{{service.name}}</td>
                          <td>{{service.location}}</td>
                          <td>{{service.classification}}</td>
                          <td>{{service.description}}</td>
                        </tr>
                      </tbody>
                    </table>
                    <br>
                    <a class="button secondary small " >Sort With Name</a>
                </div>


              </div>
            </div>
  </div>
</template>


<style lang="css">
</style>
