<template>
  <table class="table table-borderless">
    <thead class="table">
      <tr>
      <td id="verticalalignment" class="sectionHeader">&nbsp;&nbsp; 15 &nbsp; Vertical Alignment
      <span class="title-icon" @click=levelCollapse()>
        <span v-if="!levelDisplay">Expand All &nbsp;<i class="bi bi-caret-down-fill"></i></span>
        <span v-if="levelDisplay">Collapse All &nbsp;<i class="bi bi-caret-up-fill"></i></span>
      </span>
      </td>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td scope="row">
      <!-- if no curvature change selected, we inform that no relevant information has to be shown -->   
      <p style="font-size:20px;text-align:center" v-show="!isCurved">--No relevant information since no gradient change or curvature change selected--</p>
      
      <!--Else, we display the following below-->
      <Collapsible v-show="isCurved" chapt="15.1" title="Types of Vertical Curve" :levelDisplay="levelDisplay">
      <!-- Display content of sub section 15.1 -->
        <p> A vertical curve shall be provided when there is a change in road gradient by using symmetrical simple parabolic curve.</p>
        <!-- References of sub section 15.1-->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=210" target='_blank'>
          CDC 10.4.3.2 - Types of Vertical Curve (page 210)</a>
        </p>

        <!-- Display content of sub-sub section 15.1.1 -->
        <p style="padding-top:3%"><b class="tab2a">15.1.1</b><b>Crest Curve</b></p>
        <p> The minimum length of a crest curve in metre shall be the greater of:</p>
        <ol type="a"><!-- Ordered List -->
        <li> 0.6 times of the design speed (in km/h); or </li>
        <li> Curve length needed to provide the minimum stopping sight distance (refer to Figure 10.8) </li>
        <li> The desirable curve length can be derived from the following formulae: </li>
        </ol>
        <div style="font-size:16px;margin-right:auto;margin-left:auto; width:50%;"> Crest Vertical Curve for Stopping Sight Distance</div>
        <div class="img-container2">
          <ZoomImage imgSrc="10.4.3.2.1.png"/> <!-- Display zoomed image of CDC Figure -->
        </div>
        <div class="img-container">
          <ZoomImage imgSrc="Figure10.8.png"/> <!-- Display zoomed image of CDC Figure -->
        </div>
        <!-- References of sub-sub section 15.1.1-->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=210" target='_blank'>
          CDC 10.4.3.2.1 - Crest Curve (page 210)</a>,
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=232" target='_blank'>
          CDC Figure 10.8 (page 232)</a>
        </p>

        <!-- Display content of sub-sub section 15.1.2 -->
        <p style="padding-top:3%"><b class="tab2a">15.1.2</b><b>Sag Curve</b></p>
        <p> The minimum length of a sag curve in metre shall be the greater of: </p>
        <ol type="a"><!-- Ordered List -->
        <li> 0.6 times of the design speed (in km/h); or </li>
        <li> Curve length needed to provide for riding comfort (refer to Figure 10.9); or </li>
        <li> Curve length needed to provide headlight sight distance (refer to Figure 10.10) </li>
        <li> The desirable curve length can be derived from the following formulae: </li>
        </ol>
        <div style="font-size:16px;margin-right:auto;margin-left:auto; width:50%;">Sag Curve for Headlight Sight Distance</div>
        <div class="img-container2">
          <ZoomImage imgSrc="10.4.3.2.2.png"/> <!-- Display zoomed image of CDC Figure -->
        </div> 
        <div class="img-container">
          <ZoomImage imgSrc="Figure10.9.png"/> <!-- Display zoomed image of CDC Figure -->
        </div>
        <div class="img-container">
          <ZoomImage imgSrc="Figure10.10.png"/> <!-- Display zoomed image of CDC Figure -->
        </div>
        <!-- References of sub-sub section 15.1.2-->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=211" target='_blank'>
          CDC 10.4.3.2.2 - Sag Curve (page 211)</a>,
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=233" target='_blank'>
          CDC Figure 10.9 (page 233)</a>,
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=234" target='_blank'>
          CDC Figure 10.10 (page 234)</a>
        </p>
      </Collapsible>
      
      <Collapsible v-show="isCurved" chapt="15.2" title="Critical Length of Grade" :levelDisplay="levelDisplay">
      <!-- Display content of sub section 15.2 -->
        <p>The length of grade shall be less than the critical values as shown in Table 10.11. 
          Figure 10.7 illustrates the measurement of critical length of grade of a vertical curve.</p>
        <Table1011 class="tableImg"></Table1011> <!-- Table 10.11 Coded version -->
        <div class="img-container">
          <ZoomImage imgSrc="Figure10.7.png"/> <!-- Display zoomed image of CDC Figure -->
        </div>
        <!-- References of sub section 15.2-->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=210" target='_blank'>
          CDC 10.4.3.1.3 - Critical Length of Grade (page 210)</a>,
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=231" target='_blank'>
          CDC Figure 10.7 (page 231)</a>
        </p>
      </Collapsible>
      <Collapsible v-show="isCurved" chapt="15.3" title="General Controls for Vertical Alignment" :levelDisplay="levelDisplay">
      <!-- Display content of sub section 15.3 -->
        <p>There are several general controls that shall be considered when designing the vertical alignment: </p>
        <ol type="a"><!-- Ordered List -->
        <li> A smooth grade line with gradual changes shall be used instead of a line with numerous breaks and short lengths of grades; </li>
        <li> Grade through intersection shall not exceed 3% to avoid adverse effect to turning movement and ensure effective surface drainage; </li>
        <li> A sag vertical curve or a flat section is desirable in advance of any channelization at an intersection and ramp take-off at an 
        interchange, in order to provide sufficient sight distance; and </li>
        <li> In providing sag vertical curves, one long vertical curve is more desirable and broken-back grade line shall be avoided. </li>
        </ol>
        <!-- References of sub section 15.3-->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=201" target='_blank'>
          CDC 10.4.1.2 - Vertical Alignment (page 201)</a>
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
import Table1011 from '../components/table/table10.11.vue';
/** ZoomImage to zoom onto the image */
import ZoomImage from '../components/ZoomImage.vue'

export default {
  components: {
    Collapsible,
    Table1011,
    ZoomImage
  },
  data() {
    return {
      levelDisplay: false,
      isCurved: this.$parent.choice.gradcurvchange === 'changeJunctionYes' ? true : false,
    }
  },
  methods: {
    /** to expand to collapse all in the Section */
    levelCollapse: function() {
      this.levelDisplay = !this.levelDisplay;
    },
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
</style>
