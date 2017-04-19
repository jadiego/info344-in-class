document.querySelector("#citySearchButton").addEventListener("click", function() {
    var city = document.querySelector("#citySearchBox").value
    fetch("http://138.68.253.49/zips/city/" + city)
    .then(function (resp) {
        return resp.json()
    })
    .then(function(data) {
        console.log(data);
        var table = document.querySelector("#resultstable");
        for (var i = 0; i < data.length; i++) {
            var tr = document.createElement("tr");
            var citytd = document.createElement("td") 
            citytd.innerText = data[i]["city"];
            var statetd = document.createElement("td")
            statetd.innerText = data[i]["state"];
            var ziptd = document.createElement("td")
            ziptd.innerText = data[i]["zip"];
            tr.appendChild(citytd);
            tr.appendChild(statetd);
            tr.appendChild(ziptd);
            table.appendChild(tr);
        }
    })
    .catch(function(err) {
        console.log(err)
    })
})