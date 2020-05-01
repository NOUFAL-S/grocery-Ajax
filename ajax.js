function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            
            var products=JSON.parse(this.responseText);
            
            var col = [];
            for (var i = 0; i < products.length; i++) {
                for (var key in products[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }
    
            // CREATE DYNAMIC TABLE.
            var table = document.createElement("table");
    
            // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
    
            var tr = table.insertRow(-1);                   // TABLE ROW.
    
            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");      // TABLE HEADER.
                th.innerHTML = col[i];
                tr.appendChild(th);
            }
    
            // ADD JSON DATA TO THE TABLE AS ROWS.
            for (var i = 0; i < products.length; i++) {
    
                tr = table.insertRow(-1);
    
                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = products[i][col[j]];
                }
            }
    
            // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
            var divContainer = document.getElementById("showData");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
        }
    }
    xhttp.open("GET","list.json",true);
    xhttp.send();
}



















