/**
 * The request object for the Subtractor Service.
 */
export interface ISubtractorServiceRequest {
    /**
     * The number to subtract from
     */
    a: number;

    /**
     * The number to subtract
     */
    b: number;
}

/**
 * The response object for the Subtractor Service.
 */
export interface ISubtractorServiceResponse {
    /**
     * The difference of the two numbers
     */
    result: number;
}

/**
 * Interface for the Subtractor Service client.
 */
export interface ISubtractorServiceClient {
    call(
        request: ISubtractorServiceRequest
    ): Promise<ISubtractorServiceResponse>;
}

/**
 * Implementation of the Subtractor Service client.
 */
class SubtractorServiceClientImpl implements ISubtractorServiceClient {
    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async call(
        request: ISubtractorServiceRequest
    ): Promise<ISubtractorServiceResponse> {
        const response = await fetch(this.baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        });

        if (!response.ok) {
            throw new Error(
                `Subtractor Service returned status ${response.status}`
            );
        }

        return await response.json();
    }
}

/**
 * Factory function to create an instance of the Subtractor Service client.
 * @param baseUrl The base URL of the Subtractor Service.
 * @returns An instance of the Subtractor Service client.
 */
export function createSubtractorServiceClient(
    baseUrl: string
): ISubtractorServiceClient {
    return new SubtractorServiceClientImpl(baseUrl);
}
