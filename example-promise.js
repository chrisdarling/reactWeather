function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Jacksonville', function(err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise (location) {
  return new Promise(function(resolve, reject) {
    resolve(80);
    reject('City not found');
  });
}

getTempPromise('Jacksonville').then(function(temp) {
  console.log('success', temp);
}, function(err) {
  console.log('error', err);
});
