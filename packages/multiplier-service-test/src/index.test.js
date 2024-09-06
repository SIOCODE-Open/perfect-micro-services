import { createMultiplierServiceClient } from "multiplier-service-client";
import { expect } from "chai";

describe("Multiplier Service", () => {
    const client = createMultiplierServiceClient("http://127.0.0.1:3002");

    it("should correctly multiply 2 * 3", async () => {
        const response = await client.call({
            a: 2,
            b: 3
        });

        expect(response).to.be.a("object");
        expect(response.result).to.eq(6);
    });
});
