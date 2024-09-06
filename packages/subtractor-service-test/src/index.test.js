import { createSubtractorServiceClient } from "subtractor-service-client";
import { expect } from "chai";

describe("Subtractor Service", () => {
    const client = createSubtractorServiceClient("http://127.0.0.1:3001");

    it("should correctly subtract 2 - 1", async () => {
        const response = await client.call({
            a: 2,
            b: 1
        });

        expect(response).to.be.a("object");
        expect(response.result).to.eq(1);
    });
    
});
