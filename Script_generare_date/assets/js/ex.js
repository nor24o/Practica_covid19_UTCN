function dropHandler(ev) {
    console.log('File(s) dropped');
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === 'file') {
          var file = ev.dataTransfer.items[i].getAsFile();
          console.log('... file[' + i + '].name = ' + file.name);
          console.log(file.data)
         
          // caz_but(file.name)











        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
      }

    }

  }

  function dragOverHandler(ev) {
    console.log('File(s) in drop zone'); 
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }







  function caz_but(title){
       
    var data_sheet=''
    var url = "caz/"+title;
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


  }