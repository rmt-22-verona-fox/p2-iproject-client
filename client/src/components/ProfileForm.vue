<script>
import { mapActions } from "pinia";
import { useDatingStore } from "@/stores/dating";
export default {
  data() {
    return {
      formProfile: {
        file: {},
        name: "",
        phoneNumber: "",
        age: "",
        gender: "",
        address: "",
        bio: "",
      },
      file: "",
    };
  },
  methods: {
    ...mapActions(useDatingStore, ["updateProfilePhoto", "updateProfile"]),
    photo() {
      this.file = this.$refs.myFiles.files[0];
    },
    async upload() {
      const formdata = new FormData();
      formdata.append("file", this.file);
       this.updateProfilePhoto(formdata);
      try {
        await this.updateProfile(this.formProfile);
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },
  },
};
</script>

<template>
  <div class="container rounded bg-white mt-5 mb-2 formprofile">
    <div class="p-3 py-5">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h4 class="text-center">Profile</h4>
      </div>

      <div class="row mt-3">
        <div class="col-md-12">
          <label class="labels">Name</label
          ><input
            type="text"
            class="form-control"
            placeholder="Name"
            v-model="formProfile.name"
          />
        </div>
        <div class="col-md-12">
          <label class="labels">Age</label
          ><input
            type="number"
            class="form-control"
            placeholder="Age"
            v-model="formProfile.age"
          />
        </div>
        <div class="col-md-12">
          <label class="labels">PhoneNumber</label
          ><input
            type="text"
            class="form-control"
            placeholder="enter phone number"
            v-model="formProfile.phoneNumber"
          />
        </div>
        <div class="col-md-12">
          <label class="labels">Address</label
          ><input
            type="text"
            class="form-control"
            placeholder="enter address"
            v-model="formProfile.address"
          />
        </div>
        <div class="col-md-12">
          <label class="labels">bio</label
          ><input
            type="text"
            class="form-control"
            placeholder="enter address"
            v-model="formProfile.bio"
          />
        </div>
        <div class="col-md-12 gender">
          <label class="labels">Select your gender</label><br />
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-lg example"
            v-model="formProfile.gender"
          >
            <option default hidden value="">Please select gender</option>
            <option value="female">Female</option>
            <option value="male">male</option>
          </select>
        </div>
        <div class="col-md-12 gender">
          <label class="labels">Upload Photo Profile</label><br />
          <input type="file" name="file" ref="myFiles" @change="photo" />
        </div>
      </div>
      <div class="mt-5 text-center">
        <button
          class="btn btn-primary profile-button"
          type="button"
          @click.prevent="upload"
        >
          Save Profile
        </button>
      </div>
    </div>
  </div>
</template>

<style>
@import "@/assets/profileForm/style.css";
</style>
