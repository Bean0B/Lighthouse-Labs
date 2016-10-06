var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }

];

var objectsalesdatacompiler = {}

  for (var index in companySalesData) {
    objectsalesdatacompiler = companySalesData[index].sales

    return objectsalesdatacompiler
}
console.log(objectsalesdatacompiler)

//console.log(companySalesData[0].sales)

// function calculateSalesTax(salesData, taxRates) {
//   // Implement your code here


// }

// var results = salesTaxReport(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/