
function run() {
    new Vue({
        el: '#adminpanel',

        data: {
            seen: true,
            usersService: null,
            nume_client: '',
            selectedFile: null,
            image: '',
            imageBytes: '',
            pizza_pic: '',
            cli: [],
            cli_serv: [],
            nume_pizza: '',
            detalii: '',
            pret: '',
            produse: [],
            viewhtml:false,
            modificarii:'',
            collor:"black",
           


        },
        created: function () {
            this.usersService = users();
            axios.get('http://localhost:3000/checkadmin').then(response => {
              
              this.viewhtml=response.data
              if(!response.data)
                window.open("http://localhost:4200/index.html","_self")

            });
            this.seen = this.$cookies.get("tokken") == 1 ? true : false
            axios.get('http://localhost:3000/clienti_admin').then(response => {
                (this.cli_serv = response.data);
                for (var i = 0; i < this.cli_serv.length; i++) {
                    if(this.cli_serv[i].admin){
                      this.cli.push({ prenume: this.cli_serv[i].prenume, nume: this.cli_serv[i].nume_familie, nr_tel: this.cli_serv[i].nr_tel,collor:"green",id:this.cli_serv[i]._id,admin:this.cli_serv[i].admin})
                    }
                    else{
                      this.cli.push({ prenume: this.cli_serv[i].prenume, nume: this.cli_serv[i].nume_familie, nr_tel: this.cli_serv[i].nr_tel,collor:"black",id:this.cli_serv[i]._id,admin:this.cli_serv[i].admin})
                   
                    }
                    
                  
                }
                console.log(this.cli)
            });

            this.usersService.get().then(response => {{this.produse = response.data ;}});

        },

        methods: {
          bar:function(message){
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
            this.modificarii=message
          },

            onFileSelected(event) {
                const reader = new FileReader();
                this.selectedFile = event.target.files[0]
                reader.onloadend = () => {

                var strImage = reader.result.replace(/^data:image\/[a-z]+;base64,/, "");
                this.pizza_pic = strImage

                }
                reader.readAsDataURL(this.selectedFile);
            },

            
            modify: function (index) {    
                var index_produs = this.produse[index]._id
                var nume = this.produse[index].nume
                axios.put('http://localhost:3000/prod_admin/' + index_produs,{pret:this.produse[index].pret}).then(res => {
                  this.bar("Produlul "+nume+" a fost modificat cu "+res.data+" pret nou "+this.produse[index].pret)
                    });
            },
            save_btn: function () {
                var fd = new FormData();
                if (this.selectedFile != null&&this.selectedFile.name != null  ) {
                    fd.append('nume_pizza', this.nume_pizza)
                    fd.append('detalii', this.detalii)
                    fd.append('pret', this.pret)
                    fd.append('image', this.selectedFile, this.selectedFile.name)
                    axios.post('http://localhost:3000/prod_admin', fd, { headers: { 'Content-Type': 'multipart/form-data' } }).then(res => {
                      this.bar("Produlul "+this.nume_pizza+" a fost adaugat cu "+res.data.status+"")
                      this.produse.push({nume:this.nume_pizza,pret:this.pret,detalii:this.detalii,cantitate:1,img:{img:this.pizza_pic},_id:res.data.data.insertedId})
                    })
                   
                   console.log(this.produse)
                }
            },

            logout_btn: function () {//this.usersService.logout();
                axios.post('http://localhost:3000/logout').then(res => {       
                });
                localStorage.removeItem("client_ID");
                localStorage.removeItem("client_name");
                this.$cookies.set("tokken", 0, "0s");
                location.reload();
            //    window.open("/index.html", "_self");


            },

            dell: function (index) {
              
                var index_produs = this.produse[index]._id
                this.bar("Produlul "+this.produse[index].nume+" a fost sters cu succes")
                axios.delete('http://localhost:3000/prod_admin/' + index_produs).then(res => {});

                this.$delete(this.produse, index)
            },
            dell_client: function (index) {
              
              if(confirm('are you sure?')){
              var index_client = this.cli[index].id
              console.log(index_client)
              if(this.cli[index].admin){
                this.bar("Aceasta operatiune nu se poate realiza")
                console.log("ad")
              }
              else{
                this.bar("Clientul "+this.cli[index].nume+" "+this.cli[index].prenume+" a fost sters cu succes")
                this.$delete(this.cli, index)
                axios.delete('http://localhost:3000/clienti_admin/' + index_client).then(res => {});
              }
            }
            else{
              console.log("no")
            }
            //  axios.delete('http://localhost:3000/prod_admin/' + index_produs).then(res => {});

          //    this.$delete(this.produse, index)
          }




        }
    });
}

document.addEventListener('DOMContentLoaded', () => {

    run();
});
