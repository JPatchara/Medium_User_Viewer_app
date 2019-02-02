var medium = require('medium-sdk')

var client = new medium.MediumClient({
  clientId: 'f64c891179d4',
  clientSecret: '7b260edc20fa5b2b2be974dc6eff731f790108ca'
})

var redirectURL = 'https://MDUViewer/callbackurl.com'

var url = client.getAuthorizationUrl('secretState', redirectURL, [
  medium.Scope.BASIC_PROFILE, medium.Scope.PUBLISH_POST,
  medium.Scope.LIST_PUBLICATIONS
])
console.log(url)
