<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="9">
                    <v-card color="#F4F5FE" flat>
                        <v-card-title>
                            Dashboard
                            <v-card-subtitle>Partners mamager</v-card-subtitle>
                            <v-spacer></v-spacer>
                            <v-text-field dense rounded style="margin-top: 20px" solo prepend-inner-icon="mdi-magnify"
                                          placeholder="Search"></v-text-field>
                        </v-card-title>
                    </v-card>
                    <v-card color="#F4F5FE" flat>
                        <v-card-title>
                            Add partner
                            <v-spacer/>
                            <v-btn text rounded depressed to="/partners">
                                <v-icon>mdi-arrow-left</v-icon>
                                Back
                            </v-btn>
                        </v-card-title>
                        <form @submit.prevent="createPartner">
                            <v-card-text>

                                <v-row>
                                    <v-col>
                                        <v-text-field v-model="form.first_name" label="First name *" dense
                                                      :error-messages="errors.first_name"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field v-model="form.last_name" label="Last name *" dense
                                                      :error-messages="errors.last_name"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field v-model="form.email" label="Email *" dense
                                                      :error-messages="errors.email"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field v-model="form.wilaya" label="Wilaya *" dense
                                                      :error-messages="errors.wilaya"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field v-model="form.phone" label="Phone *" dense
                                                      :error-messages="errors.phone"></v-text-field>
                                    </v-col>

                                    <v-col>
                                        <v-text-field v-model="form.address" label="Address *" dense
                                                      :error-messages="errors.address"></v-text-field>
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

<script>
import RightSidebar from "../../components/right-sidebar";

export default {
    components: {RightSidebar},
    data() {
        return {
            btnLoading: false,
            form: {},
            errors: {},
        }
    },
    methods: {
        createPartner() {
            this.btnLoading = true
            axios.post('/partners', this.form).then(() => {
                this.$error = false
                this.$success = true
                this.$router.push('/partners')
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
