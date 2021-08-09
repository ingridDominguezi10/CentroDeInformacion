<template>
  <card>
    <h5 slot="header" class="title">Editar Perfil</h5>
    <div class="row">
      <div class="col-md-5 pr-md-1">
        <base-input label="Company (disabled)"
                  placeholder="Institución"
                  v-model="model.company"
                  disabled>
        </base-input>
      </div>
      <div class="col-md-3 px-md-1">
        <base-input label="Username"
                  placeholder="Nombre Usuario"
                  v-model="model.username">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Correo Electrónico"
                  type="email"
                  placeholder="name@email.com">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 pr-md-1">
        <base-input label="Nombre"
                  v-model="model.firstName"
                  placeholder="nombre">
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1">
        <base-input label="Apellido"
                  v-model="model.lastName"
                  placeholder="Apellido">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <base-input label="Contraseña"
                  v-model="model.password"
                  type="password">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <base-input>
          <label>Información Extra</label>
          <textarea rows="4" cols="80"
                    class="form-control"
                    placeholder="Puede colocar una descripción"
                    v-model="model.about">

              </textarea>
        </base-input>
      </div>
    </div>
    <base-button slot="footer" type="primary" fill>Save</base-button>
  </card>
</template>
<script>
  export default {
    props: {
      model: {
        type: Object,
        default: () => {
          return {};
        }
      }
    }
  }
</script>
<style>
</style>
