$(document).ready(function(e) {

$("#file2").change(function(e) {
    e.preventDefault();
  //  editorAce1.setValue("Please wait while loading your file.");
    handleFile(e);
});

$("#browse2").click(function(e) {
    e.preventDefault();
    $("#file2").click();
});



function handleFile(e) {
    var files = e.target.files;
    var i, f;
    for (i = 0, f = files[i]; i != files.length; ++i) {
        var reader = new FileReader();
        var name = f.name;
        reader.onload = function(e) {
            try {
                var data = $.trim(e.target.result);
               // console.log(name)

                var workbook = XLSX.read(data, {
                    type: 'binary'
                });
                var zile=["3/4/20","3/5/20","3/6/20","3/7/20","3/8/20","3/9/20","3/10/20","3/11/20","3/12/20","3/13/20","3/14/20","3/15/20","3/16/20","3/17/20","3/18/20","3/19/20","3/20/20","3/21/20","3/22/20","3/23/20","3/24/20","3/25/20","3/26/20","3/27/20","3/28/20","3/29/20","3/30/20","3/31/20","4/1/20","4/2/20","4/3/20","4/4/20","4/5/20","4/6/20","4/7/20","4/8/20","4/9/20","4/10/20","4/11/20","4/12/20","4/13/20","4/14/20","4/15/20","4/16/20","4/17/20","4/18/20","4/19/20","4/20/20","4/21/20","4/22/20","4/23/20","4/24/20","4/25/20","4/26/20","4/27/20","4/28/20","4/29/20","4/30/20","5/1/20","5/2/20","5/3/20","5/4/20","5/5/20","5/6/20","5/7/20","5/8/20","5/9/20","5/10/20","5/11/20","5/12/20","5/13/20","5/14/20","5/15/20","5/16/20","5/17/20","5/18/20","5/19/20","5/20/20","5/21/20","5/22/20","5/23/20","5/24/20","5/25/20","5/26/20","5/27/20","5/28/20","5/29/20","5/30/20","5/31/20","6/1/20","6/2/20","6/3/20","6/4/20","6/5/20","6/6/20","6/7/20","6/8/20","6/9/20","6/10/20","6/11/20","6/12/20","6/13/20","6/14/20","6/15/20","6/16/20","6/17/20","6/18/20","6/19/20","6/20/20","6/21/20","6/22/20","6/23/20","6/24/20","6/25/20","6/26/20","6/27/20","6/28/20","6/29/20","6/30/20","7/1/20","7/2/20","7/3/20","7/4/20","7/5/20","7/6/20","7/7/20","7/8/20","7/9/20","7/10/20","7/11/20","7/12/20","7/13/20","7/14/20","7/15/20","7/16/20","7/17/20","7/18/20","7/19/20","7/20/20","7/21/20","7/22/20","7/23/20","7/24/20","7/25/20","7/26/20","7/27/20","7/28/20","7/29/20","7/30/20","7/31/20","8/1/20","8/2/20","8/3/20","8/4/20","8/5/20","8/6/20","8/7/20","8/8/20","8/9/20","8/10/20","8/11/20","8/12/20","8/13/20","8/14/20","8/15/20","8/16/20","8/17/20","8/18/20","8/19/20","8/20/20","8/21/20","8/22/20","8/23/20","8/24/20","8/25/20","8/26/20","8/27/20","8/28/20","8/29/20","8/30/20","8/31/20","9/1/20","9/2/20","9/3/20"]
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
     JSONToCSV(dat,'', false,num)
     console.log(dat)
                
            //    editorAce1.getSession().setUseWorker(true);
             //   editorAce1.setValue(vkbeautify.json(to_json(workbook), 4));
            } catch (e) {
                if(name.split(".").pop() == "csv")
                {
                    console.log(workbook)
             //       editorAce1.setValue(vkbeautify.json(CSV2JSON(data), 4));
                }else
                {
                    console.log(workbook)
          //          editorAce1.getSession().setUseWorker(false);
          //          editorAce1.setValue("Please select an excel file.");
                }
            }
        };
        reader.readAsBinaryString(f);
    }
}

});


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