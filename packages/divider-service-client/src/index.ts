/**
 * The request object for the Divider Service.
 */
export interface IDividerServiceRequest {
    /**
     * The number to divide
     */
    a: number;

    /**
     * The number to divide by
     */
    b: number;
}

/**
 * The response object for the Divider Service.
 */
export interface IDividerServiceResponse {
    /**
     * The quotient of the two numbers
     */
    result: number;
}

/**
 * Interface for the Divider Service client.
 */
export interface IDividerServiceClient {
    call(request: IDividerServiceRequest): Promise<IDividerServiceResponse>;
}

/**
 * Implementation of the Divider Service client.
 */
class DividerServiceClientImpl implements IDividerServiceClient {
    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async call(
        request: IDividerServiceRequest
    ): Promise<IDividerServiceResponse> {
        const response = await fetch(this.baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        });

        if (!response.ok) {
            throw new Error(
                `Divider Service returned status ${response.status}`
            );
        }

        return await response.json();
    }
}

/**
 * Factory function to create an instance of the Divider Service client.
 * @param baseUrl The base URL of the Divider Service.
 * @returns An instance of the Divider Service client.
 */
export function createDividerServiceClient(
    baseUrl: string
): IDividerServiceClient {
    return new DividerServiceClientImpl(baseUrl);
}
