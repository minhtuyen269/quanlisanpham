

let drinks = [
    {name: 'Coffe nguyên chất', price: '29000'},
    {name: 'Coffe sữa đá', price: '29000'},
    {name: 'Coffe bạc xỉu', price: '29000'},
    {name: 'Trà sen vàng', price: '45000'},
    {name: 'Trà thạch đào', price: '45000'},
    {name: 'Trà thạch vải', price: '45000'},
    {name: 'Trà xanh đậu đỏ', price: '45000'},
    {name: 'Freeze trà xanh', price: '55000'},
    {name: 'Caramel phin Freeze', price: '55000'},
    {name: 'Freeze Socola', price: '55000'},
    {name: 'Bánh chuối', price: '25000'},
    {name: 'Bánh phô mai chanh dây', price: '25000'},
    {name: 'Bánh su kem', price: '25000'},
    {name: 'Bánh Tiramisu', price: '25000'},
    {name: 'Bánh Mousse đào', price: '25000'},
    {name: 'Phindi hạnh nhân', price: '49000'},
    {name: 'Phindi kem sữa', price: '49000'},
    {name: 'Phindi choco', price: '49000'},

];

function showAll(arr) {
    let html = '';
    for (let i = 0; i < arr.length; i++) {
        html += `<tr>
                        <th style="text-align: left">${arr[i].name}</th>
                        <th>${arr[i].price}đ</th>
                        <th><button onclick="addDrink('${arr[i].name}')">Thêm món</button></th>
                    </tr>`;
    }
    document.getElementById('list-drink').innerHTML = html;
}

function search() {
    let keyword = document.getElementById('searchDrinkName').value;
    let result = [];

    for (let i = 0; i < drinks.length; i++) {
        if (drinks[i].name.includes(keyword)) {
            result.push(drinks[i]);
        }
    }
    showAll(result)
}


function findDrinkByName(name) {
    for (let i = 0; i < drinks.length; i++) {
        if (drinks[i].name === name) {
            return drinks[i];
            break;
        }
    }
}

let order = [];

function addDrink(name) {
    let drink = findDrinkByName(name);
    let order_item;
    for (let i = 0; i < order.length; i++) {
        if (order[i].name === drink.name) {
            order_item = order[i];
            break;
        }
    }
    if (order_item !== undefined) {
        order_item.sl = order_item.sl + 1;
    } else {
        order.push({name: drink.name, price: drink.price, sl: 1})
    }
    showOrder(order)

}

function showOrder(order) {
    let html = "";
    for (let i = 0; i < order.length; i++) {
        html += `<tr>
                        <td style="text-align: left">${order[i].name}</td>
                        <td>${order[i].price}</td>
                        <td>${order[i].sl}</td>
                        <td>${order[i].sl * order[i].price}đ</td>
                        <td><button onclick="deleteDrink('${order[i].name}')">Xóa</button></td>
                    </tr>`;
    }
    document.getElementById("orderList").innerHTML = html;

    let sum = 0
    for (let i = 0; i < order.length; i++) {
        sum += order[i].price * order[i].sl
        document.getElementById("sum").innerHTML = "TỔNG THANH TOÁN = " + sum + "đ";
    }
}

function findIndexByName(name) {
    for (let i = 0; i < order.length; i++) {
        if (order[i].name === name) {
            return i;
            break;
        }
    }
    return -1;
}

function deleteDrink(name) {
    let index = findIndexByName(name);
    if (index == -1) {
        return;
    }
    let item = order[index];
    if (item.sl > 1) {
        item.sl--
    } else {
        order.splice(index, 1);
    }
    showOrder(order)
}
showAll(drinks)

// name == 'nuoc b'
// let drinks = showOrder(order);
// let clearItem;
// for (let i = 0; i < order.length; i++) {
//     if (order[i].name === drinks.name)
//         clearItem = order[i];
//
// }
// order.splice({name: drink.name, price: drink.price, sl: 1});