<template>
  <table class="table table-borderless">
    <thead class="table">
      <tr>
      <td id="grade" class="sectionHeader">&nbsp;&nbsp; 2 &nbsp; Grade <!-- Section 2 -->
      <span class="title-icon" @click=levelCollapse()>
        <span v-if="!levelDisplay">Expand All &nbsp;<i class="bi bi-caret-down-fill"></i></span> <!-- Expand all button -->
        <span v-if="levelDisplay">Collapse All &nbsp;<i class="bi bi-caret-up-fill"></i></span> <!-- Collapse all button -->
      </span>
      </td>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td scope="row">
      <Collapsible chapt="2.1" title="Main Carriageway" :levelDisplay="levelDisplay"> <!-- Sub section 2.1 -->
      <!-- Display content of sub section 2.1 -->
        <p>The geometric design requirements of road shall be as shown in Table 10.9</p>
        <!-- Table 10.9 according to search parameters -->
        <table id="gradeTable">
          <tbody>
            <th style="text-align:center">Road Category </th>
            <th style="text-align:center">Maximum Grade (%), Desirable </th>
            <th style="text-align:center">Maximum Grade (%), Absolute </th>
            <tr v-for="row in table1" :key="row.id">
              <td style="text-align:center"> {{ row.roadcat }} </td> <!-- Road Cateogry selected -->
              <td style="text-align:center"> {{ row.MGD}} </td> <!-- Corresponding Maximum Grade Desirable -->
              <td style="text-align:center">  {{ row.MGA}} </td> <!--  Corresponding Maximum Grade Absolute -->
            </tr>
          </tbody>
        </table>

        <p><u>Notes:</u></p>
        <ol>
        <li> Minimum gradient for all roads is 0.4%.</li>
        <li> A road gradient of less than 0.4% may be used for widening of expressway.</li>
        <li> For tunnel, minimum road gradient of 0.2% may be used.</li>
        <li> For built-up area, a road gradient of less than 0.4% may be used to tie in with existing access.</li>
        </ol>
        <!-- References for 2.1 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=209" target="_blank">
          CDC 10.4.3.1.1 - Main Carriageway (page 209)</a>
        </p>
      </Collapsible>

      <Collapsible v-show="isEorS" chapt="2.2" title="Interchange Ramp / Loop and Slip Road" :levelDisplay="levelDisplay"> <!-- Sub section 2.2 -->
        <Table1010 class="tableImg"></Table1010><br> <!-- Table 10.10 -->
        <!-- References for 2.2 -->
        <p style="font-size: 16px;"> Referenced from:
        <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=210" target="_blank">
          CDC 10.4.3.1.2 - Interchange Ramp/Loop and Slip Road (page 210)</a>
        </p>
      </Collapsible>

      <Collapsible chapt="2.3" title="Critical Length of Grade" :levelDisplay="levelDisplay"> <!-- Sub section 2.3 -->
        <p>The length of grade shall be less than the critical values as shown in Table 10.11. Figure 10.7 illustrates the measurement of critical length of grade of a vertical curve.</p>
        <Table1011 class="tableImg"></Table1011> <!-- Table 10.11 -->
        <div class="img-container">
            <ZoomImage imgSrc="Figure10.7.png"/> <!-- Display zoomed image of CDC Figure -->
        </div>
        <!-- References for 2.3 -->
        <p style="font-size: 16px;"> Referenced from:
        <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=210" target="_blank">
          CDC 10.4.3.1.3 - Critical Length of Grade (page 210)</a>,
        <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=231" target="_blank">
          CDC Figure 10.7 (page 231)</a>
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
/** Import respective table images */
import Table1010 from '../components/table/table1010.vue';
import Table1011 from '../components/table/table10.11.vue';
/** ZoomImage to zoom onto the image */
import ZoomImage from '../components/ZoomImage.vue'

export default {
  components: {
    Collapsible,
    Table1010,
    Table1011,
    ZoomImage
  },
  data() {
    return {
      levelDisplay: false,
      table1:[],
      roadcat:this.$parent.choice.roadClass,
      isEorS: this.$parent.choice.roadType === 'slipRoad' ? true : this.$parent.choice.roadClass === 'Expressways' ?true : false  ,
    }
  },
  methods: {
    filltable(cat){
      var categ = String(cat)
      if(categ == 'Expressways'){
        console.log(categ)
        console.log("EorS:" + this.isEorS)
        this.table1 = [
          {roadcat:'1-Expressways' + categ,MGD : 4,MGA : 5},
        ]
      }else if(categ == 'Semi Expressway'){
        console.log(categ)
        console.log("EorS:" + this.isEorS)
        this.table1 = [
          {roadcat:'1A-Semi Expressway' + categ,MGD : 5,MGA : 6},
        ]
      }else if(categ == 'majorArterial'){
        console.log(categ)
        console.log("EorS:" + this.isEorS)
        this.table1 = [
          {roadcat:'2-Major Arterial',MGD : 5,MGA : 6},
        ]
      }else if(categ == 'minorArterial'){
        console.log(categ)
        this.table1 = [
          {roadcat:'3-Minor Arterial',MGD : 6,MGA : 8},
        ]
      }else if(categ == 'primaryAccess'){
        console.log(categ)
        this.table1 = [
          {roadcat:'4-Primary Access',MGD : 6,MGA : 8},
        ]
      }else{
        console.log(categ)
        this.table1 = [
          {roadcat:'5-Local Access',MGD : 6,MGA : 8},
        ]
      }
    },
    /** to expand to collapse all in the Section */
    levelCollapse: function() {
      this.levelDisplay = !this.levelDisplay;
    },
  },
  created(){
    this.filltable(this.roadcat)
    console.log("EorS:" + this.isEorS)
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
}
tbody tr:last-child td{ 
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px; 
  padding-bottom: 2%;
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
.tableImg {
  width:80%;
  box-shadow: none;
  margin-left:auto;
  margin-right:auto;
}
li {
  padding-left:0.5rem;
  margin: 10px 0
}
#gradeTable {
  width: fit-content;
  box-shadow: none;
  margin-bottom: 1.5rem;
}
</style>
