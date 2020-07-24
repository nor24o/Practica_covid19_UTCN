
function run() {
  new Vue({
    el: '#profil',

    data: {
      getDailyCases: [],
      getDailyCaseReport:[],
      aerlive:[],
      sec: [],
      itt: [],
      kato:[]


    },
    created: function () {



        axios.get('https://covid19.geo-spatial.org/api/dashboard/getCasesByCounty').then(res => {
          console.log(res.data);
          
        });
      /*    axios.get('https://covid19.geo-spatial.org/api/dashboard/getDeadCasesByCounty').then(res => {
            console.log(res.data);
            
          });*/
      /*   axios.get('https://covid19.geo-spatial.org/api/dashboard/getHealthCasesByCounty').then(res => {
           console.log(res.data);
           
         });*/
      axios.get('https://covid19.geo-spatial.org/api/dashboard/getDailyCases').then(res => {
        this.getDailyCases.push(res.data)
        console.log(res.data.data)

      });
      axios.get('https://covid19.apps.sage.ieat.ro/aerlive.avg.json').then(res => {
        this.aerlive.push(res.data)
        console.log(res.data)

      });
      
      /*
         axios.get('https://covid19.geo-spatial.org/api/statistics/getCaseRelations').then(res => {
           console.log(res.data);
           
         });
         */
         axios.get('https://covid19.geo-spatial.org/api/dashboard/getPercentageByGender').then(res => {
           console.log(res.data);
           
         });/*
         axios.get('https://covid19.geo-spatial.org/api/dashboard/getCasesByAgeGroup').then(res => {
           console.log(res.data);
           
         });*/


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

          this.JSONToCSVConvertor2(obj, "DailyCases", true,"DailyCases")
      },
      ex2: function () {
        console.log(this.getDailyCaseReport[0].data)
        var obj = []
        var sec=[]
        for (let i = 0; i < this.getDailyCaseReport[0].data.data.length; i++)
          sec[i] = (JSON.stringify(this.getDailyCaseReport[0].data.data[i]))

        for (let i = 0; i < sec.length; i++)
          obj[i] = JSON.parse(sec[i]);

          this.JSONToCSVConvertor2(obj, "getDailyCaseReport", true,"getDailyCaseReport")
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
        
        this.JSONToCSVConvertor2(this.kato[0], "co_data", true,"aerlive_co_data")

        this.JSONToCSVConvertor2(this.kato[1], "ica_data", true,"aerlive_ica_data")
        this.JSONToCSVConvertor2(this.kato[2], "no2_data", true,"aerlive_no2_data")
        this.JSONToCSVConvertor2(this.kato[3], "pm10_data", true,"aerlive_pm10_data")
        this.JSONToCSVConvertor2(this.kato[4], "pm25_data", true,"aerlive_pm25_data")
        this.JSONToCSVConvertor2(this.kato[5], "so2_data", true,"aerlive_so2_data")
        
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



     

    }
  });
}

document.addEventListener('DOMContentLoaded', () => {

  run();
});
