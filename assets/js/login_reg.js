
function run() {

  new Vue({
    el: '#login_page',
    data: {
      seen: true,
      usersService: null,
      login_username: '',
      login_password: '',

      date: {
        nume: '',
        prenume: '',
        numar_telefon: '',
        adresa: '',
        username: '',
        pass: '',
      },
      regsucces: '  ',
      raspuns: '',
      login_response: '',
      append: false,


    },
    created: function () {

      this.usersService = users();
      // this.seen=(this.$cookies.get)
      this.seen = this.$cookies.get("tokken") == 1 ? true : false
    },

    methods: {

      logout_btn: function () {//this.usersService.logout();
        axios.post('http://localhost:3000/logout').then(res => { });
        localStorage.removeItem("client_ID")
        localStorage.removeItem("client_name")
        this.$cookies.set("tokken", 0, "0s");
        window.open("/index.html", "_self")
      },

      reg: function () {
        console.log(this.date)
        if (!this.append) {

          if (this.date.username != '' && this.date.username.length > 0 && this.date.pass != '' && this.date.pass.length > 0) {
            this.usersService.reg(this.date).then(response => { (this.raspuns = response.data), this.afisare_succes() });

          }
        }
      },

      afisare_succes() {
        if (this.raspuns == "succes") {
          this.regsucces = "Client inregistrat cu succes";
          this.append = true;
        }
        else if (this.raspuns == "error") {
          this.regsucces = "Client deja inregistrat";
          this.append = true;

        }
      },

      login_btn: function () {
        console.log("ges")
        if (this.login_username != '' && this.login_username.length > 0 && this.login_password != '' && this.login_password.length > 0) {

          this.usersService.login(this.login_username, this.login_password).then(response => { (this.login_response = response.data),
             this.afisare_respons(response.data)
             });

        }
      },

      afisare_respons(resp) {
        if (resp.raport == "succes") {
          console.log(resp.admin)
          this.$cookies.set("tokken", 1, "1h");
          const name = this.login_username

          const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
          this.regsucces = ("Bun venit " + nameCapitalized);
          this.login_username = '';
          this.login_password = ''
          // this.append=true;
          localStorage.setItem("client_ID", resp.id)
          localStorage.setItem("client_name", resp.name)
        
          if (!resp.admin) {
            window.open("/meniu.html", "_self"); 
          console.log(resp.admin)
          }
          else if (resp.admin) {
         window.open("/"+resp.nr, "_self");
         console.log(resp.nr) 
          }

          //  window.open("./admin.html", "_self");
        
       } 
        else if (resp.raport == "error") {
          this.$cookies.set("tokken", 0, "0s");
          this.regsucces = "Numeutilizator sau parola incorecta";
          // this.append=true; 
        }
      },

    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});
