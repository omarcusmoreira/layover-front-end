import constants from '../constants/Utils';

const ret = {
	formatDateToApi(date) { return date !== null ? `${date.toISOString().split('T')[0]}T${date.toTimeString().split(' ')[0]}` : null; },
	getPersonAcronym(name) {
		let splittedAcronym = name.match(/[A-Z]/g);

		if (splittedAcronym !== null) {
			let firstLetter = splittedAcronym.slice(0, 1);
			let lastLetter = splittedAcronym.slice(-1);

			return firstLetter + lastLetter;
		}
		else return name.substring(0,1);
	},
    getPersonFirstName(name) {
		let splittedName = name.split(" ");

        return splittedName[0];
	},
	getMinDateFilter() {
		return new Date(2020, 0, 1, 0, 0, 1);
	},
	getTodayDateFilter() {
		var date = new Date();
		return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
	},
	getTomorrowDate() {
		var date = new Date();
		date.setDate(date.getDate() + 1);
		return date;
	},
	getOneYearPastNowDate() {
		var date = new Date();
		date.setFullYear(date.getFullYear() - 1);
		date.setMonth(0);
		return date;
	},
	getFiveYearsFromNowDate() {
		var date = new Date();
		date.setFullYear(date.getFullYear() + 5);
		date.setMonth(11);
		return date;
	},
	handleDownloadFromStorage(container, file, fileName) {
		let downloadLink = document.createElement('a');
		downloadLink.href = `${constants.storageURL}/${container}/${file}?v=${this.makeRandomKey(6)}`;
		downloadLink.download = fileName;
		downloadLink.target = 'blank';
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
	},
	makeRandomKey(length) {
		var result = '';
		var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;

		for ( var i = 0; i < length; i++ ) result += characters.charAt(Math.floor(Math.random() * charactersLength));

		return result;
	},
    isValidString(string) { return string !== undefined && string !== null && string !== "" },
    isValidInt(int) { return int !== undefined && int !== null && isNaN(int) === false}
}

export default ret;