// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];
const country = document.querySelector( '#country' );
const suggestions = document.querySelector( '#suggestions' );
country.addEventListener( 'keyup', function() {
  let input = this.value.toLowerCase();
  let countries = getCountries( input );
  suggestions.innerHTML = '';
  for( c of countries ) {
    let suggestion = document.createElement( 'div' );
    suggestion.innerText = c;
    suggestion.classList.add( 'suggestion' );
    suggestions.append( suggestion );
  }
});

getCountries = ( input ) => {
  let results = [];
  for( i=0; i < countryList.length; i++ )
  {
    if( countryList[i].toLowerCase().startsWith( input ) )
      results.push( countryList[i] );
  }
  return results;
}
// Complete this code to implement country autocompletion.