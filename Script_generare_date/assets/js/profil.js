
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
      frontiera:[],
      temp_apa:[],
      ziles:[
      "2020-03-04",
      "2020-03-05",
      "2020-03-06",  
      "2020-03-07",
      "2020-03-08",
      "2020-03-09",
      "2020-03-10",
      "2020-03-11",
      "2020-03-12",
      "2020-03-13",
      "2020-03-14",
      "2020-03-15",
      "2020-03-16",
      "2020-03-17",
      "2020-03-18",
      "2020-03-19",
      "2020-03-20",
      "2020-03-21",
      "2020-03-22",
      "2020-03-23",
      "2020-03-24",
      "2020-03-25",
      "2020-03-26",
      "2020-03-27",
      "2020-03-28",
      "2020-03-29",
      "2020-03-30",
      "2020-03-31",
      "2020-04-01",
      "2020-04-02",
      "2020-04-03",
      "2020-04-04",
      "2020-04-05",
      "2020-04-06",
      "2020-04-07",
      "2020-04-08",
      "2020-04-09",
      "2020-04-10",
      "2020-04-11",
      "2020-04-12",
      "2020-04-13",
      "2020-04-14",
      "2020-04-15",
      "2020-04-16",
      "2020-04-17",
      "2020-04-18",
      "2020-04-19",
      "2020-04-20",
      "2020-04-21",
      "2020-04-22",
      "2020-04-23",
      "2020-04-24",
      "2020-04-25",
      "2020-04-26",
      "2020-04-27",
      "2020-04-28",
      "2020-04-29",
      "2020-04-30",
      "2020-05-01",
      "2020-05-02",
      "2020-05-03",
      "2020-05-04",
      "2020-05-05",
      "2020-05-06",
      "2020-05-07",
      "2020-05-08",
      "2020-05-09",
      "2020-05-10",
      "2020-05-11",
      "2020-05-12",
      "2020-05-13",
      "2020-05-14",
      "2020-05-15",
      "2020-05-16",
      "2020-05-17",
      "2020-05-18",
      "2020-05-19",
      "2020-05-20",
      "2020-05-21",
      "2020-05-22",
      "2020-05-23",
      "2020-05-24",
      "2020-05-25",
      "2020-05-26",
      "2020-05-27",
      "2020-05-28",
      "2020-05-29",
      "2020-05-30",
      "2020-05-31",
      "2020-06-01",
      "2020-06-02",
      "2020-06-03",
      "2020-06-04",
      "2020-06-05",
      "2020-06-06",
      "2020-06-07",
      "2020-06-08",
      "2020-06-09",
      "2020-06-10",
      "2020-06-11",
      "2020-06-12",
      "2020-06-13",
      "2020-06-14",
      "2020-06-15",
      "2020-06-16",
      "2020-06-17",
      "2020-06-18",
      "2020-06-19",
      "2020-06-20",
      "2020-06-21",
      "2020-06-22",
      "2020-06-23",
      "2020-06-24",
      "2020-06-25",
      "2020-06-26",
      "2020-06-27",
      "2020-06-28",
      "2020-06-29",
      "2020-06-30",
      "2020-07-01",
      "2020-07-02",
      "2020-07-03",
      "2020-07-04",
      "2020-07-05",
      "2020-07-06",
      "2020-07-07",
      "2020-07-08",
      "2020-07-09",
      "2020-07-10",
      "2020-07-11",
      "2020-07-12",
      "2020-07-13",
      "2020-07-14",
      "2020-07-15",
      "2020-07-16",
      "2020-07-17",
      "2020-07-18",
      "2020-07-19",
      "2020-07-20",
      "2020-07-21",
      "2020-07-22",
      "2020-07-23",
      "2020-07-24",
      "2020-07-25",
      "2020-07-26",
      "2020-07-27",
      "2020-07-28",
      "2020-07-29",
      "2020-07-30",
      "2020-07-31",
      "2020-08-01",
      "2020-08-02",
      "2020-08-03",
      "2020-08-04",
      "2020-08-05",
      "2020-08-06",
      "2020-08-07",
      "2020-08-08",
      "2020-08-09",
      "2020-08-10",
      "2020-08-11",
      "2020-08-12",
      "2020-08-13",
      "2020-08-14",
      "2020-08-15",
      "2020-08-16",
      "2020-08-17",
      "2020-08-18",
      "2020-08-19",
      "2020-08-20",
      "2020-08-21",
      "2020-08-22",
      "2020-08-23",
      "2020-08-24",
      "2020-08-25"],
      cazB:[],
      numefis:''







    },
    created: function () {
      fetch("/values.json")
      .then(r => r.json())
      .then(json => {
      
        this.json=json;
      });

      fetch("/data.txt")
      .then(r => r.json())
      .then(json => {
      
        this.cazB=json;
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


      //        assets/json/sst_bs.json

          axios.get('https://covid19.geo-spatial.org/external/charts_vasile/assets/json/mobilitate_frontiera.json').then(res => {
        //    console.log(res.data);
            this.frontiera=res.data;
            
          });
          
          

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

      
       /*  axios.get('https://2019ncov-api.now.sh/api/cases.json' ).then(res => {
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

      axios.get('https://covid19.geo-spatial.org/api/dashboard/getCasesByCounty').then(res => {
        //  console.log(res.data);
        this.decesepejudete.push(res.data)


      });

    },

    methods: {
      cazuri_pe_judet :function(){
        var zill=[]
        console.log(this.cazB)
     //   this.zile.forEach(element => zill.push(element));
        var count=0;
        var dat=[]
     for(var i=0;i<this.cazB['Sheet1'].length;i++)
     {
      zill.push(this.cazB['Sheet1'][i][0])
     }
     console.log(zill)
     for(var i=0;i<this.ziles.length;i++){
     
       for(var j=0;j<zill.length;j++){
          if(zill[j]==this.ziles[i])  
          count++;

         }
         dat.push({data_init:this.ziles[i],data_val:count})
         count=0
    }

  //   this.cazB['Sheet1'].forEach(element => zill.push(element));
       console.log(dat)
      var t=0;
       for(var i=0;i<dat.length;i++){
         t +=dat[i]['data_val']
       }
       console.log(t)

       this.JSONToCSVConvertor2(dat, "Cazuri_Suceava", true, "Cazuri_Su")

      },/*
      videoChoosen(event){
        this.numefis = event.target.files[0].name;
        console.log(this)
    },*/
      decese_but:function(){
       
        var data_sheet=''
        var url = "decese/data.xlsx";
        var oReq = new XMLHttpRequest();
        oReq.open("GET", url, true);
        oReq.responseType = "arraybuffer";
        
        console.log(oReq)
        oReq.onload = function(e) {
        //  var zile=["3/4/2020","3/5/2020","3/6/2020","3/7/2020","3/8/2020","3/9/2020","3/10/2020","3/11/2020","3/12/2020","3/13/2020","3/14/2020","3/15/2020","3/16/2020","3/17/2020","3/18/2020","3/19/2020","3/20/2020","3/21/2020","3/22/2020","3/23/2020","3/24/2020","3/25/2020","3/26/2020","3/27/2020","3/28/2020","3/29/2020","3/30/2020","3/31/2020","4/1/2020","4/2/2020","4/3/2020","4/4/2020","4/5/2020","4/6/2020","4/7/2020","4/8/2020","4/9/2020","4/10/2020","4/11/2020","4/12/2020","4/13/2020","4/14/2020","4/15/2020","4/16/2020","4/17/2020","4/18/2020","4/19/2020","4/20/2020","4/21/2020","4/22/2020","4/23/2020","4/24/2020","4/25/2020","4/26/2020","4/27/2020","4/28/2020","4/29/2020","4/30/2020","5/1/2020","5/2/2020","5/3/2020","5/4/2020","5/5/2020","5/6/2020","5/7/2020","5/8/2020","5/9/2020","5/10/2020","5/11/2020","5/12/2020","5/13/2020","5/14/2020","5/15/2020","5/16/2020","5/17/2020","5/18/2020","5/19/2020","5/20/2020","5/21/2020","5/22/2020","5/23/2020","5/24/2020","5/25/2020","5/26/2020","5/27/2020","5/28/2020","5/29/2020","5/30/2020","5/31/2020","6/1/2020","6/2/2020","6/3/2020","6/4/2020","6/5/2020","6/6/2020","6/7/2020","6/8/2020","6/9/2020","6/10/2020","6/11/2020","6/12/2020","6/13/2020","6/14/2020","6/15/2020","6/16/2020","6/17/2020","6/18/2020","6/19/2020","6/20/2020","6/21/2020","6/22/2020","6/23/2020","6/24/2020","6/25/2020","6/26/2020","6/27/2020","6/28/2020","6/29/2020","6/30/2020","7/1/2020","7/2/2020","7/3/2020","7/4/2020","7/5/2020","7/6/2020","7/7/2020","7/8/2020","7/9/2020","7/10/2020","7/11/2020","7/12/2020","7/13/2020","7/14/2020","7/15/2020","7/16/2020","7/17/2020","7/18/2020","7/19/2020","7/20/2020","7/21/2020","7/22/2020","7/23/2020","7/24/2020","7/25/2020","7/26/2020","7/27/2020","7/28/2020","7/29/2020","7/30/2020","7/31/2020","8/1/2020","8/2/2020","8/3/2020","8/4/2020","8/5/2020","8/6/2020","8/7/2020","8/8/2020","8/9/2020","8/10/2020","8/11/2020","8/12/2020","8/13/2020","8/14/2020","8/15/2020","8/16/2020","8/17/2020","8/18/2020","8/19/2020","8/20/2020","8/21/2020","8/22/2020","8/23/2020","8/24/2020","8/25/2020","8/26/2020","8/27/2020","8/28/2020","8/29/2020","8/30/2020","8/31/2020","9/1/2020","9/2/2020","9/3/2020","9/4/2020","9/5/2020","9/6/2020","9/7/2020","9/8/2020","9/9/2020","9/10/2020","9/11/2020","9/12/2020","9/13/2020","9/14/2020","9/15/2020","9/16/2020","9/17/2020","9/18/2020","9/19/2020","9/20/2020","9/21/2020","9/22/2020","9/23/2020","9/24/2020","9/25/2020","9/26/2020","9/27/2020","9/28/2020","9/29/2020","9/30/2020","10/1/2020"]
          var zile=["3/4/20","3/5/20","3/6/20","3/7/20","3/8/20","3/9/20","3/10/20","3/11/20","3/12/20","3/13/20","3/14/20","3/15/20","3/16/20","3/17/20","3/18/20","3/19/20","3/20/20","3/21/20","3/22/20","3/23/20","3/24/20","3/25/20","3/26/20","3/27/20","3/28/20","3/29/20","3/30/20","3/31/20","4/1/20","4/2/20","4/3/20","4/4/20","4/5/20","4/6/20","4/7/20","4/8/20","4/9/20","4/10/20","4/11/20","4/12/20","4/13/20","4/14/20","4/15/20","4/16/20","4/17/20","4/18/20","4/19/20","4/20/20","4/21/20","4/22/20","4/23/20","4/24/20","4/25/20","4/26/20","4/27/20","4/28/20","4/29/20","4/30/20","5/1/20","5/2/20","5/3/20","5/4/20","5/5/20","5/6/20","5/7/20","5/8/20","5/9/20","5/10/20","5/11/20","5/12/20","5/13/20","5/14/20","5/15/20","5/16/20","5/17/20","5/18/20","5/19/20","5/20/20","5/21/20","5/22/20","5/23/20","5/24/20","5/25/20","5/26/20","5/27/20","5/28/20","5/29/20","5/30/20","5/31/20","6/1/20","6/2/20","6/3/20","6/4/20","6/5/20","6/6/20","6/7/20","6/8/20","6/9/20","6/10/20","6/11/20","6/12/20","6/13/20","6/14/20","6/15/20","6/16/20","6/17/20","6/18/20","6/19/20","6/20/20","6/21/20","6/22/20","6/23/20","6/24/20","6/25/20","6/26/20","6/27/20","6/28/20","6/29/20","6/30/20","7/1/20","7/2/20","7/3/20","7/4/20","7/5/20","7/6/20","7/7/20","7/8/20","7/9/20","7/10/20","7/11/20","7/12/20","7/13/20","7/14/20","7/15/20","7/16/20","7/17/20","7/18/20","7/19/20","7/20/20","7/21/20","7/22/20","7/23/20","7/24/20","7/25/20","7/26/20","7/27/20","7/28/20","7/29/20","7/30/20","7/31/20","8/1/20","8/2/20","8/3/20","8/4/20","8/5/20","8/6/20","8/7/20","8/8/20","8/9/20","8/10/20","8/11/20","8/12/20","8/13/20","8/14/20","8/15/20","8/16/20","8/17/20","8/18/20","8/19/20","8/20/20","8/21/20","8/22/20","8/23/20","8/24/20","8/25/20","8/26/20","8/27/20","8/28/20","8/29/20","8/30/20","8/31/20","9/1/20","9/2/20","9/3/20","9/4/20","9/5/20","9/6/20","9/7/20","9/8/20","9/9/20","9/10/20","9/11/20","9/12/20","9/13/20","9/14/20","9/15/20","9/16/20","9/17/20","9/18/20","9/19/20","9/20/20","9/21/20","9/22/20","9/23/20","9/24/20","9/25/20","9/26/20","9/27/20","9/28/20","9/29/20","9/30/20","10/1/20"]

                    var arraybuffer = oReq.response;

          /* convert data to binary string */
          var data = new Uint8Array(arraybuffer);
          var arr = new Array();
          for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
          var bstr = arr.join("");

          /* Call XLSX */
          var workbook = XLSX.read(bstr, {
              type: "binary"
          });

          /* DO SOMETHING WITH workbook HERE */
          var first_sheet_name = workbook.SheetNames[0];
          /* Get worksheet */
          var zill=[]
          var dat=[]
          var count=0
          var num=''
          var worksheet = workbook.Sheets[first_sheet_name];
          data_sheet=XLSX.utils.sheet_to_json(worksheet, {raw: false})
         // console.log(data_sheet);
          num=data_sheet[6]["y"]
          for(let i=0;i<data_sheet.length;i++)
          zill.push(data_sheet[i]['Decedat la data:'].toString())
        //  zill.push(data_sheet[i]['Decedat la data:'].replace(/\//g, '-').toString())

          console.log(zill);
          var t=0;
          for(var i=0;i<zile.length;i++){
            t+=1
     
            for(var j=0;j<zill.length;j++){
               if(zill[j]==zile[i])  
               count++;
     
              }
              dat.push({data_init:zile[i],zile:t,data_val:count})
              count=0

         }
         console.log(dat);
         JSONToCSV(dat,'', false,num)

         function JSONToCSV  (JSONData, ReportTitle, ShowLabel, numefisier) {
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
        }
         

      }

      oReq.send();


      },
      caz_but:function(){
       
        var data_sheet=''
        var url = "caz/caz.xlsx";
        var oReq = new XMLHttpRequest();
        oReq.open("GET", url, true);
        oReq.responseType = "arraybuffer";
        
        console.log(oReq)
        oReq.onload = function(e) {
         // var zile=["3/4/2020","3/5/2020","3/6/2020","3/7/2020","3/8/2020","3/9/2020","3/10/2020","3/11/2020","3/12/2020","3/13/2020","3/14/2020","3/15/2020","3/16/2020","3/17/2020","3/18/2020","3/19/2020","3/20/2020","3/21/2020","3/22/2020","3/23/2020","3/24/2020","3/25/2020","3/26/2020","3/27/2020","3/28/2020","3/29/2020","3/30/2020","3/31/2020","4/1/2020","4/2/2020","4/3/2020","4/4/2020","4/5/2020","4/6/2020","4/7/2020","4/8/2020","4/9/2020","4/10/2020","4/11/2020","4/12/2020","4/13/2020","4/14/2020","4/15/2020","4/16/2020","4/17/2020","4/18/2020","4/19/2020","4/20/2020","4/21/2020","4/22/2020","4/23/2020","4/24/2020","4/25/2020","4/26/2020","4/27/2020","4/28/2020","4/29/2020","4/30/2020","5/1/2020","5/2/2020","5/3/2020","5/4/2020","5/5/2020","5/6/2020","5/7/2020","5/8/2020","5/9/2020","5/10/2020","5/11/2020","5/12/2020","5/13/2020","5/14/2020","5/15/2020","5/16/2020","5/17/2020","5/18/2020","5/19/2020","5/20/2020","5/21/2020","5/22/2020","5/23/2020","5/24/2020","5/25/2020","5/26/2020","5/27/2020","5/28/2020","5/29/2020","5/30/2020","5/31/2020","6/1/2020","6/2/2020","6/3/2020","6/4/2020","6/5/2020","6/6/2020","6/7/2020","6/8/2020","6/9/2020","6/10/2020","6/11/2020","6/12/2020","6/13/2020","6/14/2020","6/15/2020","6/16/2020","6/17/2020","6/18/2020","6/19/2020","6/20/2020","6/21/2020","6/22/2020","6/23/2020","6/24/2020","6/25/2020","6/26/2020","6/27/2020","6/28/2020","6/29/2020","6/30/2020","7/1/2020","7/2/2020","7/3/2020","7/4/2020","7/5/2020","7/6/2020","7/7/2020","7/8/2020","7/9/2020","7/10/2020","7/11/2020","7/12/2020","7/13/2020","7/14/2020","7/15/2020","7/16/2020","7/17/2020","7/18/2020","7/19/2020","7/20/2020","7/21/2020","7/22/2020","7/23/2020","7/24/2020","7/25/2020","7/26/2020","7/27/2020","7/28/2020","7/29/2020","7/30/2020","7/31/2020","8/1/2020","8/2/2020","8/3/2020","8/4/2020","8/5/2020","8/6/2020","8/7/2020","8/8/2020","8/9/2020","8/10/2020","8/11/2020","8/12/2020","8/13/2020","8/14/2020","8/15/2020","8/16/2020","8/17/2020","8/18/2020","8/19/2020","8/20/2020","8/21/2020","8/22/2020","8/23/2020","8/24/2020","8/25/2020","8/26/2020","8/27/2020","8/28/2020","8/29/2020","8/30/2020","8/31/2020","9/1/2020","9/2/2020","9/3/2020","9/4/2020","9/5/2020","9/6/2020","9/7/2020","9/8/2020","9/9/2020","9/10/2020","9/11/2020","9/12/2020","9/13/2020","9/14/2020","9/15/2020","9/16/2020","9/17/2020","9/18/2020","9/19/2020","9/20/2020","9/21/2020","9/22/2020","9/23/2020","9/24/2020","9/25/2020","9/26/2020","9/27/2020","9/28/2020","9/29/2020","9/30/2020","10/1/2020"]
          var zile=["2020-03-04","2020-03-05","2020-03-06","2020-03-07","2020-03-08","2020-03-09","2020-03-10","2020-03-11","2020-03-12","2020-03-13","2020-03-14","2020-03-15","2020-03-16","2020-03-17","2020-03-18","2020-03-19","2020-03-20","2020-03-21","2020-03-22","2020-03-23","2020-03-24","2020-03-25","2020-03-26","2020-03-27","2020-03-28","2020-03-29","2020-03-30","2020-03-31","2020-04-01","2020-04-02","2020-04-03","2020-04-04","2020-04-05","2020-04-06","2020-04-07","2020-04-08","2020-04-09","2020-04-10","2020-04-11","2020-04-12","2020-04-13","2020-04-14","2020-04-15","2020-04-16","2020-04-17","2020-04-18","2020-04-19","2020-04-20","2020-04-21","2020-04-22","2020-04-23","2020-04-24","2020-04-25","2020-04-26","2020-04-27","2020-04-28","2020-04-29","2020-04-30","2020-05-01","2020-05-02","2020-05-03","2020-05-04","2020-05-05","2020-05-06","2020-05-07","2020-05-08","2020-05-09","2020-05-10","2020-05-11","2020-05-12","2020-05-13","2020-05-14","2020-05-15","2020-05-16","2020-05-17","2020-05-18","2020-05-19","2020-05-20","2020-05-21","2020-05-22","2020-05-23","2020-05-24","2020-05-25","2020-05-26","2020-05-27","2020-05-28","2020-05-29","2020-05-30","2020-05-31","2020-06-01","2020-06-02","2020-06-03","2020-06-04","2020-06-05","2020-06-06","2020-06-07","2020-06-08","2020-06-09","2020-06-10","2020-06-11","2020-06-12","2020-06-13","2020-06-14","2020-06-15","2020-06-16","2020-06-17","2020-06-18","2020-06-19","2020-06-20","2020-06-21","2020-06-22","2020-06-23","2020-06-24","2020-06-25","2020-06-26","2020-06-27","2020-06-28","2020-06-29","2020-06-30","2020-07-01","2020-07-02","2020-07-03","2020-07-04","2020-07-05","2020-07-06","2020-07-07","2020-07-08","2020-07-09","2020-07-10","2020-07-11","2020-07-12","2020-07-13","2020-07-14","2020-07-15","2020-07-16","2020-07-17","2020-07-18","2020-07-19","2020-07-20","2020-07-21","2020-07-22","2020-07-23","2020-07-24","2020-07-25","2020-07-26","2020-07-27","2020-07-28","2020-07-29","2020-07-30","2020-07-31","2020-08-01","2020-08-02","2020-08-03","2020-08-04","2020-08-05","2020-08-06","2020-08-07","2020-08-08","2020-08-09","2020-08-10","2020-08-11","2020-08-12","2020-08-13","2020-08-14","2020-08-15","2020-08-16","2020-08-17","2020-08-18","2020-08-19","2020-08-20","2020-08-21","2020-08-22","2020-08-23","2020-08-24","2020-08-25","2020-08-26","2020-08-27"]

                    var arraybuffer = oReq.response;

          /* convert data to binary string */
          var data = new Uint8Array(arraybuffer);
          var arr = new Array();
          for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
          var bstr = arr.join("");

          /* Call XLSX */
          var workbook = XLSX.read(bstr, {
              type: "binary"
          });

          /* DO SOMETHING WITH workbook HERE */
          var first_sheet_name = workbook.SheetNames[0];
          /* Get worksheet */
          var zill=[]
          var dat=[]
          var count=0
          var num=''
          var worksheet = workbook.Sheets[first_sheet_name];
          data_sheet=XLSX.utils.sheet_to_json(worksheet, {raw: false})
          num=data_sheet[6]["Județ"]
          console.log(data_sheet[7]);
          for(let i=0;i<data_sheet.length;i++)
          zill.push(data_sheet[i]["Dată diagnostic"])
        //  zill.push(data_sheet[i]['Decedat la data:'].replace(/\//g, '-').toString())

          console.log(zill);
          var t=0;
          var x=0;
          
          for(var i=0;i<zile.length;i++){
            t+=1
     
            for(var j=0;j<=zill.length;j++){
               if(zill[j]==zile[i]) {
                 count++;
               } 
               
                        
               }
               


              dat.push({data_init:zile[i],zile:t,data_val:count})
              count=0

         }
         
       //  dat.push({data_init:"nedefinit",zile:t+1,data_val:x})
         console.log(dat);
         JSONToCSV(dat,'', false,num)

         function JSONToCSV  (JSONData, ReportTitle, ShowLabel, numefisier) {
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
        }
         

      }

      oReq.send();


      },
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

       this.downloadex7(JSON.stringify(this.frontiera),'frontiera.txt','text/plain')


      },
      ex11:function(){
        axios.get('https://covid19.geo-spatial.org/external/charts_vasile/assets/json/sst_bs.json').then(res => {
            
            this.JSONToCSVConvertor2(res.data, "Temperatura-apei", true, "Temperatura-apei")
 
           });
      },
      ex10:function(){
        var obj=[]
        var p=1
          for(let i=0;i<this.waze_bu.length;i++){
            obj.push({"data":new Date(this.waze_bu[i]["time"]).toString().substring(3,15),"ziua":p,"bucuresti":Math.round(this.waze_bu[i]["value"]),"timisoara":Math.round(this.waze_tim[i]["value"]),"costanta":Math.round(this.waze_costanta[i]["value"]),
            "iasi":Math.round(this.waze_iasi[i]["value"]),"cluj_napoca":Math.round(this.waze_cluj[i]["value"]),"brasov":Math.round(this.waze_brasov[i]["value"])})
            p++
          }
          
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
        var dates=[]



        this.aerlive[0].ica_data.forEach(function (o, index) {
          obj[0][index] =(o.x.substring(6, 10)+"-"+o.x.substring(3, 5)+"-"+o.x.substring(0, 2))

        }
        );

/*
        obj[0].forEach(function (o, index) {
          dates[index] =  o.replace( "-", ' ' );

        }
        );*/

     //   obj[0]=dates

        this.aerlive[0].co_data.forEach(function (o, index) {
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

        this.aerlive[0].pm10_data.forEach(function (o, index) {
          obj[4][index] = (Math.round(o.y ))

        }
        );
        this.aerlive[0].pm25_data.forEach(function (o, index) {
          obj[5][index] = (Math.round(o.y ))

        }
        );

        this.aerlive[0].so2_data.forEach(function (o, index) {
          obj[6][index] = ( Math.round(o.y ))

        }
        );

        
       console.log(obj)
        for (let i = 0; i < obj[0].length; i++) {

          sec[i] = ({data: obj[0][i], "Co": JSON.stringify(obj[1][i]), "ica": JSON.stringify(obj[2][i]), "No2": JSON.stringify(obj[3][i])
            , "Pm10": JSON.stringify(obj[4][i]), "Pm2.5": JSON.stringify(obj[5][i]), "So2": JSON.stringify(obj[6][i])
          })
        }

        sec.sort(function(a, b) {
          var c = new Date(a.data);
          var d = new Date(b.data);
     //     console.log(c)
   //       console.log(d)
          return c-d;
          
      });

     //   console.log(sec)
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
