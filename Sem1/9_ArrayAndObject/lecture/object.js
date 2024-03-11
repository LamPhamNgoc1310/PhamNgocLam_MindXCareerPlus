const product = {
    title: "Khaki",
    quantity: "2",
    price: "$20",
    sizes: ['S','M','L','XL','XXL'],
    image: {
        src: 'https://placehold.it/',
        width: 200,
        height: 300,
    }
};
for (let objectKey in product){
    const objectValue = product[objectKey];
    console.log("Product key: " + objectKey);
    console.log("Values: " + objectValue);
}
console.log("Infomation: " + product.title)