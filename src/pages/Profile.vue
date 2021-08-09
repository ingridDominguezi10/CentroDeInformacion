<template>
  <div class="row">
    <div class="col-md-8">
      <edit-profile-form :model="model">
      </edit-profile-form>
    </div>
    <div class="col-md-4">
      <user-card :user="user"></user-card>
    </div>
  </div>
</template>
<script>
  import EditProfileForm from './Profile/EditProfileForm';
  import UserCard from './Profile/UserCard'
  export default {
    components: {
      EditProfileForm,
      UserCard
    },
    data() {
      return {
        /*this data has to be dynamic*/ 
        model: {
          company: 'Ministerio Internacional Rey de Reyes.',
          email: 'ingrid@email.com',
          username: 'ingrid123',
          firstName: 'Ingrid',
          lastName: 'D.M',
          password: 'ingrid123',
          about: ''
        },
        /*this data has to be dynamic*/ 
        user: {
          fullName: 'Ingrid D.M',
          title: 'Admin',
          description:'If you can imagine, you can code it !',
        }
      }
    }
  }
</script>
<style>
</style>
