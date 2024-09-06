import {
    createAdderServiceClient
} from "adder-service-client";
import { expect } from "chai";

describe('Adder Service', () => {

    const client = createAdderServiceClient(
        "http://127.0.0.1:3000"
    );

    it("should correctly add 1 + 2", async () => {

        const response = await client.call({
            a: 1,
            b: 2
        });

        // We should get a JS object
        expect(response).to.be.a("object");

        // The result should be 3
        expect(response.result).to.eq(3);

    })

});