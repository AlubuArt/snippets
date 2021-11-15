
// Traditional anonymous function
function getUrlParamterValueOne(url) {
  //use the regex, returns an array of strings
  const match = url.match(/([=]).+/g);
  //remove "=" from the first string in the result
  const result = match[0].substring(1);

  return result;
}
//example
getUrlParamterValueOne("https://www.youtube.com/watch?v=mK7lDooAGJw"); // 'mK7lDooAGJw'


//Shorter version af traditional function
function getUrlParamterValueTwo(url) {
    return (url.match(/([=]).+/g)[0].substring(1));
}
//example
getUrlParamterValueTwo("https://www.youtube.com/watch?v=mK7lDooAGJw") // 'mK7lDooAGJw'


//ES6 short syntax  arrow function
const getUrlParamterValueThree = url => url.match(/([=]).+/g)[0].substring(1);
//example
getUrlParamterValueThree("https://www.youtube.com/watch?v=mK7lDooAGJw") // 'mK7lDooAGJw'