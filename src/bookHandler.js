const fs = require('fs');
const path = require('path');

const booksData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'));
// console.log(booksData)
const bookHandlers = {
  Query: {
    books: () => booksData,
    book: (parent, args, context, info) => {
      return booksData.find(book => book.title === args.title);
    },
  },
};

module.exports = bookHandlers;
