import { tablesCopy } from "./database.js";
const tables = tablesCopy();
import { menuCopy } from "./database.js";
const menu = menuCopy();
// import { serversCopy } from "./database.js";
// const servers = serversCopy();
//.
// /*--------------------Restaurant_2 Test_6-------Works!!!!----- ---*/

// const display_Table = () => {
//     let MarianaTable = ` `;
//     MarianaTable = `<fieldset class=table>
//     <legend>Table_${tables[1].id} </legend>
//     <ul>`;
//     for (let x in tables[1]) {
//         MarianaTable += `<li class =list>${x}:${tables[1][x]}</li> `;
//     }
//     `</ul>
//     </fieldset>`;
//     document.getElementById("mariana").innerHTML = MarianaTable;
// };
// display_Table();

//.// /*--------------------Restaurant_2 Test_1-------Works!!!!----- ---*/
// const display_Table = () => {
//     const tables = tablesCopy();
//     let MarianaTable = ``;
//     MarianaTable = `<fieldset class=table>
//      <legend>Table_${tables[1].id} </legend>
//      <ul>`;
//     Object.entries(tables[1]).forEach(
//         ([key, value]) =>
//             (MarianaTable += `<li class="list">${key} : ${value}</li>`)
//     );
//     `</ul>
//      </fieldset>`;
//     document.getElementById("mariana").innerHTML = MarianaTable;
// };

// display_Table();

//.// /*--------------------Restaurant_2 Test_1------------ ---*/
//menuID= [4, 5,6, 11],

const display_Table = () => {
    const tables = tablesCopy();

    //for (let x in tables[1].menuID) {
    for (let i = 0; i < menu.length; i++) {
        let item = menu.find((item) => item.id === tables[1]);
        //for (let x in tables[1]) {
        let MarianaTable = ``;

        MarianaTable += `<fieldset class=table>
        <legend>Table_${tables[1].id} </legend>
        <ul>`;
        MarianaTable += `
<li class="list">id: ${tables[1].id}</li>
<li class="list">menuID: ${tables[1].menuID}</li>
<li class="list">menuType: ${tables[1].menuType}</li> 
<li class="list">reservation: ${tables[1].reservation}</li>
<li class="list">orderStatus: ${tables[1].orderStatus}</li>
<li class="list">serverId: ${tables[1].serverId}</li>
<li class="list">guestsNumber: ${tables[1].guestsNumber}</li>
<li class="list">tipPercent: ${tables[1].tipPercent} %</li>`;
        MarianaTable += `</ul>
</fieldset>`;

        document.getElementById("mariana").innerHTML = MarianaTable;
    }
    // }
};

display_Table();
//item.menuItem
/* -----------------Part_1----------------------- */
// /*---------------------------------------------------------------NAV_BAR- THis One Works ---*/
// let navbar = `<section class="nav">
// <ul class="navBar">
//     <a href="#ethan"><li class="navList">ETHAN</li></a>
//     <a href="#mariana"><li class="navList">MARIANA</li></a>
//     <a href="#chase"><li class="navList">CHASE</li></a>
//     <a href="#jimmy"><li class="navList">JIMMY</li></a>
//     <a href="#mason"><li class="navList">MASON</li></a>
// </ul>
// </section>`;
// document.getElementById("navbar").innerHTML = navbar;

// /*---------------------------------------------------------------LOGO- THis One Works ---*/
// let logo = `<img class="img-logo" src="/img_Style/Logo.jpg" alt="restaurant Logo" />`;
// document.getElementById("logo").innerHTML = logo;
// /*-----------------------------------------------------------Top BORDER- THis One Works ---*/

// /* let topBorder =
// ``
// document.getElementById("navbar").innerHTML = navbar;
//  */

// /*--------------------------------------------------------------- BORDER- THis One Works ---*/

// /* let topBorder = document.createElement("div");
// `<div class="border">
// <h3 class="teamName">mason</h3>
// </div>` */

// /*---------------------------------------------------------------FOOTER- THis One Works ---*/

// /* let footer = `<div></div>`
// document.getElementById("footer").innerHTML = footer; */
// /*--------------------------------------------------
// //1-create footerElement
// //let footerElement = document.createElement("Footer");

// //2-add text content to the footer

// /*------------------------------------------Table_4   Table_5   Table_6- THis One Works ---*/

