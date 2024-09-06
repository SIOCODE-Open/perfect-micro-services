/**
 * The request object for the Multiplier Service.
 */
export interface IMultiplierServiceRequest {
    /**
     * The first number
     */
    a: number;

    /**
     * The second number
     */
    b: number;
}

/**
 * The response object for the Multiplier Service.
 */
export interface IMultiplierServiceResponse {
    /**
     * The product of the two numbers
     */
    result: number;
}

/**
 * Interface for the Multiplier Service client.
 */
export interface IMultiplierServiceClient {
    call(
        request: IMultiplierServiceRequest
    ): Promise<IMultiplierServiceResponse>;
}

/**
 * Implementation of the Multiplier Service client.
 */
class MultiplierServiceClientImpl implements IMultiplierServiceClient {
    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async call(
        request: IMultiplierServiceRequest
    ): Promise<IMultiplierServiceResponse> {
        const response = await fetch(this.baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        });

        if (!response.ok) {
            throw new Error(
                `Multiplier Service returned status ${response.status}`
            );
        }

        return await response.json();
    }
}

/**
 * Factory function to create an instance of the Multiplier Service client.
 * @param baseUrl The base URL of the Multiplier Service.
 * @returns An instance of the Multiplier Service client.
 */
export function createMultiplierServiceClient(
    baseUrl: string
): IMultiplierServiceClient {
    return new MultiplierServiceClientImpl(baseUrl);
}
