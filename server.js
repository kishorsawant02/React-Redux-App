/**
 * @envConfig - projects base configuration
*/
var app = require('./app')();
/**
 * Setting port
 */
app.set('port', process.env.PORT || 3000);

/**
 * Opening port lo listion to url API's
 */
app.listen(app.get('port'), function () {
    console.log('::Listining localhost ::', +app.get('port'));
    console.log('\nhttp://localhost:3000/dist/index.html');
});
