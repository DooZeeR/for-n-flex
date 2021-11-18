const generateArray = function(amount){
    let returnArray = [];

    amount = parseInt(amount);
    // Number.isNaN(amount) !== true
    if (!Number.isNaN(amount)) {
        for (let i = 0; i < amount; i++) {
            returnArray.push(`${i}`);
        }      
    } else{
        returnArray.push("error");
    }
    return returnArray;
}


function numberConvert(arr){
    const convertedArr = [];
    let arrlength = arr.length.toString().length;

    // KÉPERNYŐ MÉRETEZÉS-------------------------
    let window = 720;
    if (arr.length < 720) {
        root.style.height = `100vh`;
    }else {
        let windowVh = ((arr.length / window) * 100).toFixed(0);
        root.style.height = `${windowVh}vh`;
    }
    //---------------------------------------------------
    for (let item of arr) {
        if (item === "error") {
            convertedArr.push("error");
            return convertedArr;
        }
        if (arrlength > item.toString().length) {
            let count = arrlength - item.toString().length;
            for (let i = 0; i < count; i++) {
                item = "0" + item.toString();
            }
            convertedArr.push(item);
        } else if (arrlength < item.toString().length) {
            console.log("ERROR");
        } else {
            convertedArr.push(item);
        }
    }
    return convertedArr;
}



function loadEvent() {
    const root = document.getElementById("root");
    const list1 = generateArray(720);
    const list = numberConvert(list1);
    numberConvert(list);

    if (list[0] !== "error") {
        for (const item of list) {
            root.insertAdjacentHTML("beforeend", `<div>${item}</div>`);
        }
    } else if ( list[0] === "error" ) {
        root.insertAdjacentHTML("beforeend", `<div>${list[0]}</div>`);
    }
}
  
window.addEventListener("load", loadEvent);





/*
window.addEventListener("load", function(){
    ez is valid
});
window.addEventListener("load", () => {
    ez is valid
});
*/