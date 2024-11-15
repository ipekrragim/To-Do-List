const add = document.querySelector(".add");
const input = document.querySelector("#input");
const addPlus = document.querySelector("#plusicon");
const list = document.querySelector("#list");
const deleteBtnInp = document.querySelector(".deleteBtnInp");
const listcontainer = document.querySelector(".listcontainer");
const downFilter = document.querySelector("#filter-icon-down");
const upFilter = document.querySelector("#filter-icon-up");

add.addEventListener("click", () => {
    const inputValue = input.value;
    inputValue.className="valufofinput"
    if (inputValue !== "") {
        const listItem = document.createElement("li");
        const itemContent = document.createElement("span");
        itemContent.className = "item-content";
        const itemNumber = (list.children.length) + 1;
        itemContent.textContent = `${itemNumber}. ${inputValue}`;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = 'x';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener("click", () => {
            list.removeChild(listItem);
            if (list.children.length === 0) {
                input.style.display = "block";
                deleteBtnInp.style.display = "block";
                listcontainer.style.display = "none";
            }
            updateIndexNumber(); 
        });
        listItem.append(itemContent, deleteButton);
        list.appendChild(listItem);
        input.value = "";
        deleteBtnInp.style.display = "none";
        input.style.display = "none";
        listcontainer.style.display = "block";
    }
});

deleteBtnInp.addEventListener("click", () => {
    input.value = "";
});

addPlus.addEventListener("click", () => {
    input.style.display = "block";
    deleteBtnInp.style.display = "block";
});

const updateIndexNumber = function() {
    const listItems = [...list.children];
    listItems.forEach((item, index) => {
        const itemContent = item.querySelector(".item-content");
        const listItemText = itemContent.textContent.split('. ')[1];
        itemContent.textContent = `${index + 1}. ${listItemText}`;
    });
};

function sortingAZ() {
    let listItems = [...list.children]; 
    listItems.sort((a, b) => {
        let textA = a.querySelector(".item-content").textContent.split('. ')[1];
        let textB = b.querySelector(".item-content").textContent.split('. ')[1];
        return textA.localeCompare(textB);
    });
    list.innerHTML = "";
    listItems.forEach(item => list.appendChild(item));
}

function sortingZA() {
    let listItems = [...list.children];
    listItems.sort((a, b) => {
        let textA = a.querySelector(".item-content").textContent.split('. ')[1];
        let textB = b.querySelector(".item-content").textContent.split('. ')[1];
        return textB.localeCompare(textA);
    });
    list.innerHTML = "";
    listItems.forEach(item => list.appendChild(item));
}

downFilter.addEventListener("click", () => {
    downFilter.style.display = "none";
    upFilter.style.display = "block";
    sortingZA();
    updateIndexNumber();
});

upFilter.addEventListener("click", () => {
    upFilter.style.display = "none";
    downFilter.style.display = "block";
    sortingAZ()
    updateIndexNumber();
});
    