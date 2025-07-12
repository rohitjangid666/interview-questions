/* ************************************* QUESTION 1 START ************************************* */
/*
  Question:
  const user = {
    name: 'Rohit',
    address: {
      personal: {
        city: 'Jodhpur',
        state: 'Rajasthan'
      },
      office: {
        city: 'Jodhpur',
        state: 'Rajasthan',
      }
    }
  }

  Output:
  {
    user_name: 'Rohit',
    user_address_personal_city: 'Jodhpur',
    user_address_personal_state: 'Rajasthan',
    user_address_office_city: 'Jodhpur',
    user_address_office_state: 'Rajasthan',
  }
*/

const question1 = {
  name: 'Rohit',
  address: {
    personal: {
      city: 'Jodhpur',
      state: 'Rajasthan',
    },
    office: {
      city: 'Jodhpur',
      state: 'Rajasthan',
    },
  },
};

function question1Output(defaultObj, prefix = 'user') {
  const output = {};

  function recurse(obj, currentKey) {
    const keys = Object.keys(obj);
    keys.forEach(element => {
      if (typeof obj[element] === 'object') {
        recurse(obj[element], `${currentKey}_${element}`);
      } else {
        output[`${currentKey}_${element}`] = obj[element];
      }
    });
  }

  recurse(defaultObj, prefix);

  return output;
}

console.log(question1Output(question1));
/* ************************************* QUESTION 1 END ************************************* */

/* ************************************* QUESTION 2 START ************************************* */
/* ************************************* QUESTION 2 END ************************************* */

/* ************************************* QUESTION 3 START ************************************* */
/* ************************************* QUESTION 3 END ************************************* */

/* ************************************* QUESTION 4 START ************************************* */
/* ************************************* QUESTION 4 END ************************************* */

/* ************************************* QUESTION 5 START ************************************* */
/* ************************************* QUESTION 5 END ************************************* */
