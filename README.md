![SharpAPI GitHub cover](https://sharpapi.com/sharpapi-github-php-bg.jpg "SharpAPI Node.js Client")

# Address Detector API for Node.js

## 🎯 Detect and extract addresses from text — powered by SharpAPI AI.

[![npm version](https://img.shields.io/npm/v/@sharpapi/sharpapi-node-detect-address.svg)](https://www.npmjs.com/package/@sharpapi/sharpapi-node-detect-address)
[![License](https://img.shields.io/npm/l/@sharpapi/sharpapi-node-detect-address.svg)](https://github.com/sharpapi/sharpapi-node-client/blob/master/LICENSE.md)

**SharpAPI Address Detector** parses text content and extracts any physical addresses found within. Perfect for data validation, content moderation, and location extraction from unstructured text.

---

## 📋 Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Documentation](#api-documentation)
5. [Examples](#examples)
6. [License](#license)

---

## Requirements

- Node.js >= 16.x
- npm or yarn

---

## Installation

### Step 1. Install the package via npm:

```bash
npm install @sharpapi/sharpapi-node-detect-address
```

### Step 2. Get your API key

Visit [SharpAPI.com](https://sharpapi.com/) to get your API key.

---

## Usage

```javascript
const { SharpApiDetectAddressService } = require('@sharpapi/sharpapi-node-detect-address');

const apiKey = process.env.SHARP_API_KEY; // Store your API key in environment variables
const service = new SharpApiDetectAddressService(apiKey);

const text = `
Please send all correspondence to our headquarters at 123 Main Street,
Suite 400, New York, NY 10001. Our European office is located at
456 Oxford Street, London W1C 1AP, United Kingdom.
`;

async function detectAddresses() {
  try {
    // Submit detection job
    const statusUrl = await service.detectAddress(text);
    console.log('Job submitted. Status URL:', statusUrl);

    // Fetch results (polls automatically until complete)
    const result = await service.fetchResults(statusUrl);
    console.log('Detected addresses:', result.getResultJson());
  } catch (error) {
    console.error('Error:', error.message);
  }
}

detectAddresses();
```

---

## API Documentation

### Methods

#### `detectAddress(text: string): Promise<string>`

Detects and extracts addresses from the provided text.

**Parameters:**
- `text` (string, required): The text content to scan for addresses

**Returns:**
- Promise<string>: Status URL for polling the job result

**Example:**
```javascript
const statusUrl = await service.detectAddress(textWithAddresses);
const result = await service.fetchResults(statusUrl);
```

### Response Format

The API returns detected addresses in a structured format:

```json
{
  "addresses": [
    {
      "address": "123 Main Street, Suite 400, New York, NY 10001",
      "confidence": 0.95,
      "components": {
        "street": "123 Main Street",
        "suite": "Suite 400",
        "city": "New York",
        "state": "NY",
        "postal_code": "10001",
        "country": "United States"
      }
    }
  ]
}
```

---

## Examples

### Basic Address Detection

```javascript
const { SharpApiDetectAddressService } = require('@sharpapi/sharpapi-node-detect-address');

const service = new SharpApiDetectAddressService(process.env.SHARP_API_KEY);

const sampleText = `
Contact us at our office: 789 Tech Boulevard, San Francisco, CA 94105.
For shipping inquiries: 321 Warehouse Lane, Austin, TX 78701.
`;

service.detectAddress(sampleText)
  .then(statusUrl => service.fetchResults(statusUrl))
  .then(result => {
    const addresses = result.getResultJson();
    console.log(`Found ${addresses.length} addresses:`);
    addresses.forEach((addr, index) => {
      console.log(`${index + 1}. ${addr.address}`);
    });
  })
  .catch(error => console.error('Detection failed:', error));
```

### Custom Polling Configuration

```javascript
const service = new SharpApiDetectAddressService(process.env.SHARP_API_KEY);

// Customize polling behavior
service.setApiJobStatusPollingInterval(5);  // Poll every 5 seconds
service.setApiJobStatusPollingWait(120);    // Wait up to 2 minutes

const statusUrl = await service.detectAddress(text);
const result = await service.fetchResults(statusUrl);
```

---

## Use Cases

- **Data Validation**: Extract and validate addresses from user-submitted forms
- **Content Moderation**: Detect addresses in user-generated content where they shouldn't be
- **Location Extraction**: Parse unstructured text to extract location information
- **Document Processing**: Extract addresses from scanned documents or PDFs (after OCR)
- **Lead Generation**: Extract business addresses from web content
- **Compliance**: Identify and remove addresses from public-facing content for privacy

---

## API Endpoint

**POST** `/content/detect_address`

For detailed API specifications, refer to the main [SharpAPI Documentation](https://documenter.getpostman.com/view/31106842/2s9Ye8faUp).

---

## Related Packages

- [@sharpapi/sharpapi-node-detect-emails](https://www.npmjs.com/package/@sharpapi/sharpapi-node-detect-emails) - Email detection
- [@sharpapi/sharpapi-node-detect-phones](https://www.npmjs.com/package/@sharpapi/sharpapi-node-detect-phones) - Phone number detection
- [@sharpapi/sharpapi-node-detect-urls](https://www.npmjs.com/package/@sharpapi/sharpapi-node-detect-urls) - URL detection
- [@sharpapi/sharpapi-node-client](https://www.npmjs.com/package/@sharpapi/sharpapi-node-client) - Full SharpAPI SDK

---

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

---

## Support

- **Documentation**: [SharpAPI.com Documentation](https://sharpapi.com/documentation)
- **Issues**: [GitHub Issues](https://github.com/sharpapi/sharpapi-node-client/issues)
- **Email**: contact@sharpapi.com

---

**Powered by [SharpAPI](https://sharpapi.com/) - AI-Powered API Workflow Automation**
