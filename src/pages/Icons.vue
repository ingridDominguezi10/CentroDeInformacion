<template>
  <!-- template to Casa de Paz-->
  <div>
    Listado de Casas de Paz
    <div class="row">
      <div class="col-12">
        <card :title="table1.title">
          <div class="table-responsive">
            <base-table :data="table1.data"
                        :columns="table1.columns"
                        thead-classes="text-primary">
            </base-table>
          </div>
        </card>
      </div>
    </div>

    <base-button slot="footer" type="warning" fill>Crear Nuevo</base-button>
  </div>


</template>
<script>
import { BaseTable } from "@/components";
import { firebase } from "../firebase";

export default {
  components: {
    BaseTable
  },
  data: () => ({
    table1:[]
  }),
  mounted: function() {
    this.loadCDP();
  },
  methods: {
    loadCDP: function(){
      firebase
        .firestore()
        .collection("CasaDePaz")
        .get()
        .then(el => {
          var tableColumns = ["No.","Lider", "Anfitrión","Mentor", "Anciano", "Red", "Ubicación"];
          var tableData = [];
          var cont=1;
          el.forEach(doc => {
            console.log(doc.id);
            var elem = doc.data();
            tableData.push({
              'no.':cont,
              'lider': elem.lider,
              'anfitrión':elem.anfitrion,
              'guerrero intercesor':elem.guerreroIntercesor,
              'maestro de niños':elem.maestro,
              'mentor':elem.mentor,
              'anciano':elem.anciano,
              'red':elem.red,
              'ubicación':elem.ubicacion,
              'id':doc.id,
              'collection':"CasaDePaz"
            });
            cont=cont+1;
          });
          console.log("Final ",tableData);

          //create the table
          this.table1={
            title: "Detalles de Casa de Paz",
            columns: [...tableColumns],
            data: [...tableData]
          };
        });

    }
  }
};
</script>
<style>
</style>
