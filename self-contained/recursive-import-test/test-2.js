import { foo } from "./bar.js";

export function v1()
{
    return "This is v1";
}

export function v2()
{
    return `This is v2 ${foo}`;
}
