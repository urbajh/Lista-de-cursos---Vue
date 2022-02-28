
new Vue({
    el: '#app',
    
    data () {
      return {
        newTitleCourse: '',
        newHoursCourse: 0,
        courses: [],
        totalTime: 0,
      }
    },
    
    computed: {
        calculateTotalTime(){
            time = 0
            this.courses.forEach(element => {
                time+= Number(element.hours)
            });
            return time
        }
    },

    methods: {
        newCourse(){
            if(this.newTitleCourse && this.newHoursCourse){
                this.courses.push({title: this.newTitleCourse, hours: this.newHoursCourse})
            }else{
                alert('Indique un Título y Horas del curso')
            }
           
        }
    }
  })