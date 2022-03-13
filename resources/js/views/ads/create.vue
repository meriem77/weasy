<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="9">
                    <v-card color="#F4F5FE" flat>
                        <v-card-title>
                            Dashboard
                            <v-card-subtitle>Create Ads</v-card-subtitle>
                            <v-spacer></v-spacer>
                            <v-text-field dense rounded style="margin-top: 20px" solo prepend-inner-icon="mdi-magnify"
                                          placeholder="Search"></v-text-field>
                        </v-card-title>
                    </v-card>
                    <v-card color="#F4F5FE" flat>
                        <v-card-title>
                            Add ads
                            <v-spacer/>
                            <v-btn text rounded depressed to="/ads">
                                <v-icon>mdi-arrow-left</v-icon>
                                Back
                            </v-btn>
                        </v-card-title>
                        <form @submit.prevent="createAds">
                            <v-card-text>
                                <v-row>
                                    <v-col class="mt-4">
                                        <v-text-field v-model="form.link" label="Link *" dense
                                                      :error-messages="errors.link"></v-text-field>
                                    </v-col>
                                    <v-col class="mb-8">
<!--                                        <v-file-input ref="picture" append-icon="mdi-image" counter-->
<!--                                                      :error-messages="errors.images"-->
<!--                                                      dense-->
<!--                                                      multiple-->
<!--                                                      show-size-->
<!--                                                      label="Images *" @change="uploadFile">-->
<!--                                        </v-file-input>-->


                                        <v-file-input v-model="currFiles" ref="picture" append-icon="mdi-image" counter
                                                      small-chips
                                                      show-size
                                                      multiple
                                                      clearable
                                                      label="Images *"
                                                      @change="inputChanged">
                                            <template v-slot:selection="{ text, index, file }">
                                                <v-chip small text-color="white" color="#295671" close @click:close="remove(index)">
                                                    {{ text }}
                                                </v-chip>
                                            </template>
                                        </v-file-input>
                                        <div v-if="files.length">
                                            <h5>All images</h5>
                                            <v-chip v-for="f in files" class="mr-1">
                                                {{ f.name }}
                                            </v-chip>
                                        </div>


                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-select :items="['People','Market']" v-model="form.type"
                                                  label="Type *"  dense
                                                  :error-messages="errors.type"></v-select>
                                    </v-col>
                                    <v-col>
                                        <v-dialog ref="dateModal" v-model="dateModal"
                                                  persistent
                                                  width="290px">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                    dense
                                                    :error-messages="errors.expiration_date"
                                                    v-model="form.expiration_date" label="Date d'expiration *"
                                                    append-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="form.expiration_date" scrollable>
                                                <v-spacer></v-spacer>
                                                <v-btn text color="primary" @click="dateModal = false">
                                                    Fermer
                                                </v-btn>
                                                <v-btn text color="primary" @click="$refs.dateModal.save()">
                                                    OK
                                                </v-btn>
                                            </v-date-picker>
                                        </v-dialog>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer/>
                                <v-btn dark rounded :loading="btnLoading" type="submit">
                                    <v-icon left>mdi-content-save</v-icon>
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </form>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <right-sidebar/>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script >
import RightSidebar from "../../components/right-sidebar";

export default {
    components: {RightSidebar},
    data() {
        return {
            btnLoading: false,
            dateModal: false,
            form: {
                link : null,
                type : null,
                expiration_date : null,

            },
            errors: {},
            currFiles: [],
            files: [],
            images:[]
        }
    },
    methods: {





        remove (index) {
            this.files.splice(index, 1)
        },
        inputChanged () {
            // console.log(this.files)
            this.files = [
                ...this.currFiles,
                ...this.files,
            ]
        },


        uploadFile(file) {
            this.form.images = file
        },
        createAds() {
            let data = new FormData()

            for (let i = 0; i < this.files.length; i++){
                data.append(`image${i}`,this.files[i])
            }

            data.append('lengthImages',this.files.length)
            data.append('link',this.form.link)
            data.append('type',this.form.type)
            data.append('expiration_date',this.form.expiration_date)

            this.btnLoading = true


            axios.post('/ads', data).then(() => {

                this.$error = false
                this.$success = true
                this.$router.push('/ads')
            }).catch(err => {
                console.log(err)
                this.btnLoading = false
                this.$success = false
                this.$error = true
                this.errors = err.response.data.errors
            })

        },
    },
}
</script>

<style scoped>

</style>
