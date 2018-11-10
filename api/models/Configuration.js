/**
 * Configuration.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    updatedAt: false,
    createdAt: false,
    
    name: {
      type: 'string',
      required: true,
    },

    gap: {
      type: 'number',
      columnType: 'float',
      required: true,
    },

    threshold: {
      type: 'number',
      columnType: 'float',
      required: true,
    },

  },
  customToJSON: function () {
    return _.omit(this, ['createdAt', 'updatedAt'])
  }
};
