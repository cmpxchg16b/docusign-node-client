/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Folder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Folder'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.FoldersResponse = factory(root.Docusign.ApiClient, root.Docusign.Folder);
  }
}(this, function(ApiClient, Folder) {
  'use strict';


  /**
   * The FoldersResponse model module.
   * @module model/FoldersResponse
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>FoldersResponse</code>.
   * @alias module:model/FoldersResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>FoldersResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FoldersResponse} obj Optional instance to populate.
   * @return {module:model/FoldersResponse} The populated <code>FoldersResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('folders')) {
        obj['folders'] = ApiClient.convertToType(data['folders'], [Folder]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/Folder>} folders
   */
  exports.prototype['folders'] = undefined;



  return exports;
}));


