<template>
  <div style="height:100vh; overflow: hidden; position:relative">
  <div class="header">
    <div class="center">
    <div class="pages"> <!-- Top row circle buttons for each page  -->
        <PageCircle num="1" v-bind:isActive="true"/>
        <PageCircle num="2" v-bind:isActive="false"/>
        <PageCircle num="3" v-bind:isActive="false"/>
        <PageCircle num="4" v-bind:isActive="false"/>
        <PageCircle num="5" v-bind:isActive="false"/>
    </div>
    <div class="question"> <!-- Main question of page -->
      <h5>Are you looking for a <u>specific section</u> or a <u>step-by-step</u> guide to road designing </h5>
    </div>
    </div> 
    <!-- Mascot and Road template for the page -->
    <img src="../assets/mascot.png" class="mascot"/>
    <img src="../assets/road.png" class="road"/>
  </div>
  <div class="options">
    <div class="button-group"> <!-- Options for the page (Step by step vs Specific page) -->
      <SearchParamButton text="Specific Section" v-bind:isActive="true" @click="this.updateChoice('roadDesign','Specific'); this.$router.push({name:'searchspecific'})"/>
      <SearchParamButton text="Step-by-step Guide" v-bind:isActive="true" @click="storeRoadDesign('Guide');"/>
    </div> <!-- Button to navigate backwards -->
    <button id="back" type="button" class="btn btn-outline-secondary" @click="$router.push('/')"><i class="bi bi-arrow-left"></i></button>
  </div>
  </div>
</template>

<script>
import SearchParamButton from '../components/SearchParamButton.vue'
import PageCircle from '../components/PageCircle.vue'

export default {
  name: 'search',
  components: {
    PageCircle,
    SearchParamButton
  },
  data() {
    return{
      choice:{
        role: "",
        roadDesign: "",
        roadClass: "",
        roadType: "",
        designSpeed: "",
        grad_curv_change:"",
        specific_param:"",
      }
    }
  },
methods:{
  /** Local storage to access the choice of user */
  openStorage(){
    return JSON.parse(localStorage.getItem('choice'))
  },
  /** Saves the choice of the user to local storage */
  saveStorage(form){
    localStorage.setItem('choice',JSON.stringify(form))
  },
  /** Updates the local storage of the User and adds to the analytics database */
  updateChoice(input,value){
    this.choice[input] = value

    let storedChoice = this.openStorage()
    if(!storedChoice) storedChoice = {}

    storedChoice[input] = value
    this.saveStorage(storedChoice)
  },
  /** Stores the user specified road design */
  storeRoadDesign(text){
    this.updateChoice('roadDesign',text);
    this.$router.push({name:'search2'})
  }
},
created(){
  const storedChoice = this.openStorage()
  if (storedChoice){
    this.choice = {
      ...this.choice,
      ...storedChoice
    }
  }
}
}
</script>

<style scoped>
#back {
  position:absolute;
  width:fit-content;
  height:fit-content;
  font-size: 1.5rem;
  top:85%;
  left:5%;
  box-shadow:none;
  border:none;
}
.button-group {
  display: flex;
  justify-content: space-around;
  width: 60%
}
.options {
  background-color: #FAFAFA;
  height: 55%;
  align-items: center;
  padding-top:5%;
  display: flex;
  justify-content: space-around;
}
.header {
  background-color: #E0E0E0;
  height: 45%;
}
.center {
  display:flex;
  align-items: center;
  flex-direction: column;
}
.road {
  height:19vh;
  width:102vw;
  transform: rotate(-2deg);
  position: absolute;
  top: 40%;
  left: -0.5%;
  z-index:1;
}
.mascot {
  height: 20vh;
  width: auto;
  position: absolute;
  top: 30%;
  left: 22.5%;
  z-index:2;
}
.question {
  background-color:white;
  height: fit-content;
  width:35%;
  padding: 1.25rem 2rem;
  border-radius:1.5rem
}
.pages {
    display: flex;
    margin: 3% 0
}
</style>
