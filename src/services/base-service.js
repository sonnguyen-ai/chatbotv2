/**
 * Base API Service class providing common HTTP request functionality
 */
class BaseApiService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl || '';
        this.defaultHeaders = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
    }

    /**
     * Builds the full URL including query parameters
     * @param {string} endpoint - The API endpoint
     * @param {Object} params - Query parameters object
     * @returns {string} The complete URL
     */
    buildUrl(endpoint, params = {}) {
        const url = new URL(this.baseUrl + endpoint);
        Object.keys(params).forEach(key => {
            if (params[key] !== undefined && params[key] !== null) {
                url.searchParams.append(key, params[key]);
            }
        });
        return url.toString();
    }

    /**
     * Handles the API response
     * @param {Response} response - Fetch Response object
     * @returns {Promise} Parsed response data
     * @throws {Error} If response is not ok
     */
    async handleResponse(response) {
        const contentType = response.headers.get('content-type');
        const isJson = contentType && contentType.includes('application/json');
        const data = isJson ? await response.json() : await response.text();

        if (!response.ok) {
            const error = {
                status: response.status,
                statusText: response.statusText,
                data
            };
            throw error;
        }

        return data;
    }

    /**
     * Performs a GET request
     * @param {string} endpoint - API endpoint
     * @param {Object} options - Request options
     * @param {Object} options.params - Query parameters
     * @param {Object} options.headers - Custom headers
     * @returns {Promise} Response data
     */
    async get(endpoint, options = {}) {
        const { params = {}, headers = {} } = options;
        const url = this.buildUrl(endpoint, params);

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    ...this.defaultHeaders,
                    ...headers
                }
            });

            return await this.handleResponse(response);
        } catch (error) {
            console.error('GET request failed:', error);
            throw error;
        }
    }

    /**
     * Performs a POST request
     * @param {string} endpoint - API endpoint
     * @param {Object} data - Request body data
     * @param {Object} options - Request options
     * @param {Object} options.params - Query parameters
     * @param {Object} options.headers - Custom headers
     * @returns {Promise} Response data
     */
    async post(endpoint, data = {}, options = {}) {
        const { params = {}, headers = {} } = options;
        const url = this.buildUrl(endpoint, params);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    ...this.defaultHeaders,
                    ...headers
                },
                body: JSON.stringify(data)
            });

            return await this.handleResponse(response);
        } catch (error) {
            console.error('POST request failed:', error);
            throw error;
        }
    }
}

export default BaseApiService;