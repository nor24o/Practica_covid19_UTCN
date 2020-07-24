
function run() {

  new Vue({

    el: '#appload_menu',

    data: {
      usersService: null,
      cos: [],
      cos2: [],
      produse: [],
      nume: '',
      detalii: '',
      pret: '',
      cantitate: 1,
      cost_transport: "5 RON",
      total: 0,
      total_comanda: 0,
      cos_return: [],
      nume_client: "",
      modificarii: '',
      temp: [],


    },

    created: function () {
      this.check_tokken = this.$cookies.get("tokken") == 1 ? true : false
      this.seen = this.check_tokken
      this.usersService = users();
      this.nume_client = localStorage.getItem("client_name") != null ? localStorage.getItem("client_name") : []
      this.usersService.get().then(response => {
        {
          this.produse = response.data
          console.log(response.data);

        }
      }

      );

      if (this.check_tokken) {

        this.usersService.getcos(localStorage.getItem("client_ID")).then(response => {
          (this.cos_return = response.data);
          console.log(this.cos_return[0].detalii.cos[0].nume)
        //  console.log(response.data[0].detalii.cos)
            for (var j = 0; j < this.cos_return[0].detalii.cos.length; j++) {
              this.cos2.push({ nume: this.cos_return[0].detalii.cos[j].nume, qty: this.cos_return[0].detalii.cos[j].qty, pret: this.cos_return[0].detalii.cos[j].pret })
              this.total = parseInt(this.cos_return[0].detalii.total_comanda);
              this.total_comanda = this.total
            
          }
        });
      }
      else if (!this.check_tokken) {
        localStorage.clear();
      }
    },


    methods: {

      logout_btn: function () {
        localStorage.removeItem("client_ID")
        localStorage.removeItem("client_name")
        this.$cookies.set("tokken", 0, "0s");
        window.open("/index.html", "_self")

      },

      add_to_chart: function (index) {
        if (this.check_tokken) {

          this.total += parseInt(this.produse[index].pret);
          var id_client = localStorage.getItem("client_ID")
          var nume = this.produse[index].nume
          this.temp.push({ nume: nume, cantitate: this.cantitate, pret: this.produse[index].pret, detalii: this.produse[index].detalii, img: this.produse[index].img.img, qty: this.produse[index].qty })
          var confirmare = false;
          this.bar("Produsul " + nume + " a fost adaugat")

          var aggregatedObject = Enumerable.From(this.temp)
            .GroupBy("$.nume", null,
              function (key, g) {
                // console.log(g.source[0])
                return {
                  nume: key,
                  pret: g.Sum(g.source[0].pret),
                  img: g.source[0].img,
                  qty: g.Sum(g.source[0].qty),
                  detalii: g.source[0].detalii,

                }
              })
            .ToArray();
          this.cos = aggregatedObject

          var t = 0
          for (var i = 0; i < aggregatedObject.length; i++) {
            t += aggregatedObject[i].pret
          }
          this.total = t
          if (this.total >= 50) {
            this.cost_transport = "Gratuit";
            this.total_comanda = this.total
          }
          else if (this.total == 0) {
            this.total_comanda = 0
          }
          else {
            this.cost_transport = "5 RON";
            var t = this.total
            this.total_comanda = t + 5
          }

          axios.put('http://localhost:3000/cosclient/' + id_client,
            {
              cos: {
                nr_comanda: 1,
                cos: this.cos,
                total_comanda:this.total_comanda,
                confirm: confirmare
              }


            },
            {
              onUploadProgress: function (progressEvent) {
                var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                document.getElementById('output').innerHTML = percentCompleted;
              }
            }).then(function (res) {
              output.className = 'container';
              output.innerHTML = res.data.stats;
              console.log(res.data.dat.value.detalii.cos[0])
              this.aggregatedObject=res.data.dat.value.detalii
           //   this.cos2.push(res.data.dat.value.detalii.cos[0])
            })
            .catch(function (err) {
              output.className = 'container text-danger';
              output.innerHTML = err.message;
            })

          }
    






    
  },

    /*       
            axios.put('http://localhost:3000/cosclient/'+id_client, { 
               cos: {
                 nume: nume, 
                 cantitate: this.cantitate,
                 pret: this.produse[index].pret,
                 detalii: this.produse[index].detalii,
                 img:this.produse[index].img.img 
               }, 
               total: this.total, 
               confirm: confirmare
             
             
             },
             
             ).then(response => response.data); 
   */
    /*      axios.put('http://localhost:3000/cosclient/'+id_client,
            {cos: {
              nume: nume, 
              cantitate: this.cantitate,
              pret: this.produse[index].pret,
              detalii: this.produse[index].detalii,
              img:this.produse[index].img.img ,
              total: this.total,
              confirm: confirmare
            }        
             
          
          },
            {
              onUploadProgress: function(progressEvent) {
                var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
                document.getElementById('output').innerHTML = percentCompleted;
              }
         }).then(function (res) {
          output.className = 'container';
          output.innerHTML = res.data;
        })
        .catch(function (err) {
          output.className = 'container text-danger';
          output.innerHTML = err.message;
        }) 
   
      }},
         
  
            
            
        console.log("re")
          axios.put('http://localhost:3000/cosclient/'+id_client, {cos: this.cos, total: this.total, confirm: confirmare },
          
          {
            onUploadProgress: function(progressEvent) {
              var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
              document.getElementById('output').innerHTML = percentCompleted;
            }
       }).then(function (res) {
        output.className = 'container';
        output.innerHTML = res.data;
      })
      .catch(function (err) {
        output.className = 'container text-danger';
        output.innerHTML = err.message;
      });  
  
            setTimeout(function(){}, 2000);
            if (this.total >= 50) {
              this.cost_transport = "Gratuit";
              this.total_comanda = this.total
            }
            else if (this.total == 0) {
              this.total_comanda = 0
            }
            else {
              this.cost_transport = "5 RON";
              var t = this.total
              this.total_comanda = t + 5
            }
           
          }
  
        }
        */

    delete_from_check_list: function (index) {
      this.total -= parseInt(this.cos[index].pret);
      this.bar("Produsul " + this.cos[index].nume + " a fost sters")
      this.$delete(this.cos, index)



      var id_client = localStorage.getItem("client_ID")
      this.usersService.put(id_client, this.cos, this.total).then(response => { (response.data) });
      if (this.total >= 50) {
        this.cost_transport = "Gratuit";
        this.total_comanda = this.total
      }
      else if (this.total == 0) {
        this.total_comanda = 0

      }
      else {
        this.cost_transport = "5 RON";
        var t = this.total
        this.total_comanda = t + 5
      }
    },

    delete_list: function () {
      this.bar("Lista a fost golita")
      var id_client = localStorage.getItem("client_ID")


      axios.delete('http://localhost:3000/cosclient/' + id_client).then(response =>

        setTimeout(function () { this.bar(response.data) }, 1000)
      );
      this.total = 0;
      this.total_comanda = 0;
      this.cos = []

      // setTimeout(function(){  location.reload(); }, 1000);




    },

    bar: function (message) {
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);
      this.modificarii = message
    },


    checkout: function () {

      window.open("/finalizare.html", "_self")
    },
    },
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});
