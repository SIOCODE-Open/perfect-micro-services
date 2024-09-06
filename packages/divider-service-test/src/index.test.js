import { createDividerServiceClient } from "divider-service-client";
import { expect } from "chai";

describe("Divider Service", () => {
    const client = createDividerServiceClient("http://127.0.0.1:3003");

    it("should correctly divide 6 / 3", async () => {
        const response = await client.call({
            a: 6,
            b: 3
        });

        expect(response).to.be.a("object");
        expect(response.result).to.eq(2);
    });

    it("should return an error when dividing by zero", async () => {
        try {
            await client.call({
                a: 6,
                b: 0
            });
            throw new Error("Expected an error");
        } catch (e) {
            expect(e).to.be.an("error");
        }
    });
});
