var sale1;
var sale2;
var sale3;
var sale;
var calculateTax;

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };

calculateTax = function () {
		sale.tax = sale.price * sale.taxRate / 100;
		sale.total = sale.price + sale.tax;
   	console.log("price = $" + sale.price);
  	console.log("tax @ " + sale.taxRate + "% = $" + sale.tax);
  	console.log("total cost = $" + sale.total);
};

sale = sale1;
calculateTax();

sale = sale2;
calculateTax();

sale = sale3;
calculateTax();
