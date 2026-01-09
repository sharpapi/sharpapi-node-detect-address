const { SharpApiCoreService, SharpApiJobTypeEnum } = require('@sharpapi/sharpapi-node-core');

/**
 * Service for detecting addresses in text using SharpAPI.com
 */
class SharpApiDetectAddressService extends SharpApiCoreService {
  /**
   * Creates a new SharpApiDetectAddressService instance
   * @param {string} apiKey - Your SharpAPI API key
   * @param {string} [apiBaseUrl='https://sharpapi.com/api/v1'] - API base URL
   */
  constructor(apiKey, apiBaseUrl = 'https://sharpapi.com/api/v1') {
    super(apiKey, apiBaseUrl, '@sharpapi/sharpapi-node-detect-address/1.0.1');
  }

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
