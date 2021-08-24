<template>
  <!-- template to Casa de Paz-->
  <div>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title">
          <div class="table-responsive">
            <table class="table tablesorter" style="overflow: hide">
              <thead>
                <tr>
                  <slot name="columns">
                    <th v-for="column in table1.columns" :key="column">
                      {{ column }}
                    </th>
                    <th>Acciones</th>
                  </slot>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in table1.data" :key="index">
                  <slot :row="item">
                    <td
                      v-for="(column, index) in table1.columns"
                      :key="index"
                      class="new-padding"
                    >
                      {{ itemValue(item, column) }}
                    </td>
                    <td class="new-padding">
                      <base-button
                        icon
                        round
                        class="btn-google min-buttom"
                        v-tooltip="'Ver Detalles'"
                        @click="
                          createCDP = true;
                          cleanFields();
                          saveNew = false;
                          edit = true;
                          details(item), (editButton = true), (edit2 = false);
                        "
                      >
                        <i class="fa fa-eye"></i> </base-button
                      >&nbsp;
                      <base-button
                        icon
                        round
                        class="btn-google min-buttom"
                        v-tooltip="'Eliminar'"
                        @click="
                          deleteCDP = true;
                          cdpSelected = item;
                        "
                      >
                        <i class="fa fa-trash"></i>
                      </base-button>
                    </td>
                  </slot>
                </tr>
              </tbody>
            </table>
          </div>
        </card>
      </div>
    </div>

    <fab
      :position="position"
      :bg-color="bgColor"
      :actions="fabActions"
      :icon-size="small"
      @Add="AddCDP"
      @Search="Search"
      style="right: 2vw !important"
    ></fab>

    <!--Create CDP Modal-->
    <modal :show.sync="createCDP" :centered="false" :modalClasses="classPassed">
      <template slot="header" v-if="saveNew">
        <h5 class="modal-title" id="exampleModalLabel">Crear Casa de Paz</h5>
      </template>
      <template slot="header" v-else>
        <h5 class="modal-title" id="exampleModalLabel">
          Detalles de Casa de Paz
        </h5>
      </template>
      <div>
        <div class="row">
          <div class="col-md-6 pr-md-1">
            <label for="idLider" style="margin-bottom: 0px">Lider</label>
            <input
              v-model="dataCDP.lider"
              placeholder="nombre del lider"
              :disabled="edit"
              id="idLider"
              name="idLider"
              class="form-control"
              style="margin-bottom: 8px"
            />
          </div>
          <div class="col-md-6 pl-md-1">
            <label for="idSubLider" style="margin-bottom: 0px">Sub Lider</label>
            <input
              v-model="dataCDP.subLider"
              placeholder="nombre del sub lider"
              :disabled="edit"
              id="idSubLider"
              name="idSubLider"
              class="form-control"
              style="margin-bottom: 8px"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 pr-md-1">
            <label for="idMentor" style="margin-bottom: 0px">Mentor</label>
            <input
              v-model="dataCDP.mentor"
              placeholder="nombre del mentor"
              :disabled="edit"
              id="idMentor"
              name="idMentor"
              class="form-control"
              style="margin-bottom: 8px"
            />
          </div>
          <div class="col-md-6 pl-md-1">
            <label for="idAnciano" style="margin-bottom: 0px">Anciano</label>
            <input
              v-model="dataCDP.anciano"
              placeholder="nombre del anciano"
              :disabled="edit"
              id="idAnciano"
              name="idAnciano"
              class="form-control"
              style="margin-bottom: 8px"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 pr-md-1">
            <label for="idAnfitrion" style="margin-bottom: 0px"
              >Anfitrión</label
            >
            <input
              v-model="dataCDP.anfitrion"
              placeholder="nombre del anfitrión"
              :disabled="edit"
              id="idAnfitrion"
              name="idAnfitrion"
              class="form-control"
              style="margin-bottom: 8px"
            />
          </div>
          <div class="col-md-6 pl-md-1">
            <label for="idMaestro" style="margin-bottom: 0px">Maestro</label>
            <input
              v-model="dataCDP.maestro"
              placeholder="nombre del maestro"
              :disabled="edit"
              id="idMaestro"
              name="idMaestro"
              class="form-control"
              style="margin-bottom: 8px"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 pr-md-1">
            <label for="idIntercesor" style="margin-bottom: 0px"
              >Guerrero Intercesor</label
            >
            <input
              v-model="dataCDP.intercesor"
              placeholder="nombre del guerrero intercesor"
              :disabled="edit"
              id="idIntercesor"
              name="idIntercesor"
              class="form-control"
              style="margin-bottom: 8px"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 pr-md-1">
            <label for="idUbicacion" style="margin-bottom: 0px"
              >Ubicación</label
            >
            <input
              v-model="dataCDP.ubicacion"
              placeholder="dirección de la casa de paz"
              :disabled="edit"
              id="idUbicacion"
              name="idUbicacion"
              class="form-control"
              style="margin-bottom: 8px"
            />
          </div>
          <div class="col-md-6 pl-md-1">
            <label for="redes" style="margin-bottom: 0px">Red:</label>
            <select
              id="redes"
              name="redes"
              type="button"
              class="btn btn-neutral form-control"
              style="
                border: rgba(29, 37, 59, 0.5) solid 1px;
                color: #222a42;
                margin-top: 0px;
              "
              v-model="dataCDP.red"
              :disabled="edit"
            >
              <option value="1">1 / Josue</option>
              <option value="2">2 / Portadores de G.</option>
              <option value="3">3 / Jeremias</option>
              <option value="4">4 / Gen. Vino Nuevo</option>
              <option value="5">5 / Daniel</option>
            </select>
          </div>
        </div>
      </div>
      <template slot="footer">
        <base-button type="danger" @click="createCDP = false" v-show="saveNew"
          >Cerrar</base-button
        >
        <base-button type="primary" @click="CreateCDP" v-show="saveNew"
          >Guardar Cambios</base-button
        >
        <base-button
          type="primary"
          @click="EditEnableCDP"
          v-show="editButton"
          :disabled="edit2"
          >Editar</base-button
        >
        <base-button
          type="primary"
          @click="EditCDP"
          v-show="editButton"
          :disabled="edit"
          >Guardar Cambios</base-button
        >
      </template>
    </modal>

    <!--Delete CDP Confirmation Modal-->
    <modal :show.sync="deleteCDP" :centered="false">
      <template slot="header">
        <h5 class="modal-title" id="deleteCDPLabel">Eliminar Casa de Paz</h5>
      </template>
      <div>¿Está seguro que quiere <b>Eliminar</b> la Casa de Paz?</div>
      <template slot="footer">
        <base-button type="danger" @click="deleteCDP = false"
          >Cerrar</base-button
        >
        <base-button type="primary" @click="confirmationDeleteCDP"
          >Eliminar</base-button
        >
      </template>
    </modal>

    <!-- Search Modal-->
    <modal :show.sync="search" :centered="false">
      <template slot="header">
        <h5 class="modal-title">Buscar por red</h5>
      </template>
      <div>
        <base-checkbox class="mb-3" v-model="checkboxes.red1" id="checkRed1">
            1 / Josue
        </base-checkbox>
        <base-checkbox class="mb-3" v-model="checkboxes.red2" id="checkRed2">
            2 / Portadores de G.
        </base-checkbox>
        <base-checkbox class="mb-3" v-model="checkboxes.red3" id="checkRed3">
            3 / Jeremias
        </base-checkbox>
        <base-checkbox class="mb-3" v-model="checkboxes.red4" id="checkRed4">
            4 / Gen. Vino Nuevo
        </base-checkbox>
        <base-checkbox class="mb-3" v-model="checkboxes.red5" id="checkRed5">
            5 / Daniel
        </base-checkbox>
      </div>
      <template slot="footer">
        <base-button type="danger" @click="search = false">Cerrar</base-button>
        <base-button type="primary" @click="searchConfirmation"
          >Buscar</base-button
        >
      </template>
    </modal>

    <notifications group="foo" />
  </div>
