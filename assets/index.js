console.log("Hello World!");

if (process.env.NODE_ENV === 'development') {
    require('../index.html')
}