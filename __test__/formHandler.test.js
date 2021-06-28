import { handleSubmit } from "../src/client/js/formHandler";

test('Submit event succeful', async () => {
    await expect(handleSubmit()).toBeDefined();
});