</template>
<script>
import { BaseTable } from "@/components";
import { Modal } from "@/components";
import { firebase } from "../firebase";
import Vue from "vue";
import fab from "vue-fab";
import { Select, Option } from "element-ui";
import Notifications from "vue-notification";
Vue.use(Notifications);
Vue.use(Select);
Vue.use(Option);

export default {
  components: {
    BaseTable,
    Modal,
    fab,
    [Select.name]: Select,
    [Option.name]: Option,
  },
  data: () => ({
    bgColor: "#ff6491",
    position: "bottom-right",
    small: "small",
    left: "left",
    fabActions: [
      {
        name: "Add",
        icon: "note_add",
      },
      {
        name: "Search",
        icon: "search",
      },
    ],
    table1: [],
    search: false,
    createCDP: false,
    deleteCDP: false,
    dataCDP: {
      type: Object,
      default: () => {
        return {};
      },
    },
    classPassed: "otherTop",
    saveNew: true,
    edit: false,
    edit2: false,
    editButton: false,
    cdpSelected: null,
    checkboxes: {
      red1: true,
      red2: true,
      red3: true,
      red4: true,
      red5: true
    },
    checkboxesBefore:[]
  }),
  mounted: function () {
    this.loadCDP();
  },
  methods: {
    loadCDP: function () {
      var redesArray = [];
      redesArray = this.checkboxesSelected();
      firebase
        .firestore()
        .collection("CasaDePaz")
        .where('red','in',redesArray)
        .get()
        .then((el) => {
          var tableColumns = [
            "No",
            "Lider",
            "Anfitrión",
            "Mentor",
            "Anciano",
            "Red",
            "Ubicación",
          ];
          var tableData = [];
          var cont = 1;
          el.forEach((doc) => {
            //console.log(doc.id);
            var elem = doc.data();
            tableData.push({
              no: cont,
              lider: elem.lider,
              subLider: elem.subLider,
              anfitrión: elem.anfitrion,
              intercesor: elem.guerreroIntercesor,
              maestro: elem.maestro,
              mentor: elem.mentor,
              anciano: elem.anciano,
              red: elem.red,
              ubicación: elem.ubicacion,
              id: doc.id,
              collection: "CasaDePaz",
            });
            cont = cont + 1;
          });
          //sort by name
          tableData.sort((a, b) =>
            a.lider > b.lider ? 1 : a.lider < b.lider ? -1 : 0
          );
          tableData.forEach((elem, index) => (tableData[index].no = index + 1));

          //create the table
          this.table1 = {
            title: "Detalles de Casa de Paz",
            columns: [...tableColumns],
            data: [...tableData],
          };
        });
    },
    CreateCDP: function () {
      var obj = this.dataCDP;

      var fieldsNotDefine = "";
      fieldsNotDefine = this.Validations();
      if (fieldsNotDefine.length == 0) {
        //create
        if (obj.subLider == undefined || obj.subLider.length == 0) {
          obj.subLider = "";
        }
        if (obj.maestro == undefined || obj.maestro.length == 0) {
          obj.maestro = "";
        }
        if (obj.intercesor == undefined || obj.intercesor.length == 0) {
          obj.intercesor = "";
        }
        firebase
          .firestore()
          .collection("CasaDePaz")
          .add({
            lider: obj.lider,
            subLider: obj.subLider,
            anfitrion: obj.anfitrion,
            mentor: obj.mentor,
            anciano: obj.anciano,
            guerreroIntercesor: obj.intercesor,
            maestro: obj.maestro,
            ubicacion: obj.ubicacion,
            red: parseInt(obj.red),
          })
          .then((el) => {
            Vue.notify({
              group: "foo",
              title: "Creada!",
              text: "La Casa de Paz se creó exitosamente.",
            });
            this.createCDP = false;
            this.cleanFields();
            this.loadCDP();
          })
          .catch(function (error) {
            Vue.notify({
              group: "foo",
              title: "Algo salió mal",
              text: "No se pudo agregar la CDP. Intenta de nuevo.",
              type: "error",
            });
          });
      } else {
        // the fields are not completed
        Vue.notify({
          group: "foo",
          title: "Importante!",
          text: "Debe llenar los campos " + fieldsNotDefine,
          type: "error",
        });
      }
    },
    cleanFields: function () {
      this.dataCDP = {
        type: Object,
        default: () => {
          return {};
        },
      };
    },
    itemValue(item, column) {
      return item[column.toLowerCase()];
    },
    details(item) {
      console.log(item);
      this.cdpSelected = item;
      this.dataCDP.lider = item.lider;
      this.dataCDP.subLider = item.subLider;
      this.dataCDP.mentor = item.mentor;
      this.dataCDP.anciano = item.anciano;
      this.dataCDP.anfitrion = item.anfitrión;
      this.dataCDP.maestro = item.maestro;
      this.dataCDP.intercesor = item.intercesor;
      this.dataCDP.ubicacion = item.ubicación;
      this.dataCDP.red = item.red;

      this.createCDP = true; //to see the modal
    },
    EditCDP: function () {
      var obj = this.dataCDP;

      var fieldsNotDefine = "";
      fieldsNotDefine = this.Validations();
      if (fieldsNotDefine.length == 0) {
        //edit
        if (obj.subLider == undefined || obj.subLider.length == 0) {
          obj.subLider = "";
        }
        if (obj.maestro == undefined || obj.maestro.length == 0) {
          obj.maestro = "";
        }
        if (obj.intercesor == undefined || obj.intercesor.length == 0) {
          obj.intercesor = "";
        }
        firebase
          .firestore()
          .collection("CasaDePaz")
          .doc(this.cdpSelected.id)
          .update({
            lider: obj.lider,
            subLider: obj.subLider,
            anfitrion: obj.anfitrion,
            mentor: obj.mentor,
            anciano: obj.anciano,
            guerreroIntercesor: obj.intercesor,
            maestro: obj.maestro,
            ubicacion: obj.ubicacion,
            red: parseInt(obj.red),
          })
          .then((el) => {
            Vue.notify({
              group: "foo",
              title: "Actualizada!",
              text: "La Casa de Paz se actualizó exitosamente.",
            });
            this.createCDP = false;
            this.cleanFields();
            this.loadCDP();
          })
          .catch(function (error) {
            Vue.notify({
              group: "foo",
              title: "Algo salió mal",
              text: "Los datos no se actualizarón. Intenta de nuevo.",
              type: "error",
            });
          });
      } else {
        // the fields are not completed
        Vue.notify({
          group: "foo",
          title: "Importante!",
          text: "Debe llenar los campos " + fieldsNotDefine,
          type: "error",
        });
      }
    },
    EditEnableCDP: function () {
      this.edit2 = true;
      this.edit = false;
    },
    Validations: function () {
      var obj = this.dataCDP;
      var fieldsNotDefine = "";

      if (obj.lider == undefined || obj.lider.length == 0) {
        fieldsNotDefine = "Lider, ";
      }
      if (obj.mentor == undefined || obj.mentor.length == 0) {
        fieldsNotDefine += "Mentor, ";
      }
      if (obj.anciano == undefined || obj.anciano.length == 0) {
        fieldsNotDefine += "Anciano, ";
      }
      if (obj.anfitrion == undefined || obj.anfitrion.length == 0) {
        fieldsNotDefine += "Anfitrión, ";
      }
      if (obj.ubicacion == undefined || obj.ubicacion.length == 0) {
        fieldsNotDefine += "Ubicación, ";
      }
      if (obj.red == undefined || obj.red.length == 0) {
        fieldsNotDefine += "Red.";
      }

      return fieldsNotDefine;
    },
    confirmationDeleteCDP: function () {
      firebase
        .firestore()
        .collection("CasaDePaz")
        .doc(this.cdpSelected.id)
        .delete()
        .then((error) => {
          Vue.notify({
            group: "foo",
            title: "Eliminada!",
            text: "La Casa de Paz se eliminó exitosamente.",
          });
          this.deleteCDP = false;
          this.loadCDP();
        })
        .catch((error) => {
          Vue.notify({
            group: "foo",
            title: "Algo salió mal",
            text: "No se pudo eliminar la Casa De Paz. Intenta de nuevo.",
            type: "error",
          });
        });
    },
    Search: function () {
      this.search = true;

      //item selected
      this.checkboxesBefore = this.checkboxesSelected();

    },
    AddCDP: function () {
      this.createCDP = true;
      this.cleanFields();
      this.saveNew = true;
      this.edit = false;
      this.editButton = false;
      this.edit2 = false;
    },
    searchConfirmation: function () {
      var redesArray = [];
      redesArray = this.checkboxesSelected();
      if(redesArray.length == 0){
        Vue.notify({
          group: "foo",
          title: "Algo salió mal",
          text: "Debe seleccionar al menos una de las opciones",
          type: "error",
        });

        if(this.checkboxesBefore.includes(1)){
          this.checkboxes.red1 = true;
        }
        if(this.checkboxesBefore.includes(2)){
          this.checkboxes.red2 = true;
        }
        if(this.checkboxesBefore.includes(3)){
          this.checkboxes.red3 = true;
        }
        if(this.checkboxesBefore.includes(4)){
          this.checkboxes.red4 = true;
        }
        if(this.checkboxesBefore.includes(5)){
          this.checkboxes.red5 = true;
        }

      }else{
        this.search = false;
        this.loadCDP();
      }
      
    },
    checkboxesSelected: function() {
      var redesArray = [];
      if(this.checkboxes.red1 == true){
        redesArray.push(1)
      }
      if(this.checkboxes.red2 == true){
        redesArray.push(2)
      }
      if(this.checkboxes.red3 == true){
        redesArray.push(3)
      }
      if(this.checkboxes.red4 == true){
        redesArray.push(4)
      }
      if(this.checkboxes.red5 == true){
        redesArray.push(5)
      }
      return redesArray;
    }
  },
};
</script>
<style>
.min-buttom {
  width: 30px !important;
  height: 30px !important;
  min-width: 25px !important;
  min-height: 25px !important;
}

.new-padding {
  padding: 7px 7px !important;
}
</style>
