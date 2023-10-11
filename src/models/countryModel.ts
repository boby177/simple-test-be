export const countriesQuery = `
  query {
    countries {
      name
      languages {
        name
      }
    }
  }
`;

export const arabEmiratesCountryQuery = `
query {
    country(code: "AE") {
      awsRegion
      capital
      code
      currencies
      currency
      emoji
      emojiU
      name
      phone
      phones
    }
  }
`;
