function price() {
	// adding currency symbol

	document.querySelectorAll("#price").forEach((price) => {
		if (price.textContent.length > 0) price.textContent = `₴${price.textContent}`;
	});
}

module.exports = price;
