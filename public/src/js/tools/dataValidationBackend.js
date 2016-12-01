module.exports = {
	nodeValidateString: function(inputText, minLength, maxLength, inputTextName) {
		var customAlertMessage = 'The '+inputTextName+' must be between '+minLength+' and '+maxLength+' chars, it can contain only letters';
        if (minLength === 0 && (!inputText || inputText === '')){ return true; }
		return validateRegex(inputText, minLength, maxLength, /^[a-zA-Z]+$/, customAlertMessage);
	},
    nodeValidateStringNumbersAndSpaces: function(inputText, minLength, maxLength, inputTextName){
        var customAlertMessage = 'The '+inputTextName+' must be between '+minLength+' and '+maxLength+' chars, it can contain only letters, numbers, and spaces';
        if (minLength === 0 && (!inputText || inputText === '')){ return true; }
        return validateRegex(inputText, minLength, maxLength, /^[a-zA-Z0-9 ]+$/, customAlertMessage);
    },
	nodeValidateNumber: function(inputNumber, minLength, maxLength, inputNumberName) {
		var customAlertMessage = 'The '+inputNumberName+' must be between '+minLength+' and '+maxLength+' digits, it can contain only numbers';
		return validateRegex(inputNumber, minLength, maxLength, /^[0-9]+$/, customAlertMessage);
	},
	nodeValidatePhoneNumber: function(inputPhoneNumber) {
		var customAlertMessage = "The phone number must be in format 000 000 0000, separators allowed are space ( ), dot (.) and dash (-)";
		return validateRegex(inputPhoneNumber, 12, 12, /^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/, customAlertMessage);
	},
	nodeValidateEmailAddress: function(inputEmailAddress) {
		var customAlertMessage = "The email address is not valid";
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		//var re = /\S+@\S+\.\S+/; //paranoid mode off
		return validateRegex(inputEmailAddress, 7, 100, re, customAlertMessage);
	},
    nodeValidatePassword: function(inputPassword, minLength, maxLength){
        var customAlertMessage = "The password must be between " + minLength + " and " + maxLength + " chars, it can contain only letters and numbers, and it must have at least 1 number, 1 uppercase and 1 lowercase character";
        //we can use this if we want special chars /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{1,}$/
        return validateRegex(inputPassword, minLength, maxLength, /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{1,}$/, customAlertMessage);
    },
    nodeValidateListOfStrings: function(inputText, stringsAllowed){
      if (stringsAllowed.indexOf(inputText) == -1) {
        console.log('The string selected is not included in the list: ' + stringsAllowed);
        return 'The string selected is not included in the list: ' + stringsAllowed;
      } else {
        return 'success';
      }   
    }
};

var validateRegex = function(inputData, minLength, maxLength, regex, customAlertMessage){
	if (!inputData || inputData.length < minLength || inputData.length > maxLength || !regex.test(inputData)){
		if (customAlertMessage && customAlertMessage !== ''){
			console.log(customAlertMessage);
            return customAlertMessage;
		} else {
			console.log('I can not validate the input data');
            return 'I can not validate the input data';
		}
	}
	return 'success';
};

