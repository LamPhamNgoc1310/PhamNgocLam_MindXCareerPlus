//Init the array
const revenue = [100,300,400,500,600,700,200];

revenue.push(1000)
let sum = 0;
for (let i = 0; i < revenue.length; i++) {
    console.log("Doanh thu cua ngay thu", i+1, "la: $", revenue[i]);
    // sum of revenue
    sum = sum + revenue[i];
}
console.log("Tong doanh thu cua cong ty la: ", sum);
//Init another array
const bookRevenue = [123, 10, 200, 400]
//Merge the arrays above
const mergedRevenue = revenue.concat(bookRevenue)

console.log(mergedRevenue);


