//continuing by clicking on screen
$(document).click(function(e) {
	if($("span.continue-block").length) {
		$("span.continue-block").first().removeClass('continue-block');
	}
	e.stopPropagation();
	return false;
});

//limiting history
Config.history.controls = false;
Config.history.maxStates = 3;

//changing default return text
l10nStrings.macroReturnText = 'You blink.';

//returning from StoryMenu passage without undoing variables
$(document).on(':passagestart', function (ev) {
	if (!ev.passage.tags.includes('noreturn')) {
		State.variables.return = ev.passage.title;
	}
});

postrender.quotes = function(passage, content, task) {
	function processTextNodes(node) {
		if (node.nodeType == 3) { // text node
			node.nodeValue = node.nodeValue
				.replace(/\b'/g, '\u2019')
				.replace(/'\b/g, '\u2018')
				.replace(/"(\s|$)/g, '\u201D$1')
				.replace(/(\s|^)"/g, '$1\u201C');
		} else {
			for (var i in node.childNodes) {
				processTextNodes(node.childNodes[i]);
			}
		}
	}
	processTextNodes(passage);
};

Config.saves.onSave = function (save, details) {
	if (details.type === "slot") {
		save.title = prompt("Enter Save Slot Title:", save.title);
	}
};

Config.saves.onLoad = function (save) {
	console.log("Loaded game title: " + save.title);
	console.log("Loaded game version: " + save.version);
};	