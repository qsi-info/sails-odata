var _ = require('lodash');

/**
 * ODataPolicy
 *
 * Setup and validate the OData request according to the following Specification Rules:
 *
 * http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part1-protocol/odata-v4.0-errata02-os-part1-protocol-complete.html#_Toc406398224
 * 8.1.5: Header OData-Version
 *    OData services MUST include the OData-Version header on a response to
 *    specify the version of the protocol used to generate the response. 
 *
 * http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part1-protocol/odata-v4.0-errata02-os-part1-protocol-complete.html#_Toc406398231
 * 8.2.6: Header OData-Isolation
 *    If the service doesn’t support OData-Isolation:snapshot and this header
 *    was specified on the request, the service MUST NOT process the request
 *    and MUST respond with 412 Precondition Failed.
 *
 * http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part1-protocol/odata-v4.0-errata02-os-part1-protocol-complete.html#_Toc406398232
 * 8.2.7: Header OData-MaxVersion
 *    If specified the service MUST generate a response with an OData-Version
 *    less than or equal to the specified OData-MaxVersion.
 *
 * http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part1-protocol/odata-v4.0-errata02-os-part1-protocol-complete.html#_Toc406398233
 * 8.2.8: Header Prefer
 *    8.2.8.1 Preference odata.allow-entityreferences
 *    8.2.8.2 Preference odata.callback
 *    8.2.8.3 Preference odata.continue-on-error
 *    8.2.8.4 Preference odata.include-annotations
 *    8.2.8.5 Preference odata.maxpagesize
 *    8.2.8.6 Preference odata.track-changes
 *    8.2.8.7 Preference return=representation and return=minimal
 *    8.2.8.8 Preference respond-async
 *    8.2.8.9 Preference wait
 */
module.exports = function (req, res, next) {
  var maxVersion = parseFloat(req.header('OData-MaxVersion'));
  if (!_.isNaN(maxVersion) && maxVersion < sails.config.odata.version) {
    return res.badRequest({ error: 'Server does not support OData-MaxVersion='+ maxVersion });
  }

  var isolation = res.header('OData-Isolation');
  if (isolation == 'snapshot') {
    return res.status(412).json({ error: 'OData-Isolation is not currently supported' });
  }

  res.header('OData-Version', sails.config.odata.version);
};
