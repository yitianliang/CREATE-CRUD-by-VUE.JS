Vue.directive('focus',{
    inserted:function (el){
        el.focus();
    },
})

const ToDo = new Vue({
el: "#app",
data:{
    id:0,
    content: '',
    changedContent:'',
    keyword:'',
    list:[
        {id:1,content:'塔伦米尔'},
        {id:2,content:'暴风城'},
    ],
},
created() {
    this.loadComment();
    this.id = this.list.length;
},
methods:{
    loadComment(){
        var comment = JSON.parse(localStorage.getItem('apps') || '[]');
        this.list = comment;
        },

    //adding function 
    add(){
        this.id = this.list.length != 0 ? this.id: 0;
        this.id ++;

        if (this.content === ''){
            alert('content box cannot be null')}
        else{
            var content = {id:this.id,content:this.content};
            this.list.unshift(content);
            localStorage.setItem('apps',JSON.stringify(this.list));
            this.content= '';
        }
    },

    //delect function
    delect(id){
        this.list.splice(id,1);
        localStorage.setItem('apps',JSON.stringify(this.list));
    },

    //search function 
    search(keyword){
        const newList = [];
            this.list.forEach(items => {
                if (items.content.indexOf(keyword) != -1 || items.id ==keyword){
                    newList.push(items);
                }
            });
            return newList;
    },

    //edit function
    edit(index){
        const prop = prompt('change to: ');
        this.list[index].content = prop;
        if (prop !=null && prop != ''){
            this.list[index].content = prop;
            localStorage.setItem('apps',JSON.stringify(this.list));
        }
    }        

}
})