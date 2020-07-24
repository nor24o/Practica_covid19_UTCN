function run() {
    new Vue({
      el: '#index',
      data: {
        seen:'',
        nume_client:""
      
      },
      created: function () {
        this.nume_client = localStorage.getItem("client_name") != null ? localStorage.getItem("client_name") : []
        this.seen=this.$cookies.get("tokken")==1?true:false
      },
      methods: {
        

        logout_btn:function(){
          localStorage.removeItem("client_ID")
          localStorage.removeItem("client_name")
          this.$cookies.set("tokken", 0, "0s");
          window.open("/index.html", "_self")

          }, 
        }
  
    });
  }

  function fin() {
    new Vue({
      el: '#fin',
      data: {
        seen:'',
        noclient:true,
        usersService: null,
        produse:[],
        cos:[],
        nume:'',
        detalii:'',
        pret:''
        
      
      },
      created: function () {
        
        this.seen=this.$cookies.get("tokken")==1?true:false
        this.noclient=this.seen
      },
      methods: {
        

        logout_btn:function(){//this.usersService.logout();
            this.$cookies.set("tokken",0, "0s");
            
            localStorage.clear();
            window.location.reload();
          }, 
        }
  
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    run();
    fin();
  });
  