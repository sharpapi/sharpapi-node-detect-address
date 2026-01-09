const { SharpApiCoreService, SharpApiJobTypeEnum } = require('@sharpapi/sharpapi-node-core');

/**
 * Service for detecting addresses in text using SharpAPI.com
 */
class SharpApiDetectAddressService extends SharpApiCoreService {
  /**
   * Parses the provided text for any possible addresses. Useful for processing
   * and validating chunks of data against physical addresses or detecting addresses
   * in places where they're not expected.
   *
   * @param {string} text
   * @returns {Promise<string>} - The status URL.
   */
  async detectAddress(text) {
    const data = { content: text };
    const response = await this.makeRequest('POST', SharpApiJobTypeEnum.CONTENT_DETECT_ADDRESS.url, data);
    return this.parseStatusUrl(response);
  }
}

module.exports = { SharpApiDetectAddressService };
