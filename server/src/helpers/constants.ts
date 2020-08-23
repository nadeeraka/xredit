export const __prod__ = process.env.NODE_ENV === "production";

export const port: string | number = process.env.port || 8000;