// const tables = [
//     {
//         Reservation: false,
//         id: 4,
//         Reservation_Date: "8 / 6 / 2022",
//         Reservation_Time: "05:00 pm",
//         Waiter_Name: "Elma",
//         Meal: "Lunch",
//         High_Chairs: false,
//         Guests_Number: 7,
//         Soup_Salad: true,
//         Alcohol_Drink: true,
//         Entree: "Stake",
//         Desert: "Ice Cream1",
//         Water: "Sparkling",
//         Order_Status: "Progress",
//         Price: 320.99,
//     },
//     {
//         Reservation: false,
//         id: 5,
//         Reservation_Date: "8 / 6 / 2022",
//         Reservation_Time: "06:00 pm",
//         Waiter_Name: "Elma",
//         Meal: "Lunch",
//         High_Chairs: false,
//         Guests_Number: 5,
//         Soup_Salad: true,
//         Alcohol_Drink: true,
//         Entree: "Fish",
//         Desert: "Ice Cream2",
//         Water: "Sparkling",
//         Order_Status: "Progress",
//         Price: 125.75,
//     },
//     {
//         Reservation: false,
//         id: 6,
//         Reservation_Date: "8 / 6 / 2022",
//         Reservation_Time: "07:00 pm",
//         Waiter_Name: "Elma",
//         Meal: "Lunch",
//         High_Chairs: false,
//         Guests_Number: 2,
//         Soup_Salad: true,
//         Alcohol_Drink: true,
//         Entree: "Chicken",
//         Desert: "Ice Cream3",
//         Water: "Sparkling",
//         Order_Status: "Completed",
//         Price: 110.59,
//     },
// ];
// /* let MarianaTable = ` `;
// for (let table of tables) {
//     MarianaTable += `<fieldset class=table><legend>Table_${table.id} </legend> <ul>`;
//     for (const row in table) {
//         MarianaTable += `<li class =list>${row} : ${table[row]}</li>`;
//     }
//     MarianaTable += `</ul>  </fieldset>`;
// } */

// /*---------------------------------------------------------------Add New Table- THis One Works ---*/

// let newTable = {
//     Reservation: true,
//     id: "New_Table",
//     Reservation_Date: "8 / 11 / 2022",
//     Reservation_Time: "05:00 pm",
//     Waiter_Name: "Sara",
//     Meal: "Dinner",
//     High_Chairs: true,
//     Guests_Number: 8,
//     Soup_Salad: false,
//     Alcohol_Drink: true,
//     Entree: "Sea Food",
//     Desert: "Apple Pie",
//     Water: "Sparkling",
//     Order_Status: "Progress",
//     Price: 256.99,
// };

// for (const nTable of tables) {
//     for (const row in nTable) {
//         if (nTable[row] == "Completed") {
//             tables.push(newTable);
//         }
//     }
// }
// //console.log(tables);

// /*----------------------------------------------------------------FOOD_PRICE- THis One Works ---*/

// let Total_Price = ``;
// let totalPrice = 0;
// let tips = 0;
// for (const pTable of tables) {
//     totalPrice += Math.round(pTable.Price);
//     tips = Math.round(totalPrice * 0.02);
// }

// /*--------------------------------------------------------------HTML_Preview-Price THis One Works ---*/

// //console.log(totalPrice);
// //console.log(tips);
// Total_Price = `<div>Total Price is $${totalPrice}.00 && Tips $${tips}.00 </div>`;
// document.getElementById("mPrices").innerHTML = Total_Price;
// /*---------------------------------------------------------HTML_Preview-Tables THis One Works ---*/

// let MarianaTable = ` `;
// for (let table of tables) {
//     MarianaTable += `<fieldset class=table><legend>Table_${table.id} </legend> <ul>`;
//     for (const row in table) {
//         MarianaTable += `<li class =list>${row} : ${table[row]}</li>`;
//     }
//     MarianaTable += `</ul>  </fieldset>`;
// }
// document.getElementById("mariana").innerHTML = MarianaTable;

// /*--------------------------------------------------------------HTML_Preview-Price THis One is on progress ---*/
// /* let table_4_price = tables[0].Price;
// table_4_price = 0;
// for (const meal of tables[0]) {
//     switch (meal) {
//         case meal.Alcohol_Drink:
//             break;

//         default:
//             break;
//     }
// }
//  */

// //document.getElementById("mPrice").innerHTML = totalPrice;
