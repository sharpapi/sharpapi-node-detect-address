![SharpAPI GitHub cover](https://sharpapi.com/sharpapi-github-php-bg.jpg "SharpAPI Node.js Client")

# Address Detector API for Node.js

## 📍 Detect and extract addresses from text — powered by SharpAPI AI.

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
6. [Use Cases](#use-cases)
7. [API Endpoint](#api-endpoint)
8. [Related Packages](#related-packages)
9. [License](#license)

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

const text = 'Our office is at 123 Main Street, New York, NY 10001';

async function processText() {
  try {
    // Submit processing job
    const statusUrl = await service.detectAddress(text);
    console.log('Job submitted. Status URL:', statusUrl);

    // Fetch results (polls automatically until complete)
    const result = await service.fetchResults(statusUrl);
    console.log('Result:', result.getResultJson());
  } catch (error) {
    console.error('Error:', error.message);
  }
}

processText();
```

---

## API Documentation

### Methods

The service provides methods for processing content asynchronously. All methods return a status URL for polling results.

**Parameters:**
- `content` (string, required): The content to process
- `language` (string, optional): Output language
- `voice_tone` (string, optional): Desired tone (e.g., professional, casual)
- `context` (string, optional): Additional context for better results

For complete API specifications, see the [Postman Documentation](https://documenter.getpostman.com/view/31106842/2s9Ye8faUp).

### Response Format

The API returns structured JSON data. Response format varies by endpoint - see documentation for details.

---

## Examples

### Basic Example

```javascript
const { SharpApiDetectAddressService } = require('@sharpapi/sharpapi-node-detect-address');

const service = new SharpApiDetectAddressService(process.env.SHARP_API_KEY);

// Customize polling behavior if needed
service.setApiJobStatusPollingInterval(10);  // Poll every 10 seconds
service.setApiJobStatusPollingWait(180);     // Wait up to 3 minutes

// Use the service
// ... (implementation depends on specific service)
```

For more examples, visit the [Product Page](https://sharpapi.com/en/catalog/ai/content-marketing-automation).

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

For detailed API specifications, refer to:
- [Postman Documentation](https://documenter.getpostman.com/view/31106842/2s9Ye8faUp)
- [Product Page](https://sharpapi.com/en/catalog/ai/content-marketing-automation)

---

## Related Packages

- [@sharpapi/sharpapi-node-detect-emails](https://www.npmjs.com/package/@sharpapi/sharpapi-node-detect-emails)
- [@sharpapi/sharpapi-node-detect-phones](https://www.npmjs.com/package/@sharpapi/sharpapi-node-detect-phones)
- [@sharpapi/sharpapi-node-detect-urls](https://www.npmjs.com/package/@sharpapi/sharpapi-node-detect-urls)

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
