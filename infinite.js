javasript:(function () {
   var randomElementsUrl = "https://raw.githubusercontent.com/unfiltering/Infinite-Craft-Element-Manager/main/src/randomElements.json";
   var elementsUrl = "https://raw.githubusercontent.com/unfiltering/Infinite-Craft-Element-Manager/main/src/elements.json";
   var defaultDataUrl = "https://raw.githubusercontent.com/unfiltering/Infinite-Craft-Element-Manager/main/src/defaultData.json";

   function loadElementsFromUrl(url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
         if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
               var elementsData = JSON.parse(xhr.responseText);
               callback(null, elementsData);
            } else {
               callback("Failed to load elements: " + xhr.status);
            }
         }
      };
      xhr.open("GET", url, true);
      xhr.send();
   }

   function giveAllExcept(elementsData) {
      elementsData.forEach(function (categoryData) {
         if (categoryData.category.toLowerCase() !== 'elements') {
            return;
         }
         categoryData.elements.forEach(function (element) {
            if (element.text.toLowerCase() !== 'fire' && element.text.toLowerCase() !== 'wind' && element.text.toLowerCase() !== 'earth' && element.text.toLowerCase() !== 'water') {
               addItemToLocalStorage(element.text, element.emoji, element.discovered);
            }
         });
      });
   }

   function showElementPicker(elementsData) {
      var existingElementPicker = document.getElementById('elementPickerContainer');
      if (existingElementPicker) {
         document.body.removeChild(existingElementPicker);
      } else {
         var elementPickerContainer = document.createElement('div');
         elementPickerContainer.id = 'elementPickerContainer';
         elementPickerContainer.style.position = 'fixed';
         elementPickerContainer.style.top = '50%';
         elementPickerContainer.style.left = '50%';
         elementPickerContainer.style.transform = 'translate(-50%, -50%)';
         elementPickerContainer.style.backgroundColor = 'white';
         elementPickerContainer.style.padding = '20px';
         elementPickerContainer.style.border = '2px solid black';
         elementPickerContainer.style.height = '80%';
         elementPickerContainer.style.overflow = 'auto';
         elementPickerContainer.style.width = '42%';
         elementPickerContainer.style.textAlign = 'center';
         elementPickerContainer.style.border = '2px solid #CDCDCD';
         elementPickerContainer.style.borderRadius = '10px';
         elementPickerContainer.style.msOverflowStyle = 'none';
         elementPickerContainer.style.scrollbarWidth = 'none';
         elementPickerContainer.style.webkitOverflowScrolling = 'touch';
         var closeButton = document.createElement('img');
         closeButton.src = 'https://raw.githubusercontent.com/unfiltering/Infinite-Craft-Element-Manager/main/src/close.png';
         closeButton.style.position = 'absolute';
         closeButton.style.top = '10px';
         closeButton.style.left = '10px';
         closeButton.style.cursor = 'pointer';
         closeButton.style.width = '50px';
         closeButton.style.height = '50px';
         closeButton.addEventListener('click', function () {
            document.body.removeChild(elementPickerContainer);
         });
         elementPickerContainer.appendChild(closeButton);
         if (!Array.isArray(elementsData) || elementsData.length === 0) {
            console.error("Invalid elements data:", elementsData);
            return;
         }
         var header = document.createElement('div');
         header.style.textAlign = 'center';
         elementPickerContainer.appendChild(header);
         var title = document.createElement('h3');
         var headerText = '⚛️ Infinite Craft Element Manager ⚛️';
         var titleParts = headerText.split(' ');
         title.innerHTML = titleParts.map(part => `<span>${part}</span>`).join(' ');
         title.style.fontWeight = '500';
         title.style.fontSize = '24px';
         var emojiSpans = title.querySelectorAll('span');
         emojiSpans.forEach(span => {
            if (span.textContent.trim().startsWith('⚛️') || span.textContent.trim().startsWith('🌟')) {
               span.style.textShadow = '2px 2px 4px rgba(146, 102, 204, 0.5)';
            }
         });
         header.appendChild(title);
         // Create a new category section for options
         var optionsCategorySection = document.createElement('div');
         optionsCategorySection.style.textAlign = 'center';
         elementPickerContainer.appendChild(optionsCategorySection);
         // Create a title for the options category
         var optionsCategoryTitle = document.createElement('h2');
         optionsCategoryTitle.textContent = "Options";
         optionsCategoryTitle.style.fontStyle = 'none';
         optionsCategoryTitle.style.fontSize = '23px';
         optionsCategoryTitle.style.marginTop = '5px';
         optionsCategoryTitle.style.textAlign = 'center';
         optionsCategorySection.appendChild(optionsCategoryTitle);
         // Create a list for the options
         var optionsList = document.createElement('ul');
         optionsList.style.listStyleType = 'none';
         optionsList.style.padding = '0';
         optionsCategorySection.appendChild(optionsList);
         // Create and append buttons for each option
         var giveAllButton = document.createElement('li');
         giveAllButton.textContent = 'Give All Natural Elements';
         giveAllButton.style.cursor = 'pointer';
         giveAllButton.style.padding = '10px';
         giveAllButton.style.borderBottom = '1px solid #ccc';
         giveAllButton.style.marginBottom = '5px';
         giveAllButton.style.listStyleType = 'none';
         giveAllButton.addEventListener('click', function () {
            giveAllExcept(elementsData);
            document.body.removeChild(elementPickerContainer);
         });
         optionsList.appendChild(giveAllButton);
         var addElementButton = document.createElement('li');
         addElementButton.textContent = 'Create Element';
         addElementButton.style.cursor = 'pointer';
         addElementButton.style.padding = '10px';
         addElementButton.style.borderBottom = '1px solid #ccc';
         addElementButton.style.marginBottom = '5px';
         addElementButton.style.listStyleType = 'none';
         addElementButton.addEventListener('click', addItem);
         optionsList.appendChild(addElementButton);
         var removeElementButton = document.createElement('li');
         removeElementButton.textContent = 'Delete Element';
         removeElementButton.style.cursor = 'pointer';
         removeElementButton.style.padding = '10px';
         removeElementButton.style.borderBottom = '1px solid #ccc';
         removeElementButton.style.marginBottom = '5px';
         removeElementButton.style.listStyleType = 'none';
         removeElementButton.addEventListener('click', removeItem);
         optionsList.appendChild(removeElementButton);
         var addRandomElementButton = document.createElement('li');
         addRandomElementButton.textContent = 'Give Random Element';
         addRandomElementButton.style.cursor = 'pointer';
         addRandomElementButton.style.padding = '10px';
         addRandomElementButton.style.borderBottom = '1px solid #ccc';
         addRandomElementButton.style.marginBottom = '5px';
         addRandomElementButton.style.listStyleType = 'none';
         addRandomElementButton.addEventListener('click', addRandomItem);
         optionsList.appendChild(addRandomElementButton);
         var resetElementsButton = document.createElement('li');
         resetElementsButton.textContent = 'Reset Elements';
         resetElementsButton.style.cursor = 'pointer';
         resetElementsButton.style.padding = '10px';
         resetElementsButton.style.borderBottom = '1px solid #ccc';
         resetElementsButton.style.marginBottom = '5px';
         resetElementsButton.style.listStyleType = 'none';
         resetElementsButton.addEventListener('click', resetData);
         optionsList.appendChild(resetElementsButton);
         var creditsButton = document.createElement('li');
         creditsButton.textContent = 'Credits';
         creditsButton.style.cursor = 'pointer';
         creditsButton.style.padding = '10px';
         creditsButton.style.borderBottom = '1px solid #ccc';
         creditsButton.style.marginBottom = '5px';
         creditsButton.style.listStyleType = 'none';
         creditsButton.addEventListener('click', showCredits);
         optionsList.appendChild(creditsButton);
         optionsList.appendChild(creditsButton);
         elementsData.forEach(function (categoryData) {
            var categorySection = document.createElement('div');
            categorySection.style.textAlign = 'center';
            elementPickerContainer.appendChild(categorySection);
            var categoryTitle = document.createElement('h2'); // Changed to 'h2' for semantic purposes
            categoryTitle.textContent = " -- " + categoryData.category + " --";
            categoryTitle.style.fontStyle = 'none'; // Changed to 'style.fontStyle'
            categoryTitle.style.fontSize = '21px'; // Changed to 'px' for proper size unit
            categoryTitle.style.marginTop = '20px';
            categoryTitle.style.textAlign = 'center';
            categorySection.appendChild(categoryTitle);
            var itemList = document.createElement('ul');
            itemList.style.listStyleType = 'none';
            itemList.style.padding = '0';
            categorySection.appendChild(itemList);
            categoryData.elements.forEach(function (element) {
               var listItem = document.createElement('li');
               listItem.textContent = element.emoji + ' ' + element.text;
               listItem.style.cursor = 'pointer';
               listItem.style.padding = '10px';
               listItem.style.borderBottom = '1px solid #ccc';
               listItem.style.marginBottom = '5px';
               listItem.addEventListener('click', function () {
                  addItemToLocalStorage(element.text, element.emoji, element.discovered);
                  document.body.removeChild(elementPickerContainer);
               });
               itemList.appendChild(listItem);
            });
         });
         var footer = document.createElement('footer');
         footer.textContent = "all elements are sourced from a dynamic JSON feed, subject to continuous updates.";
         footer.style.marginTop = '5px';
         footer.style.color = 'grey';
         footer.style.fontStyle = 'italic';
         footer.style.fontSize = '10px';
         elementPickerContainer.appendChild(footer);
         document.body.appendChild(elementPickerContainer);
      }
   }

   function toggleMenu() {
      loadElementsFromUrl(elementsUrl, function (error, elementsData) {
         if (error) {
            console.error(error);
            return;
         }
         showElementPicker(elementsData);
      })
   }

   function toggleButtonVisibility() {
      var addButtonContainer = document.querySelector('.add-item-button-container');
      if (addButtonContainer.style.opacity === '1' || addButtonContainer.style.opacity === '') {
         localStorage.setItem('buttonVisibility', 'hidden');
         addButtonContainer.style.transition = 'opacity 0.5s ease';
         addButtonContainer.style.opacity = '0';
      } else {
         localStorage.setItem('buttonVisibility', 'visible');
         addButtonContainer.style.transition = 'opacity 0.5s ease';
         addButtonContainer.style.opacity = '1';
      }
   }

   function setInitialButtonVisibility() {
      var buttonVisibility = localStorage.getItem('buttonVisibility');
      if (!buttonVisibility) {
         localStorage.setItem('buttonVisibility', 'visible');
      } else if (buttonVisibility === 'hidden') {
         var addButtonContainer = document.querySelector('.add-item-button-container');
         addButtonContainer.style.opacity = '0';
      }
   }
   document.addEventListener('keydown', function (event) {
      if (event.key === 'q' || event.key === 'Q') {
         toggleMenu();
      }
      if (event.key === 'e' || event.key === 'E') {
         toggleButtonVisibility();
      }
   });

   function loadRandomElementsFromUrl(callback) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
         if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
               var randomElementsData = JSON.parse(xhr.responseText);
               callback(null, randomElementsData);
            } else {
               callback("Failed to load random elements: " + xhr.status);
            }
         }
      };
      xhr.open("GET", randomElementsUrl, true);
      xhr.send();
   }

   function addRandomItem() {
      var storedIndices = localStorage.getItem('selectedIndices');
      var selectedIndices = storedIndices ? JSON.parse(storedIndices) : [];
      loadRandomElementsFromUrl(function (error, randomElementsData) {
         if (error) {
            console.error(error);
            return;
         }
         if (selectedIndices.length >= randomElementsData.length) {
            localStorage.removeItem('selectedIndices');
            selectedIndices = [];
         }
         var filteredIndices = randomElementsData.reduce(function (acc, _, index) {
            if (!selectedIndices.includes(index)) {
               acc.push(index);
            }
            return acc;
         }, []);
         if (filteredIndices.length === 0) {
            return;
         }
         var randomIndex = Math.floor(Math.random() * filteredIndices.length);
         var selectedIndex = filteredIndices[randomIndex];
         var randomElement = randomElementsData[selectedIndex];
         addItemToLocalStorage(randomElement.text, randomElement.emoji, randomElement.discovered);
         // Store the index of the selected item
         selectedIndices.push(selectedIndex);
         localStorage.setItem('selectedIndices', JSON.stringify(selectedIndices));
      });
   }

   function addItem() {
      var itemName = prompt("What's the name of the element?");
      if (itemName === null) {
         return;
      }
      var itemEmoji = prompt("What's the emoji for " + itemName + "?");
      if (itemEmoji === null) {
         return;
      }

      function capitalizeName(name) {
         var exceptions = ["or", "the", "and", "of", "as", "an", "wordthatisntcapitalised"];
         var words = name.toLowerCase().split(' ');
         for (var i = 0; i < words.length; i++) {
            if (i === 0 || !exceptions.includes(words[i])) {
               words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            }
         }
         return words.join(' ');
      }
      itemName = capitalizeName(itemName);
      try {
         var storedData = localStorage.getItem('infinite-craft-data');
         var data = storedData ? JSON.parse(storedData) : {
            "elements": []
         };
      } catch (error) {
         console.error("Error parsing JSON data from localStorage:", error);
         return;
      }
      var existingItemIndex = data.elements ? data.elements.findIndex(function (element) {
         return element.text.toLowerCase() === itemName.toLowerCase();
      }) : -1;
      var isDiscovered = false;
      if (existingItemIndex === -1) {
         var discoveryConfirmation = confirm("Is '" + itemEmoji + " " + itemName + "' a first discovery? (cancel for no)");
         if (discoveryConfirmation) {
            isDiscovered = true;
         }
      } else {
         isDiscovered = data.elements[existingItemIndex].discovered;
      }
      addItemToLocalStorage(itemName, itemEmoji, isDiscovered);
   }

   function addItemToLocalStorage(itemName, itemEmoji, isDiscovered) {
      try {
         var storedData = localStorage.getItem('infinite-craft-data');
         var data = storedData ? JSON.parse(storedData) : {
            "elements": []
         };
      } catch (error) {
         console.error("Error parsing JSON data from localStorage:", error);
         return;
      }
      data.elements = data.elements || [];
      data.elements.push({
         "text": itemName,
         "emoji": itemEmoji,
         "discovered": isDiscovered
      });
      localStorage.setItem('infinite-craft-data', JSON.stringify(data));
      window.location.reload();
   }

   function removeItem() {
      var itemNameToRemove = prompt("What's the name of the element you want to remove?");
      if (itemNameToRemove === null) {
         return;
      }
      itemNameToRemove = itemNameToRemove.toLowerCase();
      try {
         var storedData = localStorage.getItem('infinite-craft-data');
         var data = storedData ? JSON.parse(storedData) : {
            "elements": []
         };
      } catch (error) {
         console.error("Error parsing JSON data from localStorage:", error);
         return;
      }
      var indexToRemove = data.elements.findIndex(function (element) {
         return element.text.toLowerCase() === itemNameToRemove;
      });
      if (indexToRemove !== -1) {
         data.elements.splice(indexToRemove, 1);
         localStorage.setItem('infinite-craft-data', JSON.stringify(data));
         window.location.reload();
      } else {
         alert('Element ' + itemNameToRemove + ' not found!');
      }
   }

	function resetData() {
		if(confirm("Are you sure you want to reset to the default elements?")) {
			fetch(defaultDataUrl).then(response => response.json()).then(data => {
				var defaultData = data;
				localStorage.setItem('infinite-craft-data', JSON.stringify(defaultData));
				window.location.reload();
			}).catch(error => {
				console.error('Error fetching default data.', error);
			});
		}
	}

   function showCredits() {
      window.open("https://github.com/unfiltering/Infinite-Craft-Element-Manager/");
   }

   function addButton() {
      var addButtonContainer = document.querySelector('.add-item-button-container');
      if (!addButtonContainer) {
         addButtonContainer = document.createElement('div');
         addButtonContainer.className = 'add-item-button-container';
         addButtonContainer.style.position = 'fixed';
         addButtonContainer.style.bottom = '10px';
         addButtonContainer.style.left = '10px';
         document.body.appendChild(addButtonContainer);
      }
      addButtonContainer.innerHTML = `<button id="elementPickerButton" style="margin-top: 10px; margin-right: 5px; background-image: url('https://raw.githubusercontent.com/unfiltering/Infinite-Craft-Element-Manager/main/src/open.png'); background-size: cover; width: 50px; height: 50px; border: 1px solid #9266CC; border-radius: 6px;"></button>`;
      var elementPickerButton = document.getElementById('elementPickerButton');
      if (elementPickerButton) {
         elementPickerButton.addEventListener('click', function () {
            loadElementsFromUrl(elementsUrl, function (error, elementsData) {
               if (error) {
                  console.error(error);
                  return;
               }
               showElementPicker(elementsData);
            });
         });
      }
      var resetElementsButton = document.getElementById('resetElementsButton');
      if (resetElementsButton) {
         resetElementsButton.addEventListener('click', resetData);
      }
      var creditsButton = document.getElementById('creditsButton');
      if (creditsButton) {
         creditsButton.addEventListener('click', showCredits);
      }
      setInitialButtonVisibility();
   }

   function setup() {
      if (!localStorage.getItem("setupPerformed")) {
         localStorage.setItem('setupPerformed', '0');
         window.location.reload();
      } else {
         if (localStorage.getItem("setupPerformed") === "0") {
            localStorage.setItem('setupPerformed', '1');
            fetch(defaultDataUrl).then(response => response.json()).then(data => {
               var defaultData = data;
               localStorage.setItem('infinite-craft-data', JSON.stringify(defaultData));
            }).catch(error => {
               console.error('Error fetching default data.', error);
            });
            alert("This site was directly ripped from Neal, I do not own this site!\nWelcome to Infinite Craft Sandbox");
            alert("Considering this is the first time you're using Infinite Craft Sandbox, we'll walk you through the basics.");
            alert("Since this site is ripped from Neal, you cannot merge, since infinite craft uses an API, which I dont have.");
            alert("Press Q to quickly open the Elements Manager, you can create and remove elements, pick an element to give, or give all known elements to yourself!\nPress E to hide the menu button in the bottom right corner for trolling.");
            alert("This message wont appear again, have fun!");
         }
      }
   }
   setup();
   addButton();
   console.log("[⚛️]: Loaded")
})();
var getEventListeners;
var keydown = getEventListeners(window).keydown[0].listener;
var gameWindow = document.querySelector("#__layout > * > .container");
var logo = document.querySelector(".site-title");
// Lookup existing id or generate a fresh one
var id = localStorage.getItem("infinite-jest-id") || crypto.randomUUID();
localStorage.setItem("infinite-jest-id", id);
var overlaps = [];
var conn = new WebSocket("wss://infinite-jest.dixonary.co.uk:2024");
conn.onopen = function () {
    console.log("Connected to Infinite Jest");
    conn.send(id);
    // Disable search
    removeEventListener("keydown", keydown);
};
conn.onmessage = function (e) {
    console.log("==> ".concat(e.data));
    if (e.data === "join") {
        summonJoinForm();
        return;
    }
    if (JSON.parse(e.data).clients) {
        // Room update!
        renderRoom(JSON.parse(e.data));
        return;
    }
};
var sendEvent = function (event, payload) {
    console.log("<== ".concat(payload));
    conn.send(JSON.stringify({ event: event, payload: payload }));
};
var renderRoom = function (room) {
    var _a, _b, _c;
    (_a = document.querySelector("#room")) === null || _a === void 0 ? void 0 : _a.remove();
    var $room = document.createElement("room");
    $room.id = "room";
    var $header = document.createElement("h2");
    $header.textContent = room.rid;
    $room.appendChild($header);
    if (room.leader === id) {
        var $forms = document.createElement("div");
        if (room.status === "Lobby") {
            var $playForm = document.createElement("form");
            $playForm.id = "playForm";
            $playForm.style.display = "flex";
            $playForm.style.flexDirection = "column";
            $playForm.style.gap = "0.5em";
            $playForm.innerHTML = "\n      <div><button type=\"submit\" style=\"margin-right:0.5em\">Start game</button><span>with</span><input type=\"number\" id=\"num-items\" min=\"1\" max=\"25\" value=\"9\" style=\"margin:0 0.5em; width:3em\"/><span> targets</span></div><div style=\"display:flex;gap:0.5em\">Include: <textarea id=\"include-targets\" rows=\"5\"></textarea></div>";
            $forms.appendChild($playForm);
            $playForm.onsubmit = function (e) {
                e.preventDefault();
                var itemsInput = document.querySelector("#num-items");
                var items = itemsInput.value;
                var includeInput = document.querySelector("#include-targets");
                sendEvent("start", JSON.stringify({ numItems: parseInt(items), includeTargets: includeInput.value.split("\n") }));
            };
        }
        $room.appendChild($forms);
    }
    var $items = document.createElement("ul");
    $items.id = "items-list";
    var _loop_1 = function (item) {
        var $li = document.createElement("li");
        $li.classList.add("target");
        if (((_b = item.claim) === null || _b === void 0 ? void 0 : _b.by) === id) {
            $li.classList.add("yes");
        }
        else if (item.claim) {
            $li.classList.add("no");
        }
        $li.innerHTML += "".concat(item.name);
        if (item.claim) {
            var userName = room.clients[item.claim.by].name;
            $li.textContent += " (".concat(userName, " with ").concat(item.claim.with, ")");
        }
        // Add an unclaim trigger
        if (((_c = item.claim) === null || _c === void 0 ? void 0 : _c.by) === id) {
            $li.addEventListener("dblclick", function () {
                sendEvent("unclaim", JSON.stringify({ unclaim: item.name }));
            });
        }
        $items.appendChild($li);
    };
    for (var _i = 0, _d = room.items; _i < _d.length; _i++) {
        var item = _d[_i];
        _loop_1(item);
    }
    $room.appendChild($items);
    var $spacer = document.createElement("div");
    $spacer.classList.add("spacer");
    $spacer.style.flexGrow = "1";
    $room.appendChild($spacer);
    var $clients = document.createElement("ul");
    $clients.id = "clients-list";
    for (var _e = 0, _f = Object.values(room.clients); _e < _f.length; _e++) {
        var client = _f[_e];
        var $li = document.createElement("li");
        $li.innerHTML = client.name;
        if (room.leader === client.id) {
            $li.innerHTML += "<span style='font-size:1.1em;'> &star;</span>";
        }
        $clients.appendChild($li);
    }
    $room.appendChild($clients);
    gameWindow.appendChild($room);
    // Move the "reset" button next to the other buttons
    var $reset = document.querySelector(".reset");
    var $sideControls = document.querySelector(".sidebar");
    $reset.style.position = "absolute";
    $reset.style.bottom = "40px";
    $reset.style.textAlign = "right";
    setInterval(function () {
        $reset.style.width = "".concat($sideControls.getBoundingClientRect().width, "px");
        $reset.style.left = "".concat($sideControls.getBoundingClientRect().left, "px");
    }, 100);
    // Add mousemove handlers to items
    var realItems = Array.from(document.querySelectorAll(".item.instance:not(.instance-hide"));
    var targets = Array.from(document.querySelectorAll("#items-list li"));
};
var overlap = function (e1, e2) {
    var r1 = e1.getBoundingClientRect();
    var r2 = e2.getBoundingClientRect();
    return !(r1.right < r2.left ||
        r1.left > r2.right ||
        r1.bottom < r2.top ||
        r1.top > r2.bottom);
};
var summonJoinForm = function () {
    var $joinForm = document.createElement("form");
    $joinForm.id = "joinForm";
    $joinForm.style.display = "flex";
    $joinForm.style.flexDirection = "column";
    // add 2px gap between elements
    $joinForm.style.gap = "2px";
    $joinForm.innerHTML = "\n    <input type=\"text\" id=\"room-code\" placeholder=\"Room Code\" autocomplete=\"off\" />\n    <input type=\"text\" id=\"player-name\" placeholder=\"Player Name\" autocomplete=\"off\" />\n    <button type=\"submit\">Join</button>\n    ";
    gameWindow.appendChild($joinForm);
    $joinForm.style.position = "absolute";
    $joinForm.style.top = "".concat(logo.getBoundingClientRect().bottom + 8, "px");
    $joinForm.style.left = "0.5em";
    $joinForm.onsubmit = function (e) {
        e.preventDefault();
        var roomInput = document.querySelector("#room-code");
        var room = roomInput.value;
        if (room.length === 0)
            return;
        var nameInput = document.querySelector("#player-name");
        var name = nameInput.value;
        if (name.length === 0)
            return;
        joinRoom(room, name);
    };
    // TESTING
    // joinRoom("UWCS", "Alex");
};
var joinRoom = function (room, name) {
    sendEvent("join", JSON.stringify({ room: room, name: name }));
    var joinForm = document.querySelector("#joinForm");
    joinForm.remove();
};
// Add new styles to the page
var style = document.createElement("style");
style.textContent = "\n  #room {\n    display:flex;\n    flex-direction:column;\n\n    justify-content:space-between;\n\n    position:absolute;\n    left:8px;\n    top:50px;\n    height:calc(100% - 58px);\n\n    overflow:hidden;\n\n    & h2 {\n      font-size: 20px;\n      margin: 0;    \n    }\n  }\n  #items-list {\n    list-style-type: none;\n    padding: 0;\n    overflow-y:auto;\n    direction:rtl;\n    \n    display: flex;\n    flex-direction: column;\n    align-items: end;\n\n    &>*{\n      direction:ltr;\n    }\n    & li {\n      padding: 9px 10px 8px;\n      border-radius:5px;\n      border:1px solid #c8c8c8;\n      font-size:16.4px;\n      display:block;\n      \n      &:not(:last-child) {\n        margin-bottom: 6px;\n      }\n\n      &::before {\n        content: \"\uD83C\uDFAF\";\n        margin-right: 6px;\n        display:inline-block;\n      }\n      &.yes {\n        background: linear-gradient(0deg,#d4ffd4,#fff 70%);\n        &::before {\n          content: \"\u2611\uFE0F\";\n        }\n      }\n      &.no {\n        background: linear-gradient(0deg,#ffd4d4,#fff 70%);\n\n        &::before {\n          content: \"\u274C\";\n        }\n      }\n\n      background: linear-gradient(0deg,#fffad4,#fff 70%);\n    }\n  }\n  #clients-list {\n    list-style-type: none;\n    padding: 0;\n    &::before {\n      content: \"Players:\";\n      margin-bottom: 6px;\n      font-weight: bold;\n      display: block;\n    }\n  }\n\n  ";
document.body.appendChild(style);
document.addEventListener("mousemove", function (e) {
    overlaps.length = 0;
    // If left mouse button is down
    if (e.buttons === 1) {
        var $room_1 = document.querySelector("#room");
        // First, get a list of all items that overlap the room
        var items = Array.from(document.querySelectorAll(".item.instance:not(.instance-hide)")).filter(function (item) { return overlap(item, $room_1); });
        var targets = Array.from(document.querySelectorAll("#items-list li"));
        var _loop_2 = function (item) {
            var _loop_3 = function (target) {
                if (overlap(item, target)) {
                    if (!overlaps.some(function (o) { return o.item === item; }) && !overlaps.some(function (o) { return o.target === target; })) {
                        overlaps.push({ item: item, target: target });
                    }
                }
            };
            for (var _d = 0, targets_2 = targets; _d < targets_2.length; _d++) {
                var target = targets_2[_d];
                _loop_3(target);
            }
        };
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            _loop_2(item);
        }
        for (var _a = 0, targets_1 = targets; _a < targets_1.length; _a++) {
            var target = targets_1[_a];
            // Change target background color
            target.style.background = "";
        }
        for (var _b = 0, overlaps_1 = overlaps; _b < overlaps_1.length; _b++) {
            var _c = overlaps_1[_b], item = _c.item, target = _c.target;
            // Change target background color
            target.style.background = "linear-gradient(0deg,#d6fcff,#fff 90%)";
        }
    }
});
document.addEventListener("mouseup", function (e) {
    // If the overlaps array is not empty, claim the first item with the first target
    while (overlaps.length > 0) {
        var item = overlaps[0].item;
        var target = overlaps[0].target;
        overlaps.shift();
        sendEvent("claim", JSON.stringify({ item: item.textContent, target: target.textContent }));
    }
});
