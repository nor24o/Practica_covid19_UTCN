function run() {
    new Vue({
        el: '#details',
        data: {
            usersService: null,
            index: 'default',
            cos_final: [],
            cos: [],
            total: 0,
            cost_transport:"",
            nume_client:""
        },
        created: function () {
            
            this.check_tokken = this.$cookies.get("tokken") == 1 ? true : false
            this.seen = this.check_tokken
            this.usersService = users();
            if (this.check_tokken) {
            this.nume_client = localStorage.getItem("client_name") != null ? localStorage.getItem("client_name") : []

                this.usersService.getcos(localStorage.getItem("client_ID")).then(response => {
                    (this.cos_return = response.data);
                   console.log(this.cos_return[0])
                    for (var i = 0; i < this.cos_return.length; i++) {
                        for (var j = 0; j < this.cos_return[i].detalii.length; j++) {
                            this.cos.push({ 
                                nume: this.cos_return[i].detalii[j].nume, 
                                cantitate: this.cos_return[i].detalii[j].cantitate, 
                                pret: this.cos_return[i].detalii[j].pret,
                                detalii: this.cos_return[i].detalii[j].detalii,
                                img:this.cos_return[i].detalii[j].img})
                            this.total += parseInt(this.cos_return[i].detalii[j].pret);
                        }

                        //   this.cos.push(test[i])
                    }
                    if(this.total>=50)
                    this.cost_transport="Gratuit"
                    else{
                        this.cost_transport="5 RON"
                    }
                });

            }
        },

        methods: {
            logout_btn: function () {
                localStorage.removeItem("client_ID")
                localStorage.removeItem("client_name")
                this.$cookies.set("tokken", 0, "0s");
                window.open("/index.html", "_self")

            },
            checkout: function () {
                var id_client = localStorage.getItem("client_ID")
                var confirmare = true;
                console.log(id_client,confirmare)
                this.usersService.confirm_cos(id_client,confirmare).then(response => (console.log(response.data)));
      
                //    open.window("/finalizare.html",_self)
            },
            delete_from_list:function(index){
                if (this.total >= 50) {
                    this.cost_transport = "Gratuit";
                  }
                  else {
                    this.cost_transport = "5 RON";
                  }
          
                  this.total -= parseInt(this.cos[index].pret);
                  this.$delete(this.cos, index)
          
                  var id_client = localStorage.getItem("client_ID")
                  this.usersService.put(id_client, this.cos, this.total).then(response => (console.log(response.data)));
          
                 
            }

        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    run();
});
