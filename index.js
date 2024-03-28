// let drinktr = document.querySelectorAll('.drink-tr');
//
// arr
//
// drinktr.forEach(function (tr) {
//     tr.addEventListener('click', function () {
//
//         // Tạo một phần tử mới <li> để thêm vào danh sách order
//         let listItem = document.createElement('li');
//         listItem.textContent = tr.textContent;
//
//         // Thêm phần tử mới vào danh sách order
//         document.getElementById('oderList').appendChild(listItem);
//
//     });
// });
//
// // let dinkList = document.getElementById("drinktr");
// // let searchDrinkName = document.getElementById("searchDrinkName");
// //
// // searchDrinkName.addEventListener("keyup", function () {
// //     let searchItem = searchDrinkName.value.toLowerCase();
// //
// //     //lặp qua các sản phẩm và ẩn hiện các sản phẩm tương ứng dựa trên kết quả tìm kiem
// //     Array.form(dinkList.getElementsByTagName("li")).forEach(function (drink) {
// //         let drinkName = drink.textContent.toLowerCase();
// //         if (drinkName.includes(searchItem)){
// //             drink.style.display = "block"; //hiện sản phẩm nếu tìm thấy kết quả tương ứng
// //         } else {
// //             drink.style.display = "none"; //ẩn sản phẩm nếu không tìm thấy sản phẩm tương ứng
// //         }
// //     });
// // });
// // var drinks = [{id: 1, name: 'nuoc a', price: '123'}];
// // let order = [{product_id: 1, quantity: 2}]
//


let drinks = [
    {name: 'nuoc a', price: '123'},
    {name: 'nuoc b', price: '1234'},
    {name: 'nuoc c', price: '123'},
    {name: 'nuoc d', price: '123'}
];

function showAll(arr) {
    let html = '';
    for (let i = 0; i < arr.length; i++) {
        html += `<tr>
                        <td>${arr[i].name}</td>
                        <td>${arr[i].price}</td>
                        <td><button onclick="addDrink('${arr[i].name}')">Thêm món</button></td>
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
                        <td>${order[i].name}</td>
                        <td>${order[i].price}</td>
                        <td>${order[i].sl}</td>
                        <td>${order[i].sl * order[i].price}</td>
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