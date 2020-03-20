$(document).ready(function() {

    var currency = JSON.parse(localStorage.getItem("cryptoCurrency"));

    generateSearch();
    
    getCryptoCurrencyValues()

    function generateSearch() {

        let output = `
        <div class="container" style="margin-top: 70px;">
            <div class="row">
                <a class="psearch">Search for : &nbsp;</a>
                <input type="text" class="form-control" id="input" placeholder="BTC-USD">
                <button type="submit" class="btn btn-primary btn-lg" id="searchButton"><i class="fa fa-search"></i></button>
            </div>
        </div>`

        document.getElementById('searchCity').innerHTML = output;

    }

    // addButton

    // resultSearch

    function getCryptoCurrencyValues() {

        var queryURL = "https://query1.finance.yahoo.com/v7/finance/quote?lang=en-US®ion=US&corsDomain=finance.yahoo.com&symbols=BTC-USD";
                
        $.ajax({
            url: queryURL,
            method: "GET"

        }).then(function(response) {
            console.log(response);

            var currency = response.result.currency;

            let output = `
            <table>
                <tr>
                    <td>MOEDA</td>
                </tr>
                <tr>
                    <td>${currency}</td>
                </tr>
            </table>
            `
        });

        

        document.getElementById('resultCryptoCurrency').innerHTML = output;

    }
})
