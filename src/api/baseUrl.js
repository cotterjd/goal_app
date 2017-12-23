var envObj = {
  dev: "http://localhost:4050",
  localhost: "http://localhost:4050",
  "test.foobar.com": "https://testapi.foobar.com",
  "foobar.com": "https://api.foobar.com"
};

export default envObj[window.location.hostname] || envObj.dev;
