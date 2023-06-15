import  axios  from 'axios';


const getCurrency = async () => {
    let currency = await axios.get("https://openexchangerates.org/api/latest.json?app_id=4fb54a06490f4d09a8bf0049e7b9d7eb");
    return currency.data.rates.EGP;
}

const getProducts = async () => {
    let translatedResponse = [];
    let response = await axios.get("https://api.escuelajs.co/api/v1/products");
    let allProduct = response.data;
    let egpCurrency = await getCurrency();


    allProduct.forEach(obj => {
        let catogryObj = {
            category: {
                id: obj.category.id,
                name: obj.category.name
            },
            products: [],
        };
        translatedResponse.push(catogryObj);
    });
    const key = "id";
    translatedResponse = [...new Map(translatedResponse.map(item =>
        [item.category[key], item]
    )).values()];


    translatedResponse.forEach(ele => {
        let sameCatogriy = [];
        allProduct.forEach(obj => {
            if (ele.category.id == obj.category.id) {
                obj.price = Number((obj.price*egpCurrency).toFixed(2));
                sameCatogriy.push(obj);
            }
        })
        ele.products = sameCatogriy;
    });

    return translatedResponse;

    
}
console.log("#############");

console.log(await getProducts());




