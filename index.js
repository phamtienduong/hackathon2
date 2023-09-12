let cards =[];
        document.getElementById("saveButton").addEventListener("click", () => {
            let cardNumber = document.getElementById("cardNumber").value;
            let expiryDate = document.getElementById("expiryDate").value;
            let cvc = document.getElementById("cvc").value;

            if (validateCardInfo(cardNumber, expiryDate, cvc)) {
                let card = {
                    cardNumber: cardNumber,
                    expiryDate: expiryDate,
                    cvc: cvc,
                };

                cards.push(card);
                clearForm();
                displayCardList();
            }
        });
        function validateCardInfo(cardNumber, expiryDate, cvc) {
            return true; 
        }
        function clearForm() {
            document.getElementById("cardNumber").value = "";
            document.getElementById("expiryDate").value = "";
            document.getElementById("cvc").value = "";
        }

        function displayCardList() {
            let cardTableBody = document.getElementById("cardTableBody");
            cardTableBody.innerHTML = "";

            cards.forEach((card, index) => {
                let row = document.createElement("tr");

                let cardImgCell = document.createElement("td");
                cardImgCell.innerHTML = `<img src="./img/mastercard.jpg" alt="paypal" style="width: 150px; height: 100px">`;
                row.appendChild(cardImgCell);

                let cardNumberCell = document.createElement("td");
                cardNumberCell.textContent = card.cardNumber.replace(/.(?=.{6,})/g, "*");
                row.appendChild(cardNumberCell);

                let expiryDateCell = document.createElement("td");
                expiryDateCell.textContent = card.expiryDate;
                row.appendChild(expiryDateCell);

                let cvcCell = document.createElement("td");
                cvcCell.textContent = card.cvc.replace(/\d/g, "*");
                row.appendChild(cvcCell);

                let actionsCell = document.createElement("td");

                let viewButton = document.createElement("button");
                viewButton.textContent = "View";
                viewButton.addEventListener("click", () => viewCard(index));
                actionsCell.appendChild(viewButton);

                let editButton = document.createElement("button");
                editButton.textContent = "Edit";
                editButton.addEventListener("click", () => editCard(index));
                actionsCell.appendChild(editButton);

                let deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.addEventListener("click", () => deleteCard(index));
                actionsCell.appendChild(deleteButton);

                row.appendChild(actionsCell);

                cardTableBody.appendChild(row);
            });

            document.getElementById("cardList").style.display = "block";
        }

        function viewCard(index) {
            let card = cards[index];
            alert(`Card Number: ${card.cardNumber}\nExpiry Date: ${card.expiryDate}\nCVC: ${card.cvc}`);
        }

        function editCard(index) {
            let card = cards[index];
            document.getElementById("cardNumber").value = card.cardNumber;
            document.getElementById("expiryDate").value = card.expiryDate;
            document.getElementById("cvc").value = card.cvc;
            cards.splice(index,1)
            displayCardList();

        }

        function deleteCard(index) {
            cards.splice(index, 1);
            displayCardList();
        }
