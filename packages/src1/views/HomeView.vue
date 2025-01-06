<template>
  <div class="home">
    <div>
      src1
    </div>
    {{ info }}
  </div>

</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'HomeView',
  components: {

  },
  data() {
    return {
      info: '',
    }
  },
  created() {
    console.table({ a: { host: 1, dic: 2 }, b: { host: 1, dic: 2 }, c: { host: 1, dic: 2, host3: 123 } });

    axios.get('api/users').then(response => {
      console.log('用户列表:', response.data);
      this.info = response.data;
    })
      .catch(error => {
        console.error('请求出错:', error);
      });
  }
}
</script>
