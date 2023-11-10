let categories = [];

function updateCategoryTable() {
    const categoryTable = document.getElementById("categoryTable");
    const tbody = categoryTable.querySelector("tbody");

    tbody.innerHTML = "";

    categories.forEach(category => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const messageIdCell = document.createElement("td");
        const telegramIdCell = document.createElement("td");
        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");

        nameCell.textContent = category;
        messageIdCell.textContent = category.messageId;
        telegramIdCell.textContent = category.telegramId
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteCategory(category);

        actionCell.appendChild(deleteButton);
        row.appendChild(nameCell);
        row.appendChild(messageIdCell);
        row.appendChild(telegramIdCell);
        row.appendChild(actionCell);

        tbody.appendChild(row);
    });
}

function deleteCategory(categoryName) {
    categories = categories.filter(category => category !== categoryName);
    updateCategoryTable();

    localStorage.setItem("categories", JSON.stringify(categories));
}

if (localStorage.getItem("categories")) {
    categories = JSON.parse(localStorage.getItem("categories"));
    updateCategoryTable();
}

function addCategory() {
    const categoryName = document.getElementById("categoryName").value;

    if (categoryName) {
        categories.push(categoryName);
        updateCategoryTable();
        document.getElementById("categoryName").value = "";

        localStorage.setItem("categories", JSON.stringify(categories));
    }
}

function redirectTo(url) {
    window.location.href = url;
}

updateCategoryTable();