// Cookies accept box
const delayInSeconds = 1;
const consentValidityInDays = 30;
const consentKey = "cookieConsent";

function hasConsent() {
	const consentData = localStorage.getItem(consentKey);
	if (!consentData) return false;

	try {
		const { acceptedAt } = JSON.parse(consentData);
		const expirationDate = new Date(acceptedAt);
		expirationDate.setDate(expirationDate.getDate() + consentValidityInDays);
		return new Date() < expirationDate;
	} catch {
		return false;
	}
}

function saveConsent() {
	localStorage.setItem(consentKey, JSON.stringify({ acceptedAt: new Date().toISOString() }));
}

function showPopup() {
	const popupBox = document.getElementById("c-popup");
	popupBox.classList.add("show");
}

function hidePopup() {
	const popupBox = document.getElementById("c-popup");
	popupBox.classList.remove("show");
}

export function cookieAccept() {
	if (!hasConsent()) {
		setTimeout(showPopup, delayInSeconds * 1000);
	}

	document.getElementById("c-accept").addEventListener("click", () => {
		saveConsent();
		hidePopup();
	});
}
