const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'hip hop music',
  },
  {
    tag_name: 'RnB music',
  },
  {
    tag_name: 'black',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;