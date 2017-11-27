// Vue.js v. 2.1.8
var string = new Vue({
  el: '#string',
  data: {
    arrays: [{
      name: 'sonya',
      sex: 'woman'
    }, {
      name: 'sindell',
      sex: 'woman'
    }, {
      name: 'kano',
      sex: 'man'
    }, {
      name: 'striker',
      sex: 'man'
    }, {
      name: 'subzero',
      sex: 'man'
    }]
  },
  computed: {
    sortedArray: function() {
      function compare(a, b) {
        if (a.name > b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      }

      return this.arrays.sort(compare);
    }
  }
})


<div id="string">
  <ul>
    <li v-for="array in sortedArray">{{ array.name }}</li>
  </ul>
</div>
