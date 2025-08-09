function detectType(value) {
    if (value === null) return "null";
    if (Array.isArray(value)) return "array";

    const type = typeof value;

    if (type === "object") return "object";
    if (type === "string") return "string";
    if (type === "number") return "number";
    if (type === "boolean") return "boolean";
    if (type === "undefined") return "undefined";
    if (type === "symbol") return "symbol";
    if (type === "function") return "function";

    return "unknown";

}

console.log(detectType("str"));