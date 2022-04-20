<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      input: {
        symptomp1: "",
        symptomp2: "",
        symptomp3: "",
      },
    };
  },
  computed: {
    ...mapState(useCounterStore, ["ailments"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["getAilments"]),
    async formHandler(input) {
      console.log(input);
      try {
        await this.getAilments(input);
        console.log(this.ailments, "<<<<<< respppp");
        console.log(this.ailments.data[0], "<<<<<< uyyy");
      } catch (err) {
        console.log(err);
      }
    },
    showAlert() {
      // Use sweetalert2
      this.$swal("Hello Vue world!!!");
    },
    appoint() {
      console.log("appoint");
      this.$router.push("/appoint");
    },
  },
};
</script>
<template>
  <div id="appointment" class="appointment-main">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-box">
            <h2>Health Diagnose</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <div class="well-block">
            <div class="well-title">
              <h2>Please describe your symptomps</h2>
            </div>
            <form @submit.prevent="formHandler(input)">
              <!-- Form start -->
              <div class="row">
                <!-- Text input-->
                <!-- Select Basic -->
                <!-- Select Basic -->
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="control-label" for="appointmentfor"
                      >Symptomp 1</label
                    >
                    <select
                      v-model="input.symptomp1"
                      id="brow"
                      class="form-control"
                    >
                      <option selected value></option>
                      <option value="175">Chills</option>
                      <option value="15">Cough</option>
                      <option value="207">Dizziness</option>
                      <option value="244">Drooping eyelid</option>
                      <option value="11">Fever</option>
                      <option value="33">Eye redness</option>
                      <option value="45">Heartburn</option>
                      <option value="73">Itching eyes</option>
                      <option value="44">Nausea</option>
                      <option value="12">Pain in the limbs</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="control-label" for="appointmentfor"
                      >Symptomp 2</label
                    >
                    <select
                      v-model="input.symptomp2"
                      id="brow"
                      class="form-control"
                    >
                      <option selected value></option>
                      <option v-if="input.symptomp1 !== '175'" value="175">
                        Chills
                      </option>
                      <option v-if="input.symptomp1 !== '15'" value="15">
                        Cough
                      </option>
                      <option v-if="input.symptomp1 !== '207'" value="207">
                        Dizziness
                      </option>
                      <option v-if="input.symptomp1 !== '244'" value="244">
                        Drooping eyelid
                      </option>
                      <option v-if="input.symptomp1 !== '11'" value="11">
                        Fever
                      </option>
                      <option v-if="input.symptomp1 !== '33'" value="33">
                        Eye redness
                      </option>
                      <option v-if="input.symptomp1 !== '45'" value="45">
                        Heartburn
                      </option>
                      <option v-if="input.symptomp1 !== '73'" value="73">
                        Itching eyes
                      </option>
                      <option v-if="input.symptomp1 !== '44'" value="44">
                        Nausea
                      </option>
                      <option v-if="input.symptomp1 !== '12'" value="12">
                        Pain in the limbs
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="control-label" for="appointmentfor"
                      >Symptomp 3</label
                    >
                    <select
                      v-model="input.symptomp3"
                      id="brow"
                      class="form-control"
                    >
                      <option selected value></option>
                      <option
                        v-if="
                          input.symptomp1 !== '175' && input.symptomp2 !== '175'
                        "
                        value="175"
                      >
                        Chills
                      </option>
                      <option
                        v-if="
                          input.symptomp1 !== '15' || input.symptomp2 !== '15'
                        "
                        value="15"
                      >
                        Cough
                      </option>
                      <option
                        v-if="
                          input.symptomp1 !== '207' || input.symptomp2 !== '207'
                        "
                        value="207"
                      >
                        Dizziness
                      </option>
                      <option
                        v-if="
                          input.symptomp1 !== '244' || input.symptomp2 !== '244'
                        "
                        value="244"
                      >
                        Drooping eyelid
                      </option>
                      <option
                        v-if="
                          input.symptomp1 !== '11' || input.symptomp2 !== '11'
                        "
                        value="11"
                      >
                        Fever
                      </option>
                      <option
                        v-if="
                          input.symptomp1 !== '33' || input.symptomp2 !== '33'
                        "
                        value="33"
                      >
                        Eye redness
                      </option>
                      <option
                        v-if="
                          input.symptomp1 !== '45' || input.symptomp2 !== '45'
                        "
                        value="45"
                      >
                        Heartburn
                      </option>
                      <option
                        v-if="
                          input.symptomp1 !== '73' || input.symptomp2 !== '73'
                        "
                        value="73"
                      >
                        Itching eyes
                      </option>
                      <option
                        v-if="
                          input.symptomp1 !== '44' || input.symptomp2 !== '44'
                        "
                        value="44"
                      >
                        Nausea
                      </option>
                      <option
                        v-if="
                          input.symptomp1 !== '12' || input.symptomp2 !== '12'
                        "
                        value="12"
                      >
                        Pain in the limbs
                      </option>
                    </select>
                  </div>
                </div>
                <!-- Button -->
                <div class="col-md-12">
                  <div class="form-group">
                    <button
                      id="singlebutton"
                      name="singlebutton"
                      class="new-btn-d br-2"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <!-- form end -->
            <button
              @click="appoint()"
              v-if="ailments.data"
              class="btn btn-success"
            >
              Appoint now
            </button>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="well-block">
            <div class="well-title">
              <h2>Your Result</h2>
            </div>
            <div class="feature-block">
              <div class="feature feature-blurb-text">
                <ul id="example-1">
                  <li v-for="(element, index) in ailments.data" :key="index">
                    <h2>
                      {{ index + 1 }}. Name: {{ element.Issue.Name }} /
                      {{ element.Issue.ProfName }}
                    </h2>
                    <h4>IcdName: {{ element.Issue.IcdName }}</h4>
                    <h4>
                      Recommended consultation:
                      <li
                        v-for="(x, index) in element.Specialisation"
                        :key="index"
                      >
                        {{ x.Name }}
                      </li>
                    </h4>
                  </li>
                </ul>
                <h4 class="feature-title">
                  <!-- {{ ailments.data[0].Issue.Name }} /
                  {{ ailments.data[0].Issue.ProfName }} -->
                </h4>
                <div class="feature-content">
                  <p>
                    <!-- {{ ailments.data[0].Issue.IcdName }} -->
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
