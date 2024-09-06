/**
 * The request object for the Adder Service.
 */
export interface IAdderServiceRequest {
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
 * The response object for the Adder Service.
 */
export interface IAdderServiceResponse {
    /**
     * The sum of the two numbers
     */
    result: number;
}

/**
 * Interface for the Adder Service client.
 */
export interface IAdderServiceClient {
    call(request: IAdderServiceRequest): Promise<IAdderServiceResponse>;
}

/**
 * Implementation of the Adder Service client.
 */
class AdderServiceClientImpl implements IAdderServiceClient {
    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async call(request: IAdderServiceRequest): Promise<IAdderServiceResponse> {
        const response = await fetch(this.baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        });

        if (!response.ok) {
            throw new Error(`Adder Service returned status ${response.status}`);
        }

        return await response.json();
    }
}

/**
 * Factory function to create an instance of the Adder Service client.
 * @param baseUrl The base URL of the Adder Service.
 * @returns An instance of the Adder Service client.
 */
export function createAdderServiceClient(baseUrl: string): IAdderServiceClient {
    return new AdderServiceClientImpl(baseUrl);
}
