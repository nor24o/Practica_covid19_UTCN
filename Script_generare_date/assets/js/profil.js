
function run() {
  new Vue({
    el: '#profil',

    data: {
      getDailyCases: [],
      getDailyCaseReport: [],
      getCasesByAgeGroup: [],
      decesepejudete: [],
      aerlive: [],
      sec: [],
      itt: [],
      kato: [],
      json:[],
      europa:[],
      waze_bu:[],
      waze_tim:[],
      waze_brasov:[],
      waze_cluj:[],
      waze_costanta:[],
      waze_iasi:[],
      frontiera:[]





    },
    created: function () {
      fetch("/values.json")
      .then(r => r.json())
      .then(json => {
      
        this.json=json;
      });



      axios.get('https://covid19.geo-spatial.org/api/dashboard/getCasesByCounty').then(res => {
        //       console.log(res.data);

      });
      axios.get('https://covid19.geo-spatial.org/external/wazero/bu.2.json').then(res => {
      //      console.log(res.data);
            this.waze_bu=res.data;
            
          });

          axios.get('https://covid19.geo-spatial.org/external/wazero/Timisoara.2.json').then(res => {
     //       console.log(res.data);
            this.waze_tim=res.data;
            
          });
          axios.get('https://covid19.geo-spatial.org/external/wazero/Cluj-Napoca.2.json').then(res => {
      //      console.log(res.data);
            this.waze_cluj=res.data;
            
          });
          axios.get('https://covid19.geo-spatial.org/external/wazero/Brasov.2.json').then(res => {
      //      console.log(res.data);
            this.waze_brasov=res.data;
            
          });
          axios.get('https://covid19.geo-spatial.org/external/wazero/Constanta.2.json').then(res => {
      //      console.log(res.data);
            this.waze_costanta=res.data;
            
          });
          axios.get('https://covid19.geo-spatial.org/external/wazero/Iasi.2.json').then(res => {
        //    console.log(res.data);
            this.waze_iasi=res.data;
            
          });

          axios.get('https://covid19.geo-spatial.org/external/charts_vasile/assets/json/mobilitate_frontiera.json').then(res => {
        //    console.log(res.data);
            this.frontiera=res.data;
            
          });
          https://covid19.geo-spatial.org/external/wazero/Cluj-Napoca.2.json
          

      /*    axios.get('https://covid19.geo-spatial.org/api/dashboard/getDeadCasesByCounty').then(res => {
            console.log(res.data);
            
          });*/
      /*   axios.get('https://covid19.geo-spatial.org/api/dashboard/getHealthCasesByCounty').then(res => {
           console.log(res.data);
           
         });*/
      axios.get('https://covid19.geo-spatial.org/api/dashboard/getDailyCases').then(res => {
        this.getDailyCases.push(res.data)
     //   console.log(res.data.data)

      });
      axios.get('https://covid19.apps.sage.ieat.ro/aerlive.avg.json').then(res => {
        this.aerlive.push(res.data)
        //  console.log(res.data)

      });

      axios.get('https://covid19.geo-spatial.org/api/dashboard/getDailyCaseReport').then(res => {
        this.getDailyCaseReport.push(res.data)
       //     console.log(res.data)

      });

      /*
         axios.get('https://covid19.geo-spatial.org/api/statistics/getCaseRelations').then(res => {
           console.log(res.data);
           
         });
         */
      axios.get('https://covid19.geo-spatial.org/api/dashboard/getPercentageByGender').then(res => {
        //     console.log(res.data);

      });
      axios.get('https://covid19.geo-spatial.org/api/dashboard/getCasesByAgeGroup').then(res => {
        this.getCasesByAgeGroup.push(res.data)
        //   console.log(res.data);

      });

      axios.get('https://covid19.geo-spatial.org/api/dashboard/getDeadCasesByCounty').then(res => {
        //  console.log(res.data);
        this.decesepejudete.push(res.data)


      });

    },

    methods: {
      ex1: function () {
        console.log(this.getDailyCases[0].data)
        var obj = []
        var sec = []
        for (let i = 0; i < this.getDailyCases[0].data.data.length; i++)
          sec[i] = (JSON.stringify(this.getDailyCases[0].data.data[i]))

        for (let i = 0; i < sec.length; i++)
          obj[i] = JSON.parse(sec[i]);
        
        this.JSONToCSVConvertor2(obj, "DailyCases", true, "Cazuri_cazuri_tot")
      },
      ex9:function(){
        this.JSONToCSVConvertor2(this.frontiera, "Frontiera", true, "Frontiera")


      },
      ex10:function(){
        var obj=[]
          for(let i=0;i<this.waze_bu.length;i++){

          /*  if(this.waze_bu[i]["value"]==undefined||this.waze_tim[i]["value"]==undefined||this.waze_costanta[i]["value"]==undefined||
            this.waze_iasi[i]["value"]==undefined||this.waze_cluj[i]["value"]==undefined||this.waze_brasov[i]["value"]==undefined)
            {}
            else*/
            obj.push({"bucuresti":this.waze_bu[i]["value"],"timisoara":this.waze_tim[i]["value"],"costanta":this.waze_costanta[i]["value"],
            "iasi":this.waze_iasi[i]["value"],"cluj_napoca":this.waze_cluj[i]["value"],"brasov":this.waze_brasov[i]["value"]})
          }
     //    console.log(obj)
          this.JSONToCSVConvertor2(obj, "waze", true, "waze")
      }
      

      ,
      ex6: function () {
        console.log(this.getCasesByAgeGroup[0].data)
        var obj = []
        var sec = []
        
        for (let i = 0; i < this.getCasesByAgeGroup.length; i++){
          sec.push({"0_9":this.getCasesByAgeGroup[i].data["0-9"],"10_19":this.getCasesByAgeGroup[i].data["10-19"],"20_29":this.getCasesByAgeGroup[i].data["20-29"],"30_39":this.getCasesByAgeGroup[i].data["30-39"],"40_49":this.getCasesByAgeGroup[i].data["40-49"],
          "50_59":this.getCasesByAgeGroup[i].data["50-59"],"60_69":this.getCasesByAgeGroup[i].data["60-69"],"70_79":this.getCasesByAgeGroup[i].data["70-79"],">80":this.getCasesByAgeGroup[i].data[">80"]})

        }
        this.JSONToCSVConvertor2(sec, "FrecventaGrupeDeVarsta", true, "Frecventa_pe_grupe_de_varsta")
        console.log(sec[0])
      },
      ex7: function () {
        var te = []
        var R = [1.89, 1.87, 1.85, 1.83, 1.81, 1.79, 1.77, 1.75, 1.72, 1.7, 1.68, 1.65, 1.63, 1.61, 1.59, 1.58, 1.56, 1.55, 1.53, 1.51, 1.48, 1.45, 1.42, 1.38, 1.35, 1.31, 1.28, 1.25, 1.22, 1.19, 1.17, 1.14, 1.12, 1.1, 1.08, 1.07, 1.05, 1.04, 1.03, 1.02, 1.01, 1, 0.99, 0.98, 0.98, 0.97, 0.97, 0.97, 0.96, 0.96, 0.96, 0.96, 0.96, 0.96, 0.96, 0.95, 0.95, 0.95, 0.95, 0.95, 0.94, 0.94, 0.93, 0.92, 0.91, 0.9, 0.89, 0.87, 0.86, 0.85, 0.85, 0.85, 0.86, 0.86, 0.87, 0.89, 0.9, 0.91, 0.93, 0.94, 0.95, 0.97, 0.98, 0.99, 1, 1.01, 1.02, 1.03, 1.04, 1.05, 1.07, 1.08, 1.1, 1.12, 1.13, 1.14, 1.15, 1.16, 1.16, 1.17, 1.17, 1.17, 1.17, 1.17, 1.16, 1.15, 1.14, 1.14, 1.13, 1.12, 1.12, 1.11, 1.11, 1.12, 1.12, 1.12, 1.13, 1.13, 1.14, 1.14, 1.15, 1.16, 1.16, 1.17, 1.18, 1.18, 1.19, 1.19, 1.19, 1.19, 1.19, 1.18, 1.18, 1.18, 1.17, 1.17, 1.17, 1.17, 1.16, 1.16, 1.16, 1.15, 1.15]
        var R25 = [1.78, 1.77, 1.75, 1.74, 1.74, 1.72, 1.7, 1.68, 1.67, 1.65, 1.62, 1.61, 1.59, 1.57, 1.56, 1.55, 1.53, 1.52, 1.5, 1.48, 1.46, 1.43, 1.4, 1.36, 1.33, 1.29, 1.26, 1.23, 1.2, 1.17, 1.15, 1.13, 1.11, 1.09, 1.07, 1.05, 1.04, 1.03, 1.02, 1.01, 1, 0.99, 0.98, 0.97, 0.97, 0.96, 0.96, 0.95, 0.95, 0.95, 0.95, 0.95, 0.94, 0.95, 0.94, 0.94, 0.94, 0.94, 0.93, 0.93, 0.93, 0.93, 0.92, 0.91, 0.9, 0.89, 0.87, 0.86, 0.85, 0.84, 0.84, 0.84, 0.84, 0.85, 0.86, 0.87, 0.88, 0.9, 0.91, 0.92, 0.94, 0.95, 0.96, 0.98, 0.99, 0.99, 1, 1.01, 1.02, 1.04, 1.05, 1.07, 1.09, 1.1, 1.11, 1.13, 1.13, 1.14, 1.15, 1.15, 1.16, 1.16, 1.16, 1.15, 1.14, 1.14, 1.13, 1.12, 1.11, 1.11, 1.1, 1.1, 1.1, 1.1, 1.11, 1.11, 1.11, 1.12, 1.12, 1.13, 1.14, 1.14, 1.15, 1.16, 1.16, 1.17, 1.17, 1.18, 1.18, 1.18, 1.18, 1.17, 1.17, 1.17, 1.16, 1.16, 1.16, 1.15, 1.15, 1.15, 1.14, 1.13, 1.12]
        var R75 = [1.98, 1.96, 1.94, 1.92, 1.89, 1.86, 1.84, 1.81, 1.78, 1.75, 1.72, 1.7, 1.67, 1.65, 1.63, 1.61, 1.6, 1.58, 1.56, 1.53, 1.51, 1.48, 1.44, 1.4, 1.37, 1.33, 1.3, 1.26, 1.23, 1.21, 1.18, 1.16, 1.13, 1.11, 1.1, 1.08, 1.07, 1.05, 1.04, 1.03, 1.02, 1.01, 1, 1, 0.99, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.97, 0.97, 0.97, 0.97, 0.97, 0.96, 0.96, 0.96, 0.96, 0.96, 0.95, 0.95, 0.94, 0.92, 0.91, 0.9, 0.88, 0.87, 0.86, 0.86, 0.86, 0.87, 0.88, 0.89, 0.9, 0.91, 0.93, 0.94, 0.95, 0.97, 0.98, 1, 1.01, 1.02, 1.03, 1.04, 1.05, 1.06, 1.07, 1.09, 1.1, 1.12, 1.13, 1.15, 1.16, 1.17, 1.17, 1.18, 1.18, 1.19, 1.19, 1.18, 1.18, 1.18, 1.17, 1.16, 1.15, 1.14, 1.13, 1.13, 1.13, 1.13, 1.13, 1.13, 1.13, 1.14, 1.14, 1.15, 1.15, 1.16, 1.17, 1.17, 1.18, 1.19, 1.19, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.19, 1.19, 1.19, 1.19, 1.18, 1.18, 1.18, 1.17, 1.17, 1.17, 1.17]
        var R05 = [1.64, 1.63, 1.64, 1.64, 1.63, 1.64, 1.62, 1.61, 1.6, 1.58, 1.56, 1.55, 1.53, 1.51, 1.5, 1.5, 1.48, 1.48, 1.47, 1.45, 1.42, 1.39, 1.36, 1.33, 1.3, 1.26, 1.23, 1.21, 1.18, 1.15, 1.13, 1.11, 1.09, 1.07, 1.05, 1.04, 1.02, 1.01, 1, 0.99, 0.98, 0.97, 0.96, 0.96, 0.95, 0.95, 0.94, 0.94, 0.94, 0.94, 0.93, 0.93, 0.93, 0.93, 0.93, 0.92, 0.92, 0.92, 0.92, 0.92, 0.91, 0.91, 0.9, 0.9, 0.88, 0.87, 0.86, 0.84, 0.83, 0.82, 0.82, 0.82, 0.82, 0.83, 0.84, 0.85, 0.87, 0.88, 0.89, 0.9, 0.91, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99, 1, 1.01, 1.03, 1.04, 1.06, 1.08, 1.09, 1.1, 1.11, 1.12, 1.12, 1.13, 1.13, 1.13, 1.13, 1.13, 1.13, 1.12, 1.11, 1.1, 1.1, 1.09, 1.08, 1.08, 1.08, 1.08, 1.09, 1.09, 1.09, 1.1, 1.11, 1.11, 1.12, 1.13, 1.13, 1.14, 1.15, 1.15, 1.16, 1.16, 1.16, 1.16, 1.16, 1.15, 1.15, 1.15, 1.14, 1.14, 1.14, 1.14, 1.13, 1.13, 1.11, 1.11, 1.1]
        var R95 = [2.17, 2.13, 2.09, 2.05, 2.02, 1.99, 1.94, 1.92, 1.87, 1.84, 1.8, 1.77, 1.74, 1.72, 1.69, 1.67, 1.64, 1.63, 1.6, 1.58, 1.54, 1.51, 1.47, 1.44, 1.39, 1.36, 1.32, 1.29, 1.26, 1.23, 1.2, 1.18, 1.16, 1.14, 1.11, 1.1, 1.08, 1.07, 1.06, 1.05, 1.04, 1.03, 1.02, 1.01, 1.01, 1, 1, 1, 0.99, 0.99, 0.99, 0.99, 0.99, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.97, 0.97, 0.97, 0.96, 0.95, 0.94, 0.93, 0.91, 0.9, 0.89, 0.88, 0.88, 0.88, 0.89, 0.9, 0.91, 0.92, 0.93, 0.95, 0.96, 0.97, 0.99, 1.01, 1.02, 1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.11, 1.12, 1.14, 1.16, 1.17, 1.18, 1.19, 1.2, 1.2, 1.21, 1.21, 1.21, 1.21, 1.2, 1.2, 1.19, 1.18, 1.17, 1.16, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.16, 1.16, 1.17, 1.17, 1.18, 1.19, 1.19, 1.2, 1.21, 1.21, 1.22, 1.22, 1.22, 1.22, 1.22, 1.21, 1.21, 1.21, 1.21, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2]
        var R025 = [1.59, 1.59, 1.59, 1.61, 1.59, 1.6, 1.58, 1.58, 1.58, 1.56, 1.54, 1.53, 1.51, 1.49, 1.48, 1.47, 1.46, 1.46, 1.45, 1.44, 1.41, 1.38, 1.35, 1.32, 1.29, 1.25, 1.23, 1.2, 1.17, 1.15, 1.12, 1.1, 1.08, 1.06, 1.05, 1.03, 1.02, 1, 1, 0.98, 0.98, 0.97, 0.96, 0.95, 0.95, 0.94, 0.94, 0.93, 0.93, 0.93, 0.93, 0.93, 0.92, 0.92, 0.92, 0.92, 0.92, 0.91, 0.91, 0.91, 0.91, 0.9, 0.9, 0.89, 0.88, 0.86, 0.85, 0.83, 0.82, 0.81, 0.81, 0.81, 0.82, 0.82, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89, 0.91, 0.92, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99, 1, 1.02, 1.04, 1.05, 1.07, 1.09, 1.1, 1.1, 1.11, 1.12, 1.12, 1.13, 1.12, 1.13, 1.12, 1.12, 1.11, 1.1, 1.1, 1.09, 1.08, 1.08, 1.08, 1.08, 1.08, 1.08, 1.09, 1.09, 1.09, 1.1, 1.11, 1.11, 1.12, 1.13, 1.14, 1.14, 1.15, 1.15, 1.15, 1.16, 1.16, 1.15, 1.15, 1.15, 1.14, 1.14, 1.13, 1.13, 1.13, 1.13, 1.12, 1.11, 1.1, 1.08]
        var R975 = [2.25, 2.2, 2.16, 2.11, 2.07, 2.01, 1.97, 1.94, 1.9, 1.87, 1.83, 1.8, 1.77, 1.74, 1.7, 1.68, 1.66, 1.65, 1.62, 1.59, 1.56, 1.52, 1.48, 1.44, 1.4, 1.37, 1.33, 1.3, 1.26, 1.24, 1.21, 1.19, 1.16, 1.14, 1.12, 1.1, 1.09, 1.08, 1.06, 1.05, 1.05, 1.04, 1.02, 1.02, 1.01, 1.01, 1.01, 1, 1, 1, 1, 0.99, 0.99, 0.99, 0.99, 0.99, 0.99, 0.98, 0.98, 0.98, 0.98, 0.97, 0.97, 0.96, 0.95, 0.94, 0.92, 0.91, 0.9, 0.89, 0.89, 0.89, 0.9, 0.9, 0.92, 0.93, 0.94, 0.95, 0.97, 0.98, 1, 1.01, 1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.1, 1.11, 1.13, 1.15, 1.17, 1.18, 1.19, 1.2, 1.21, 1.21, 1.21, 1.22, 1.22, 1.21, 1.21, 1.2, 1.19, 1.19, 1.18, 1.17, 1.16, 1.16, 1.15, 1.15, 1.15, 1.16, 1.16, 1.16, 1.17, 1.17, 1.18, 1.19, 1.19, 1.2, 1.21, 1.21, 1.22, 1.22, 1.22, 1.22, 1.22, 1.22, 1.22, 1.22, 1.21, 1.21, 1.21, 1.21, 1.21, 1.21, 1.2, 1.2, 1.2, 1.22]
        var obj = []
        for (let i = 0; i < R.length; i++) {

          te[i] = ({
            "R": JSON.stringify(R[i]), R25: JSON.stringify(R25[i]), R75: JSON.stringify(R75[i]), R05: JSON.stringify(R05[i])
            , R95: JSON.stringify(R95[i]), R025: JSON.stringify(R025[i]), R975: JSON.stringify(R975[i])
          })
        }
        this.JSONToCSVConvertor2(te, "Numarul de reproductie R", true, "Numarul de reproductie R")
      },

      
      ex2: function () {
        console.log(this.getDailyCaseReport[0].data)
        var sec = []
        for (let i = 0; i < this.getDailyCaseReport[0].data.data.length; i++){
          sec.push({"data":this.getDailyCaseReport[0].data.data[i]["day_case"],"data(zile)":this.getDailyCaseReport[0].data.data[i]["day_no"]
          ,"Cazuri":this.getDailyCaseReport[0].data.data[i]["total_case"]
          ,"Cazuri_active":this.getDailyCaseReport[0].data.data[i]["total_case"]-this.getDailyCaseReport[0].data.data[i]["total_healed"]-this.getDailyCaseReport[0].data.data[i]["total_dead"]
          ,"Decedati":this.getDailyCaseReport[0].data.data[i]["total_dead"],"vindecati":this.getDailyCaseReport[0].data.data[i]["total_healed"]
          })
        }
        this.JSONToCSVConvertor_ex1(sec, "Ziua_fata_de_cazuri_cumulative", true, "Cazuri_Ziua_fata_de_cazuri_cumulative")
      },
      ex5: function () {
        var sec = []
        var obj = []
        for (let i = 0; i < this.decesepejudete[0].data.data.length; i++)
          sec[i] = (JSON.stringify(this.decesepejudete[0].data.data[i]))

        for (let i = 0; i < sec.length; i++)
          obj[i] = JSON.parse(sec[i]);
        console.log(obj)

        this.JSONToCSVConvertor2(obj, "Decese_pe_judete", true, "Decese_pe_judete")
      },
      ex3: function () {
        console.log(this.aerlive)
        var obj = [[], [], [], [], [], [],[]]
        var sec = []



        this.aerlive[0].so2_data.forEach(function (o, index) {
          obj[0][index] = (o.x)

        }
        );

        this.aerlive[0].so2_data.forEach(function (o, index) {
          obj[1][index] = ( Math.round(o.y ))

        }
        );

        this.aerlive[0].ica_data.forEach(function (o, index) {
          obj[2][index] = ( Math.round(o.y))

        }
        );
        this.aerlive[0].no2_data.forEach(function (o, index) {
          obj[3][index] = (Math.round(o.y ))

        }
        );

        this.aerlive[0].ica_data.forEach(function (o, index) {
          obj[4][index] = (Math.round(o.y ))

        }
        );
        this.aerlive[0].so2_data.forEach(function (o, index) {
          obj[5][index] = (Math.round(o.y ))

        }
        );

        this.aerlive[0].ica_data.forEach(function (o, index) {
          obj[6][index] = ( Math.round(o.y ))

        }
        );

        

        for (let i = 0; i < obj[0].length; i++) {

          sec[i] = ({data: obj[0][i], "Co": JSON.stringify(obj[1][i]), "ica": JSON.stringify(obj[2][i]), "No2": JSON.stringify(obj[3][i])
            , "Pm10": JSON.stringify(obj[4][i]), "Pm2.5": JSON.stringify(obj[5][i]), "So2": JSON.stringify(obj[6][i])
          })
        }

           this.JSONToCSVConvertor2(sec, "Calitate_aer", true,"Calitate_aer")
            
      },
      ex4: function () {
        var ress = this.getDailyCaseReport[0].data.data
        var sec = []
        var ot = []
        var obj=[]
        console.log(ress[7])
        for (let i = 0; i < ress.length; i++) {
          sec[i] = ress[i]['total_case']
        }
        for (let i = 0; i < sec.length; i++) {
          if (i == 0) {
            ot.push(0)
          } else if (i == 1) {
            ot.push(1)
          } else {

            ot.push((sec[i] - sec[i - 1]) / sec[i])
          }

        }
        for(let i=0;i<ot.length;i++)
        obj.push({data_calendaristica:ress[i]['day_case'],data:ress[i]['day_no'],raport:ot[i].toFixed(2)})

        console.log(obj)
        this.JSONToCSVConvertor2(obj, "Calitate_aer", true,"Calitate_aer")
     //   this.download(ot, 'Cazuri_Raport_crestere.csv', 'text/csv')

      },

      download: function (data, filename, type) {
        var file = new Blob([data], { type: type });
        if (window.navigator.msSaveOrOpenBlob) // IE10+
          window.navigator.msSaveOrOpenBlob(file, filename);
        else { // Others
          var a = document.createElement("a"),
            url = URL.createObjectURL(file);
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
          }, 0);
        }
      },
      downloadex7: function (data, filename, type) {
        var file = new Blob([data], { type: 'text/plain', endings: 'native' });
        console.log(file)
        if (window.navigator.msSaveOrOpenBlob) // IE10+
          window.navigator.msSaveOrOpenBlob(file, filename);
        else { // Others
          var a = document.createElement("a"),
            url = URL.createObjectURL(file);
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
          }, 0);
        }
      },
      ex8:function(){
        var obj3=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
        var obj2=[]
        var force_countries = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Republic of Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary','Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania','Slovakia', 'Slovenia', 'Spain', 'Sweden','Russia','United Kingdom','Turkey','Monaco','Liechtenstein','Cyprus', 'Montenegro','Albania','Norway','Bosnia and Herzegovina','Moldova','Serbia','Ukraine','Belarus']
        var obj=this.json
        var arr = Array(force_countries.length).fill(null).map(() => Array(300));
        console.log(arr)
        console.log(obj[0])
        var y=0
        for(let j=0;j<force_countries.length;j++){
        for(let i=0;i<obj[0].length;i++){
          if(obj[0][i].location_label===force_countries[j]){
        //    console.log(obj[0][i].location_label)
            if(obj[0][i].date==="7/28/20"){
              y=0
            }
           
         //   obj2.push.apply({location:obj[0][i].location_label,date:obj[0][i].date,absolute_deaths:obj[0][i].absolute_deaths})
         arr[j][y]=({location:obj[0][i].location_label,date:obj[0][i].date,absolute_deaths:obj[0][i].absolute_deaths})
         y++
          }
        }
      }
      console.log(arr)
         
      },



      JSONToCSVConvertor2: function (JSONData, ReportTitle, ShowLabel, numefisier) {
        //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
        var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

        var CSV = '';
        //Set Report title in first row or line

        CSV += ReportTitle + '\r\n\n';

        //This condition will generate the Label/Header
        if (ShowLabel) {
          var row = "";

          //This loop will extract the label from 1st index of on array
          for (var index in arrData[0]) {

            //Now convert each value to string and comma-seprated

            row += index + ',';

          }
          console.log(row)
          row = row.slice(0, -1);

          //append Label row with line break
          CSV += row + '\r\n';
        }

        //1st loop is to extract each row
        for (var i = 0; i < arrData.length; i++) {
          var row = "";

          //2nd loop will extract each column and convert it in string comma-seprated
          for (var index in arrData[i]) {
            if (arrData[i][index] != null)
              row += '"' + arrData[i][index] + '",';
            else
              row += '"' + " " + '",';

          }

          row.slice(0, row.length - 1);

          //add a line break after each row
          CSV += row + '\r\n';
        }

        if (CSV == '') {
          alert("Invalid data");
          return;
        }

        //Generate a file name
        var fileName = numefisier;
        //this will remove the blank-spaces from the title and replace it with an underscore
        fileName += ReportTitle.replace(/ /g, "_");

        //Initialize file format you want csv or xls
        var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

        // Now the little tricky part.
        // you can use either>> window.open(uri);
        // but this will not work in some browsers
        // or you will not get the correct file extension    

        //this trick will generate a temp <a /> tag
        var link = document.createElement("a");
        link.href = uri;

        //set the visibility hidden so it will not effect on your web-layout
        link.style = "visibility:hidden";
        link.download = fileName + ".csv";

        //this part will append the anchor tag and remove it after automatic click
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },

      JSONToCSVConvertor_ex1: function (JSONData, ReportTitle, ShowLabel, numefisier) {
        //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
        var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

        var CSV = '';
        //Set Report title in first row or line

        CSV += ReportTitle + '\r\n\n';

        //This condition will generate the Label/Header
        if (ShowLabel) {
          var row = "";

          //This loop will extract the label from 1st index of on array
          for (var index in arrData[0]) {

            //Now convert each value to string and comma-seprated
            if (index == "day_no") {
              row += "Data(zile)" + ',';
            }

            else if (index == "total_case") {
              row += "Cazuri confirmate" + ',';
            }

            else if (index == "total_healed") {
              row += "Vindecati" + ',';
            }

            else if (index == "total_dead") {
              row += "Decese" + ',';
            }

            else if (index == "new_dead_no" || index == "new_case_no" || index == "new_healed_no") {
              row += " " + ',';
            }

            else {
              row += index + ',';
            }

          }
          console.log(row)
          row = row.slice(0, -1);

          //append Label row with line break
          CSV += row + '\r\n';
        }

        //1st loop is to extract each row
        for (var i = 0; i < arrData.length; i++) {
          var row = "";

          //2nd loop will extract each column and convert it in string comma-seprated
          for (var index in arrData[i]) {
            if (arrData[i][index] != null) {
              row += '"' + arrData[i][index] + '",';
            }

            else
              row += '"' + " " + '",';

          }

          row.slice(0, row.length - 1);

          //add a line break after each row
          CSV += row + '\r\n';
        }

        if (CSV == '') {
          alert("Invalid data");
          return;
        }

        //Generate a file name
        var fileName = numefisier;
        //this will remove the blank-spaces from the title and replace it with an underscore
        fileName += ReportTitle.replace(/ /g, "_");

        //Initialize file format you want csv or xls
        var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

        // Now the little tricky part.
        // you can use either>> window.open(uri);
        // but this will not work in some browsers
        // or you will not get the correct file extension    

        //this trick will generate a temp <a /> tag
        var link = document.createElement("a");
        link.href = uri;

        //set the visibility hidden so it will not effect on your web-layout
        link.style = "visibility:hidden";
        link.download = fileName + ".csv";

        //this part will append the anchor tag and remove it after automatic click
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },





    }
  });
}

document.addEventListener('DOMContentLoaded', () => {

  run();
});
