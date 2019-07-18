<template>
  <div class="idea">
    <body>
        <div class="container">
          <h1 class="title">Idea Machine</h1>
           <div class="columns">
          <div class="column is-three-fifths is-offset-one-fifth">
            <input class="input" type="text" v-model="idea.name" placeholder="Enter an Idea here">
          </div>
          <div class="column is-offset-one-second">
           <a @click="addIdea" class="button is-link" v-if="editMode == 'new'"> Create </a>
           <a @click="updateIdea" class="button is-primary" v-if="editMode == 'edit'"> Update </a>
          </div>
        </div>
        <div class="columns">
          <div class="column is-three-fifth is-offset-one-fifth">
           <div class="container">          
            <table class="table">
              <tbody>
                <tr v-for="idea in ideas">
                  <td width="86.3%">{{idea.name}}</td>
                  <td width="">
                    <span @click="editIdea(idea)" class="icon has-text-info"><font-awesome-icon icon="edit"></font-awesome-icon></span>
                  </td>
                  <td width="">
                    <span class="icon has-text-info"><font-awesome-icon icon="trash-alt" @click="deleteIdea(idea)"></font-awesome-icon></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>
        </div>
     </body>
  </div>
</template>

<script>
import {fb, db} from '../firebase';
export default {
  name: 'Ideas',
  props: {
    msg: String
  },
  data() {
      return {
        ideas: [],
        idea: {
          name: null,
          createTime: new Date()
        },
        editMode: 'new'
      }
  },
    firestore () {
      return {
        ideas: db.collection('ideas'),
      }
  },
   methods:{
    addIdea() {
          this.$firestore.ideas.add(this.idea)
          Toast.fire({
            type: 'success',
            title: 'Idea added successfully'
          })
          this.idea.name = ''
    },
    deleteIdea(doc) {
          Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {

         this.$firestore.ideas.doc(doc.id).delete()
          
          Toast.fire({
            type: 'success',
            title: 'Idea deleted successfully'
          })

        
        }
      })
    },
    editIdea(idea) {
          this.editMode = "edit";
          this.idea = idea;
    },
    updateIdea() {
          this.$firestore.ideas.doc(this.idea.id).update(this.idea)
          this.idea.name = '';
          this.editMode = "new";
          Toast.fire({
            type: 'success',
            title: 'Idea updated successfully'
          })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container .title {
   color: white !important;
}
.column {
   padding: 0.20rem !important;
}
.column.is-offset-one-second {
    margin-left: -171px !important;
}
</style>
