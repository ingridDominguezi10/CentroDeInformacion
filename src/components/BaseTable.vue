<template>
  <table class="table tablesorter" :class="tableClass">
    <thead :class="theadClasses">
    <tr>
      <slot name="columns">
        <th v-for="column in columns" :key="column">{{column}}</th>
        <th>Acciones</th>
      </slot>
    </tr>
    </thead>
    <tbody :class="tbodyClasses">
    <tr v-for="(item, index) in data" :key="index">
      <slot :row="item">
        <td v-for="(column, index) in columns"
            :key="index"
           >
          {{itemValue(item, column)}}
        </td>
        <td>
          <base-button icon round class="btn-google" v-tooltip="'Ver Detalles'">
            <i class="fa fa-eye"></i>
          </base-button>&nbsp;
          <base-button icon round class="btn-google" v-tooltip="'Eliminar'">
            <i class="fa fa-trash"></i>
          </base-button>
        </td>
      </slot>
    </tr>
    </tbody>
  </table>
</template>
<script>
import Vue from 'vue'
import VTooltip from 'v-tooltip'
Vue.use(VTooltip)

  export default {
    name: 'base-table',
    props: {
      columns: {
        type: Array,
        default: () => [],
        description: "Table columns"
      },
      data: {
        type: Array,
        default: () => [],
        description: "Table data"
      },
      type: {
        type: String, // striped | hover
        default: "",
        description: "Whether table is striped or hover type"
      },
      theadClasses: {
        type: String,
        default: '',
        description: "<thead> css classes"
      },
      tbodyClasses: {
        type: String,
        default: '',
        description: "<tbody> css classes"
      }
    },
    computed: {
      tableClass() {
        return this.type && `table-${this.type}`;
      },
      mounted: function() {
        $(document).ready(function() {
          $('[data-toggle="tooltip"]').tooltip()
        });
      }
    },
    methods: {
      hasValue(item, column) {
        return item[column.toLowerCase()] !== "undefined";
      },
      itemValue(item, column) {
        return item[column.toLowerCase()];
      }
    }
  };
</script>
<style>
</style>
