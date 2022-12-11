/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Read a NWDAF Analytics
*
* eventId EventId Identify the analytics.
* anaReq EventReportingRequirement Identifies the analytics reporting requirement information. (optional)
* eventFilter EventFilter Identify the analytics. (optional)
* supportedFeatures String To filter irrelevant responses related to unsupported features (optional)
* tgtUe TargetUeInformation Identify the target UE information. (optional)
* returns AnalyticsData
* */
const getNWDAFAnalytics = ({ eventId, anaReq, eventFilter, supportedFeatures, tgtUe }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        eventId,
        anaReq,
        eventFilter,
        supportedFeatures,
        tgtUe,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  getNWDAFAnalytics,
};
