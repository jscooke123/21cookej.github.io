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
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Run Custom JS</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            overflow: hidden;
        }

        #iframeContainer {
            width: 100vw;
            height: 100vh;
            overflow: hidden;
        }

        #runCustomJSButton {
            display: none;
        }

        #menuButton {
            position: fixed;
            bottom: 20px;
            left: 20px;
            background-color: red;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            z-index: 1000;
            display: none;
        }

        iframe {
            width: 100%;
            height: 100%;
            border: none;
        }

        #menu {
            position: fixed;
            bottom: 60px;
            left: 20px;
            background-color: white;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
            display: none;
            z-index: 1001;
            overflow: auto;
            width: 30%;
            height: auto;
        }

        .input {
            margin-bottom: 10px;
        }

        input[type="text"] {
            padding: 5px;
            margin-right: 5px;
        }

        .closeButton {
            background-color: #f44336;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
            float: right;
        }

        #run {
            background-color: blue;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
        }

        #jsInput {
            width: 100%;
            height: 100px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

    <button id="runCustomJSButton">Run Custom JS</button>
    <button id="menuButton">Open Menu</button>

    <div id="iframeContainer">
        <iframe id="contentIframe" src="https://infinite-craft.com/" title="Example Website"></iframe>
    </div>

    <div id="menu">
        <button class="closeButton" id="closeMenu">X</button>
        <h3>Custom JavaScript Input</h3>
        <textarea id="jsInput" placeholder="Paste your JavaScript code here"></textarea>
        <button id="runJsButton">Run JavaScript</button>

        <form id="form">
            <h3>Generate Cheat</h3>
            <div class="input">
                <input type="text" name="emoji" value="😀" autocomplete="off" required />
                <input type="text" name="object" placeholder="Text" autocomplete="off" required />
            </div>
            <input type="submit" value="Generate cheat" />
        </form>
        <div class="output">
            <textarea id="output" placeholder="Cheat will be shown here" readonly></textarea>
            <button id="run">Run</button>
        </div>
    </div>

    <!-- Include your JavaScript file directly -->
    <script src="infinite/infinite.js"></script>
    <script src="infinite.js"></script>
    <script>
        const form = document.getElementById('form');
        const output = document.getElementById('output');
        const runButton = document.getElementById('run');
        const runJsButton = document.getElementById('runJsButton');
        const menu = document.getElementById('menu');
        const menuButton = document.getElementById('menuButton');
        const closeMenuButton = document.getElementById('closeMenu');
        const jsInput = document.getElementById('jsInput');

        function safeToString(x) {
            return x.replaceAll('"', '\\"');
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = e.target.object.value;
            const emoji = e.target.emoji.value;

            output.value = `javascript:var name = "${safeToString(name)}"; var emoji = "${safeToString(emoji)}"; var data; if (localStorage.getItem('infinite-craft-data')) { data = JSON.parse(localStorage.getItem('infinite-craft-data')); } else { data = { elements: [{ text: 'Water', emoji: '💧', discovered: false }, { text: 'Fire', emoji: '🔥', discovered: false }, { text: 'Wind', emoji: '🌬️', discovered: false }, { text: 'Earth', emoji: '🌍', discovered: false },], darkMode: false, }; } if (!data.elements.find((x) => x.text === name && x.emoji === emoji)) { data.elements.push({ text: name, emoji: emoji, discovered: false }); localStorage.setItem('infinite-craft-data', JSON.stringify(data)); location.reload(); }`;
        });

        runButton.addEventListener('click', () => {
            const scriptContent = output.value;
            const newScript = document.createElement('script');
            newScript.textContent = scriptContent;
            document.body.appendChild(newScript);
        });

        runJsButton.addEventListener('click', () => {
            const jsCode = jsInput.value;
            try {
                eval(`(function() { ${jsCode} })();`);
            } catch (error) {
                alert('Error executing JavaScript: ' + error);
            }
        });

        menuButton.addEventListener('click', () => {
            menu.style.display = 'block';
        });

        closeMenuButton.addEventListener('click', () => {
            menu.style.display = 'none';
        });
    </script>
</body>
</html>
