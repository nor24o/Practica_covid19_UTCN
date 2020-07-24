
function run() {
  new Vue({
    el: '#profil',

    data: {
      getDailyCases: [],
      getDailyCaseReport:[],
      getCasesByAgeGroup:[],
      decesepejudete:[],
      aerlive:[],
      sec: [],
      itt: [],
      kato:[],
      numreproductie:[
         R=[],
         R25=[],
         R75=[]
      ]
       
      


    },
    created: function () {



        axios.get('https://covid19.geo-spatial.org/api/dashboard/getCasesByCounty').then(res => {
   //       console.log(res.data);
          
        });
      /*    axios.get('https://covid19.geo-spatial.org/api/dashboard/getDeadCasesByCounty').then(res => {
            console.log(res.data);
            
          });*/
      /*   axios.get('https://covid19.geo-spatial.org/api/dashboard/getHealthCasesByCounty').then(res => {
           console.log(res.data);
           
         });*/
      axios.get('https://covid19.geo-spatial.org/api/dashboard/getDailyCases').then(res => {
        this.getDailyCases.push(res.data)
    //    console.log(res.data.data)

      });
      axios.get('https://covid19.apps.sage.ieat.ro/aerlive.avg.json').then(res => {
        this.aerlive.push(res.data)
      //  console.log(res.data)

      });

      axios.get('https://covid19.geo-spatial.org/api/dashboard/getDailyCaseReport').then(res => {
        this.getDailyCaseReport.push(res.data)
    //    console.log(res.data)

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
           console.log(res.data);
           
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
        var sec =[]
        for (let i = 0; i < this.getDailyCases[0].data.data.length; i++)
          sec[i] = (JSON.stringify(this.getDailyCases[0].data.data[i]))

        for (let i = 0; i < sec.length; i++)
          obj[i] = JSON.parse(sec[i]);

          this.JSONToCSVConvertor2(obj, "DailyCases", true,"Cazuri_cazuri_tot")
      },
      ex6: function () {
        console.log(this.getCasesByAgeGroup[0].data)
        var obj = []
        var sec =[]
        for (let i = 0; i < this.getCasesByAgeGroup.length; i++)
          sec[i] = (JSON.stringify(this.getCasesByAgeGroup[i]))
          console.log(sec)
        for (let i = 0; i < sec.length; i++)
          obj[i] = JSON.parse(sec[i]);
          this.download(obj,'Cazuri_Raport_crestere.csv','text/csv')
      },
      ex7:function(){
        var array={R:[],R25:[],R75:[],R05:[],R95:[],R025:[],R975:[]}
        var te=[]
        var R=[1.89,1.87,1.85,1.83,1.81,1.79,1.77,1.75,1.72,1.7,1.68,1.65,1.63,1.61,1.59,1.58,1.56,1.55,1.53,1.51,1.48,1.45,1.42,1.38,1.35,1.31,1.28,1.25,1.22,1.19,1.17,1.14,1.12,1.1,1.08,1.07,1.05,1.04,1.03,1.02,1.01,1,0.99,0.98,0.98,0.97,0.97,0.97,0.96,0.96,0.96,0.96,0.96,0.96,0.96,0.95,0.95,0.95,0.95,0.95,0.94,0.94,0.93,0.92,0.91,0.9,0.89,0.87,0.86,0.85,0.85,0.85,0.86,0.86,0.87,0.89,0.9,0.91,0.93,0.94,0.95,0.97,0.98,0.99,1,1.01,1.02,1.03,1.04,1.05,1.07,1.08,1.1,1.12,1.13,1.14,1.15,1.16,1.16,1.17,1.17,1.17,1.17,1.17,1.16,1.15,1.14,1.14,1.13,1.12,1.12,1.11,1.11,1.12,1.12,1.12,1.13,1.13,1.14,1.14,1.15,1.16,1.16,1.17,1.18,1.18,1.19,1.19,1.19,1.19,1.19,1.18,1.18,1.18,1.17,1.17,1.17,1.17,1.16,1.16,1.16,1.15,1.15]
        var R25=[1.78,1.77,1.75,1.74,1.74,1.72,1.7,1.68,1.67,1.65,1.62,1.61,1.59,1.57,1.56,1.55,1.53,1.52,1.5,1.48,1.46,1.43,1.4,1.36,1.33,1.29,1.26,1.23,1.2,1.17,1.15,1.13,1.11,1.09,1.07,1.05,1.04,1.03,1.02,1.01,1,0.99,0.98,0.97,0.97,0.96,0.96,0.95,0.95,0.95,0.95,0.95,0.94,0.95,0.94,0.94,0.94,0.94,0.93,0.93,0.93,0.93,0.92,0.91,0.9,0.89,0.87,0.86,0.85,0.84,0.84,0.84,0.84,0.85,0.86,0.87,0.88,0.9,0.91,0.92,0.94,0.95,0.96,0.98,0.99,0.99,1,1.01,1.02,1.04,1.05,1.07,1.09,1.1,1.11,1.13,1.13,1.14,1.15,1.15,1.16,1.16,1.16,1.15,1.14,1.14,1.13,1.12,1.11,1.11,1.1,1.1,1.1,1.1,1.11,1.11,1.11,1.12,1.12,1.13,1.14,1.14,1.15,1.16,1.16,1.17,1.17,1.18,1.18,1.18,1.18,1.17,1.17,1.17,1.16,1.16,1.16,1.15,1.15,1.15,1.14,1.13,1.12]
        var R75=[1.98,1.96,1.94,1.92,1.89,1.86,1.84,1.81,1.78,1.75,1.72,1.7,1.67,1.65,1.63,1.61,1.6,1.58,1.56,1.53,1.51,1.48,1.44,1.4,1.37,1.33,1.3,1.26,1.23,1.21,1.18,1.16,1.13,1.11,1.1,1.08,1.07,1.05,1.04,1.03,1.02,1.01,1,1,0.99,0.98,0.98,0.98,0.98,0.98,0.98,0.97,0.97,0.97,0.97,0.97,0.96,0.96,0.96,0.96,0.96,0.95,0.95,0.94,0.92,0.91,0.9,0.88,0.87,0.86,0.86,0.86,0.87,0.88,0.89,0.9,0.91,0.93,0.94,0.95,0.97,0.98,1,1.01,1.02,1.03,1.04,1.05,1.06,1.07,1.09,1.1,1.12,1.13,1.15,1.16,1.17,1.17,1.18,1.18,1.19,1.19,1.18,1.18,1.18,1.17,1.16,1.15,1.14,1.13,1.13,1.13,1.13,1.13,1.13,1.13,1.14,1.14,1.15,1.15,1.16,1.17,1.17,1.18,1.19,1.19,1.2,1.2,1.2,1.2,1.2,1.2,1.19,1.19,1.19,1.19,1.18,1.18,1.18,1.17,1.17,1.17,1.17]
        var R05=[1.64,1.63,1.64,1.64,1.63,1.64,1.62,1.61,1.6,1.58,1.56,1.55,1.53,1.51,1.5,1.5,1.48,1.48,1.47,1.45,1.42,1.39,1.36,1.33,1.3,1.26,1.23,1.21,1.18,1.15,1.13,1.11,1.09,1.07,1.05,1.04,1.02,1.01,1,0.99,0.98,0.97,0.96,0.96,0.95,0.95,0.94,0.94,0.94,0.94,0.93,0.93,0.93,0.93,0.93,0.92,0.92,0.92,0.92,0.92,0.91,0.91,0.9,0.9,0.88,0.87,0.86,0.84,0.83,0.82,0.82,0.82,0.82,0.83,0.84,0.85,0.87,0.88,0.89,0.9,0.91,0.93,0.94,0.95,0.96,0.97,0.98,0.99,1,1.01,1.03,1.04,1.06,1.08,1.09,1.1,1.11,1.12,1.12,1.13,1.13,1.13,1.13,1.13,1.13,1.12,1.11,1.1,1.1,1.09,1.08,1.08,1.08,1.08,1.09,1.09,1.09,1.1,1.11,1.11,1.12,1.13,1.13,1.14,1.15,1.15,1.16,1.16,1.16,1.16,1.16,1.15,1.15,1.15,1.14,1.14,1.14,1.14,1.13,1.13,1.11,1.11,1.1]
        var R95=[2.17,2.13,2.09,2.05,2.02,1.99,1.94,1.92,1.87,1.84,1.8,1.77,1.74,1.72,1.69,1.67,1.64,1.63,1.6,1.58,1.54,1.51,1.47,1.44,1.39,1.36,1.32,1.29,1.26,1.23,1.2,1.18,1.16,1.14,1.11,1.1,1.08,1.07,1.06,1.05,1.04,1.03,1.02,1.01,1.01,1,1,1,0.99,0.99,0.99,0.99,0.99,0.98,0.98,0.98,0.98,0.98,0.98,0.97,0.97,0.97,0.96,0.95,0.94,0.93,0.91,0.9,0.89,0.88,0.88,0.88,0.89,0.9,0.91,0.92,0.93,0.95,0.96,0.97,0.99,1.01,1.02,1.03,1.04,1.05,1.06,1.07,1.08,1.09,1.11,1.12,1.14,1.16,1.17,1.18,1.19,1.2,1.2,1.21,1.21,1.21,1.21,1.2,1.2,1.19,1.18,1.17,1.16,1.15,1.15,1.15,1.15,1.15,1.15,1.15,1.16,1.16,1.17,1.17,1.18,1.19,1.19,1.2,1.21,1.21,1.22,1.22,1.22,1.22,1.22,1.21,1.21,1.21,1.21,1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.2]
        var R025= [1.59,1.59,1.59,1.61,1.59,1.6,1.58,1.58,1.58,1.56,1.54,1.53,1.51,1.49,1.48,1.47,1.46,1.46,1.45,1.44,1.41,1.38,1.35,1.32,1.29,1.25,1.23,1.2,1.17,1.15,1.12,1.1,1.08,1.06,1.05,1.03,1.02,1,1,0.98,0.98,0.97,0.96,0.95,0.95,0.94,0.94,0.93,0.93,0.93,0.93,0.93,0.92,0.92,0.92,0.92,0.92,0.91,0.91,0.91,0.91,0.9,0.9,0.89,0.88,0.86,0.85,0.83,0.82,0.81,0.81,0.81,0.82,0.82,0.84,0.85,0.86,0.87,0.88,0.89,0.91,0.92,0.93,0.94,0.95,0.96,0.97,0.98,0.99,1,1.02,1.04,1.05,1.07,1.09,1.1,1.1,1.11,1.12,1.12,1.13,1.12,1.13,1.12,1.12,1.11,1.1,1.1,1.09,1.08,1.08,1.08,1.08,1.08,1.08,1.09,1.09,1.09,1.1,1.11,1.11,1.12,1.13,1.14,1.14,1.15,1.15,1.15,1.16,1.16,1.15,1.15,1.15,1.14,1.14,1.13,1.13,1.13,1.13,1.12,1.11,1.1,1.08]
        var R975=[2.25,2.2,2.16,2.11,2.07,2.01,1.97,1.94,1.9,1.87,1.83,1.8,1.77,1.74,1.7,1.68,1.66,1.65,1.62,1.59,1.56,1.52,1.48,1.44,1.4,1.37,1.33,1.3,1.26,1.24,1.21,1.19,1.16,1.14,1.12,1.1,1.09,1.08,1.06,1.05,1.05,1.04,1.02,1.02,1.01,1.01,1.01,1,1,1,1,0.99,0.99,0.99,0.99,0.99,0.99,0.98,0.98,0.98,0.98,0.97,0.97,0.96,0.95,0.94,0.92,0.91,0.9,0.89,0.89,0.89,0.9,0.9,0.92,0.93,0.94,0.95,0.97,0.98,1,1.01,1.03,1.04,1.05,1.06,1.07,1.08,1.09,1.1,1.11,1.13,1.15,1.17,1.18,1.19,1.2,1.21,1.21,1.21,1.22,1.22,1.21,1.21,1.2,1.19,1.19,1.18,1.17,1.16,1.16,1.15,1.15,1.15,1.16,1.16,1.16,1.17,1.17,1.18,1.19,1.19,1.2,1.21,1.21,1.22,1.22,1.22,1.22,1.22,1.22,1.22,1.22,1.21,1.21,1.21,1.21,1.21,1.21,1.2,1.2,1.2,1.22]
          
            for(let i=0;i<R.length;i++){
                array.R[i]=(JSON.stringify(R[i])) 
                array.R25[i]=(JSON.stringify(R25[i])) 
                array.R75[i]=(JSON.stringify(R75[i])) 
                array.R05[i]=(JSON.stringify(R05[i])) 
                array.R95[i]=(JSON.stringify(R95[i])) 
                array.R025[i]=(JSON.stringify(R025[i])) 
                array.R975[i]=(JSON.stringify(R975[i])) 
            }

      console.log(array)
 /*       array[1]=JSON.stringify(R25) 
        array[2]=JSON.stringify(R75) 
        array[3]=JSON.stringify(R05) 
        array[4]=JSON.stringify(R95) 
        array[5]=JSON.stringify(R025) 
        array[6]=JSON.stringify(R975) 
        
        console.log( JSON.stringify(array))*/
        this.downloadex7(JSON.stringify(array),'R.txt','text/plain')
      },
      ex2: function () {
        console.log(this.getDailyCaseReport[0].data)
        var obj = []
        var sec=[]
        var test=[]
        for (let i = 0; i < this.getDailyCaseReport[0].data.data.length; i++)
          sec[i] = (JSON.stringify(this.getDailyCaseReport[0].data.data[i]))

        for (let i = 0; i < sec.length; i++)
          obj[i] = JSON.parse(sec[i]);

          this.JSONToCSVConvertor_ex1(obj, "Ziua_fata_de_cazuri_cumulative", true,"Cazuri_Ziua_fata_de_cazuri_cumulative")
      },
      ex5:function(){
        var sec =[]
        var obj =[]
        for (let i = 0; i < this.decesepejudete[0].data.data.length; i++)
          sec[i] = (JSON.stringify(this.decesepejudete[0].data.data[i]))

        for (let i = 0; i < sec.length; i++)
          obj[i] = JSON.parse(sec[i]);
          console.log(obj)

         this.JSONToCSVConvertor2(obj, "Decese_pe_judete", true,"Decese_pe_judete")
      },
      ex3: function () {
        
        

       // console.log(this.getDailyCaseReport[0].data)
        var obj = []
        var sec=[]
        this.kato[0]=this.aerlive[0].co_data
        this.kato[1]=this.aerlive[0].ica_data
        this.kato[2]=this.aerlive[0].no2_data
        this.kato[3]=this.aerlive[0].pm10_data
        this.kato[4]=this.aerlive[0].pm25_data
        this.kato[5]=this.aerlive[0].so2_data
        
        // for(let i=0;i<this.kato.)
        
        this.JSONToCSVConvertor2(this.kato[0], "co_data", true,"aerlive_co_data")

        this.JSONToCSVConvertor2(this.kato[1], "ica_data", true,"aerlive_ica_data")
        this.JSONToCSVConvertor2(this.kato[2], "no2_data", true,"aerlive_no2_data")
        this.JSONToCSVConvertor2(this.kato[3], "pm10_data", true,"aerlive_pm10_data")
        this.JSONToCSVConvertor2(this.kato[4], "pm25_data", true,"aerlive_pm25_data")
        this.JSONToCSVConvertor2(this.kato[5], "so2_data", true,"aerlive_so2_data")
        
      },
      ex4:function(){
        var ress=this.getDailyCaseReport[0].data.data
        var sec =[]
        var ot=[]
        console.log(ress[7]['total_case'])
       for (let i = 0; i < ress.length; i++){
         sec[i] = ress[i]['total_case']
       }
       for (let i = 0; i < sec.length; i++){
        if (i == 0) {
          ot.push(0)
      } else if (i == 1) {
          ot.push(1)
      } else {
         
         ot.push((sec[i]-sec[i-1])/sec[i])
      }
         
      }
      console.log(ot)
      this.download(ot,'Cazuri_Raport_crestere.csv','text/csv')

      },
     download:function (data, filename, type) {
        var file = new Blob([data], {type: type});
        if (window.navigator.msSaveOrOpenBlob) // IE10+
            window.navigator.msSaveOrOpenBlob(file, filename);
        else { // Others
            var a = document.createElement("a"),
                    url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);  
            }, 0); 
        }
    },
    downloadex7:function (data, filename, type) {
      var file = new Blob([data], {type:'text/plain',endings:'native'});
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
          setTimeout(function() {
              document.body.removeChild(a);
              window.URL.revokeObjectURL(url);  
          }, 0); 
      }
  },

      

      JSONToCSVConvertor2: function (JSONData, ReportTitle, ShowLabel,numefisier) {
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
            if(arrData[i][index]!=null)
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

      JSONToCSVConvertor_ex1: function (JSONData, ReportTitle, ShowLabel,numefisier) {
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
            if(index=="day_no"){
            row += "Data(zile)" + ',';}

            else if(index=="total_case"){
            row += "Cazuri confirmate" + ',';}

            else if(index=="total_healed"){
            row += "Vindecati" + ',';}

            else if(index=="total_dead"){
            row += "Decese" + ',';}

            else if(index=="new_dead_no"||index=="new_case_no"||index=="new_healed_no"){
              row += " " + ',';}

            else{
            row += index + ',';}

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
            if(arrData[i][index]!=null){
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
