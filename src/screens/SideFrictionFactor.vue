<template>
  <table class="table table-borderless">
    <thead class="table">
      <tr>
      <td id="sidefrictionfactor" class="sectionHeader">&nbsp;&nbsp; 4 &nbsp; Side Friction Factor <!-- Section 4 -->
      <span class="title-icon" @click=levelCollapse()>
        <span v-if="!levelDisplay">Expand All &nbsp;<i class="bi bi-caret-down-fill"></i></span> <!-- Expand all button -->
        <span v-if="levelDisplay">Collapse All &nbsp;<i class="bi bi-caret-up-fill"></i></span>  <!-- Collapse all button -->
      </span>
      </td>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td scope="row" style="border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; padding-bottom: 2%;">
      <Collapsible chapt="4.1" title="Side Friction Factor" :levelDisplay="levelDisplay"> <!-- Sub section 4.1 -->
      <!-- Display content of sub section 4.1 -->
      <!-- Table 10.7 according to search parameters -->
        <table id="speedTable">
          <tbody>
            <th style="text-align:center">Design Speed, V(km/h) </th>
            <th style="text-align:center">Side Friction Factor, F </th>
            <tr v-for="row in table" :key="row.id">
              <td style="text-align:center" v-bind:style="[row.des_speed === Number(this.designSpeed.substr(5,6)) ? 'font-weight: bold; color:black' : 'font-weight: normal; color:grey']"> {{ row.des_speed }} </td> <!-- Design speed selected -->
              <td style="text-align:center" v-bind:style="[row.des_speed === Number(this.designSpeed.substr(5,6)) ? 'font-weight: bold; color:black' : 'font-weight: normal; color:grey']"> {{ row.SFF }} </td> <!-- Corresponding Side Friction Factor -->
            </tr>
          </tbody>
        </table>
        <!-- References for 4.1 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=208" target='_blank'>
            CDC Table 10.7 - (page 208) </a>
        </p>
      </Collapsible>
      </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
/** Collapsible to expand and collapse the sub-sections */
import Collapsible from '../components/Collapsible.vue';

export default {
  components: {
    Collapsible
  },
   data(){
    return{
      designSpeed: this.$parent.choice.designSpeed,
      table: [],  
      levelDisplay: false
    }
  },
  methods:{
    filltable(speed){
      var speednum = Number(speed.substr(5,6))
      if(speednum == 40){
        console.log(speed)
        this.table = [
          { des_speed :40, SFF :0.16},
          { des_speed:50, SFF :0.16},   
        ]
      } else if (speednum == 50) {
        console.log(speednum)
        this.table = [
          { des_speed :40, SFF :0.16},
          { des_speed:50, SFF :0.16}, 
          { des_speed: 60, SFF :0.15},  
        ]
      } else if (speednum == 60) {
        console.log(speednum)
        this.table = [
          { des_speed: 50, SFF :0.16},
          { des_speed: 60, SFF :0.15},   
          { des_speed :70, SFF :0.15},
        ]
      } else if (speednum == 70) {
        console.log(speednum)
        this.table = [
          { des_speed: 60, SFF :0.15},
          { des_speed :70, SFF :0.15},   
          { des_speed :80, SFF :0.14},   
        ]
      } else if (speednum == 80) {
        console.log(speed)
        this.table = [
          { des_speed :70, SFF :0.15},
          { des_speed :80, SFF :0.14},   
          { des_speed :90, SFF :0.13},
        ]
      } else {
        console.log(speednum)
        this.table = [
          { des_speed :80, SFF :0.14},
          { des_speed :90, SFF :0.13},   
        ]
      }
    },
    /** to expand to collapse all in the Section */
    levelCollapse: function() {
      this.levelDisplay = !this.levelDisplay;
    },
  },
  created(){
    this.filltable(this.designSpeed)
  }
}
</script>

<style scoped>
table {
  width: 65vw;
  height: auto;
  margin-top: 5vh;
  border-radius: 15px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
}
.table thead td {
  background-color: #273B8C;
  color: white;
  height: 7.25vh;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  font-size:22px;
  vertical-align: middle;
}
tbody tr{
  background-color: #ffffff;
  text-align: center;
}
#speedTable {
  width: fit-content;
  box-shadow: none;
  margin-bottom: 1.5rem;
}
.sectionHeader {
  display: flex;
  width: auto;
  justify-content: space-between;
  align-items: center;
}
.title-icon {
  font-size:0.95rem;
  color:lavender;
  cursor:pointer;
  padding: 0 1rem 0 1.5rem;
  border-left: inset;
  border-color: lightblue
}
</style>
