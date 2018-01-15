var envObj = {
  dev: "http://localhost:4051",
  localhost: "http://localhost:4051",
  "test.foobar.com": "https://testapi.foobar.com",
  "foobar.com": "https://api.foobar.com"
};

export default envObj[window.location.hostname] || envObj.dev;
