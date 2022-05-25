<template>
    <div></div>
</template>

<script>
import { tableLogin } from '../store/api'
import { saveLocalStorage } from '@/store/service'
export default {
  data () {
    return {
      tableId: this.$route.params.table
    }
  },
  mounted () {
    this.login()
  },
  methods: {
    login () {
      tableLogin(this.tableId)
        .then(res => {
          console.log(res.data)
          saveLocalStorage('userData', JSON.stringify(res.data.data))
          saveLocalStorage('userDataVerify', res.data.data.verified_at ? 'true' : 'false')
          this.$router.push('/menu')
        })
    }
  }
}
</script>
