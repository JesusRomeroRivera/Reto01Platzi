new Vue({
    el: '#app',
    data () {
        return {
            courses: [],
            title: '',
            hours: null,
        }
    },

    computed: {
        countTotalHours(){
            let count = 0
            for (let i=0; i<this.courses.length; i++) {
                count += parseInt(this.courses[i].hours)
            }
            return count
        }
    },

    watch: {
        
    },

    methods: {
       addCourse(){
           let newCourse = {title: this.title, hours:this.hours}
           this.courses.push(newCourse)
           this.title = ''
           this.time = null
       }
    }
  })